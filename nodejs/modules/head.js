function handle(num, type = 'text/html', res) {
  // set the response header
  res.writeHead(num, {
    'Content-Type': type,
    'Cache-Control': 'no-cache',
    'Pragma': 'no-cache',
    'Expires': '0'
  });

}

module.exports = { handle };