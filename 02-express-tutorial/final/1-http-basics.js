console.log("Express Tutorial");

const http = require("http");

const server = http.createServer((req, res) => {
  // console.log("user hit the server");
  // res.end(`Hi this is the port 5000`)

 
});

const port = 5000;
server.listen(port, () => {
  console.log(`server http://localhost:${port} adresinde çalışıyor`);
});
