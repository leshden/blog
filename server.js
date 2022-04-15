const http = require("http");
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

function callback(request, response) {
  response.writeHead(200, {'Content-Type': 'text/html'});
  let readStream = fs.createReadStream(__dirname + '/public/index.html','utf8');
  readStream.pipe(response);
}

const  server = http.createServer(callback);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
