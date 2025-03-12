// require the http module
const http = require('http');
// define the port
const PORT = 80;

// require the fs module - file system
const fs = require('fs');
// require the path module - to manipulate file paths
const path = require('path');
// define the logs file name and folder name
const logs = 'error.log';
const folder = 'storage/logs/';
const logFile = path.join(__dirname, folder, logs);

// require the Circle module
const circle = require('./modules/Circle');

// create the server
const serve = http.createServer((req, res) => {

    // to avoid favicon error that duplicate log errors
    if (req.url === '/favicon.ico') return res.end();

    // calculate the area of a circle - input from terminal
    try {
        if (!process.argv[2]) throw new Error('Please provide a radius');

        let area = circle.area(process.argv[2]);

        if (isNaN(area) || process.argv[2] <= 0) throw new Error('Please provide a valid number');
        // set the response header
        res.writeHead(200, {
            'Content-Type': 'text/html',
            'Cache-Control': 'no-cache',
            'Pragma': 'no-cache',
            'Expires': '0'
        });
        res.write(`The area of a circle with radius ${process.argv[2]} is ${area}`);
        console.log(`The area of a circle with radius ${process.argv[2]} is ${area}`);

    } catch (error) {
        res.writeHead(400, {
            'Content-Type': 'text/plain',
            'Cache-Control': 'no-cache',
            'Pragma': 'no-cache',
            'Expires': '0'
        });

        // check if the file exists
        if (!fs.existsSync(logFile)) {
            fs.writeFileSync(logFile, '');
        }

        // append the error to the file
        fs.appendFileSync(logFile, `${new Date()} - ${error}\n`);

        // return error message
        res.write(error.message);
        console.log(error.message);
    }

    // end the response
    res.end();
});

// listen on the port - 80 // run the server

serve.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});