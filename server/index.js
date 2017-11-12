// const http = require('http');
//
// const PORT = 8080;
//
// http.createServer((req, res) => {
//     console.log(`Received request for ${req.url}`);
//     res.writeHead(200, { 'Content-Type': 'text/plain' });
//     res.write('Hello World!\n');
//     res.end(`Received request for ${req.url}`);
//   })
//   .listen(PORT, () => {
//     console.log(`Server running at http://localhost:${PORT}/`);
//   });
var express = require('express');
var app = express();
var http = require('http');
var server = http.createServer(app);

app.use(express.bodyParser());
app.post('/', function(req, res) {
  console.log(req.body);
  res.send(200);
});

server.listen(process.env.PORT, process.env.IP);
