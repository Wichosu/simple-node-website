const http = require('http');
const { url } = require('inspector');
const fs = require('fs');

const port = process.env.PORT || 8080;

fs.readFile('./index.html', (err, html) => {
  if (err) {
    throw err;
  }
  fs.readFile('./style.css', (err, css) => {
    if (err) {
      throw err;
    }
    const server = http.createServer((req, res) => {
      res.writeHead(200);
      res.write(html);
      res.write(css);
      res.end();
    }).listen(port);
  });
});

/*const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.write(index);
  res.end();
});*/



/*server.listen(port, () => {
    console.log('server running');
});*/