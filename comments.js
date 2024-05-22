// Create web server

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});
});

server.listen(3000, 'Server running at localhost:3000 🚀');