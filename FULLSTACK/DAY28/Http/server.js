const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  let page = req.url === '/' ? '/index' : req.url;
  let filePath = path.join(__dirname, 'pages', `${page}.html`);

  fs.readFile(filePath, (err, data) => {
    if (err) {
      fs.readFile(path.join(__dirname, 'pages', '404.html'), (e, notFound) => {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end(notFound);
      });
    } else {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data);
    }
  });
});

server.listen(3002, () => {
  console.log(' Maha HTTP server is running at http://localhost:3002');
});
