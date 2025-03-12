function handle(err, message, res, logFile) {
    const fs = require('fs');

    res.writeHead(err, {
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
    fs.appendFileSync(logFile, `${new Date()} - ${message}\n`);

    // return error message
    res.write(message);
    console.log(message);
}

module.exports = { handle };