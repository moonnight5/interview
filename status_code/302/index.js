var http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

var server = http.createServer(function(req,res) {
  res.writeHead (302,{'Location':'http://itbilu.com/'});
  console.log(res._header);
  res.end();
});
server.listen(port);