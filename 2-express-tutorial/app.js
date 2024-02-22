const http = require("http");
const {readFileSync} = require("fs");

// get all files
const homePage = readFileSync("./index.html");

const server = http.createServer((req, res) => {
  // console.log("user hit the server");
  // res.end(`Hi this is the port 5000`)

  // console.log(req.method)
  console.log(req.url)
  // Checking request url and sending html file
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(
      homePage
    );
  } else if (req.url === "/about") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("This is the about page.");
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.write(
      `<html><body style='background-color: gray; text-align: center; display: flex; justify-content: center; align-items: center;'><h1 style='color: red; font-size: 5rem'>404 Not Found</h1></body></html>`
    );
    res.end();
  }
});

const port = 5000;
server.listen(port, () => {
  console.log(`server http://localhost:${port} adresinde çalışıyor`);
});
