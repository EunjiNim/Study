const http = require('http');
var fs = require('fs');
http.createServer((request, response) => {
    var url = request.url;
    if (request.url == '/') {
      url = '/main.html';
    }
    if (request.url == '/favicon.ico') {
      return response.writeHead(404);
    }
    response.writeHead(200);
    response.end(fs.readFileSync(__dirname + url));
  }).listen(3000);

console.log('Server running at http://127.0.0.1:3000/');