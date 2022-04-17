const http = require("http");
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

function callback(request, response) {
  if (request.url === "/") {
    response.writeHead(200, {'Content-Type': 'text/html'});
    let readStream = fs.createReadStream(__dirname + '/public/index.html','utf8');
    readStream.pipe(response);
  } else if (request.url === "/styles.css") {
    response.writeHead(200, {'Content-Type': 'text/css'});
    let readStream = fs.createReadStream(__dirname + '/public/styles.css','utf8');
    readStream.pipe(response);
  } else {
    response.writeHead(404, {'Content-Length':'0'});
    response.end ();
  }
}

const  server = http.createServer(callback);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
