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

    // end the response
    res.end();
});

// listen on the port - 80 // run the server

serve.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
 });