var http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

var server = http.createServer(function(req,res) {
  res.statusCode = 200;
  res.setHeader('Content-Type','text/plian');
  res.end('Hello Word!');
});
server.listen(port);