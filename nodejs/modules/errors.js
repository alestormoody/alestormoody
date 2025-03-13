function handle(err, message, res) {

    // require the  modules
    const fs = require('fs');
    const path = require('path');
    const head = require('./head');

    // define the logs file name and folder name
    const logs = 'error.log';
    const folder = 'storage/logs/';
    const logFile = path.join(__dirname, folder, logs);

    // set the response header
    head.handle(err, 'application/json', res);

    // check if the file exists
    if (!fs.existsSync(logFile)) fs.writeFileSync(logFile, '');

    // append the error to the file
    fs.appendFileSync(logFile, `${new Date()} - ${message}\n`);

    // return error message
    res.write(message);
    console.log(message);

}

module.exports = { handle };