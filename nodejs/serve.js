// require the http module
const http = require('http');

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

    // set the content
    res.write('<h1>Hello World!</h1>');
    
    // use of Magic Methods
    res.write(`dirname : ${__dirname} <br>`);
    res.write(`dir + filename : ${__filename} <br>`);

    /**
     *  **TERMINAL**
     * running the server from the terminal you use the command :
     * node serve.js
     * 
     * if you append data after the command, it will be passed as arguments.
     * to access the arguments, you can use the process.argv
     * node serve.js arg1 arg2 arg3 ...
     */
    if(process.argv.length > 2) res.write(`process.argv : ${process.argv[2]}`);

    // end the response
    res.end();
});

// listen on the port - 80 // run the server

serve.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
 });