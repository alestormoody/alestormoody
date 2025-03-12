// require the http module
const http = require('http');

// require the Circle module
const circle = require('./modules/Circle');

// define the port
const PORT = 80;

// create the server
const serve = http.createServer((req, res) => {
    // set the response header
    res.writeHead(200, {
        'Content-Type': 'text/html',
        'Cache-Control': 'no-cache',
        'Pragma': 'no-cache',
        'Expires': '0'
    });

    // calculate the area of a circle - input from terminal
    if(process.argv[2]) res.write(`Area of a circle with radius ${process.argv[2]} is : ${circle.area(process.argv[2])}`);

    // calculate the area of a circle - static input
    let radius = 5;
    res.write(`<br>Area of a circle with radius ${radius} is : ${circle.area(radius)}`);

    // end the response
    res.end();
});

// listen on the port - 80 // run the server

serve.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
 });