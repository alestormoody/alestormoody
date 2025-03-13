// require the modules
const http = require('http');
const errors = require('./modules/errors');
const router = require('./modules/router');

// configurations
const PORT = process.argv[2] || 3000;

// create the server
const requestHandler = (req, res) => {

    // handle the favicon
    if(req.url === '/favicon.ico') return;

    // handle the routes
    router.handle(req, res);

    // end the response
    res.end(JSON.stringify({ data: 'end here!' }));
};

const serve = http.createServer(requestHandler);

// listen on the port - 80 // run the server
serve.listen(PORT, (err) => {
    // handle the error on listening
    if(err) errors.handle(500, err.message, res);
    console.log(`Server is running on port ${PORT}`);
});