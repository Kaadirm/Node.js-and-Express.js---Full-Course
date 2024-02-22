// console.log("Express Tutorial");

// const http = require("http");

// const server = http.createServer((req, res) => {
//   // console.log("user hit the server");
//   // res.end(`Hi this is the port 5000`)

//   // console.log(req.method)
//   console.log(req.url)
//   // Checking request url and sending html file
//   if (req.url === "/") {
//     res.writeHead(200, { "Content-Type": "text/html" });
//     res.end(
//       `<html><body style='background-color: gray; text-align: center; display: flex; justify-content: center; align-items: center;'><h1 style='color: blue; font-size: 5rem'>Hi, this is the HOME PAGE!</h1></body></html>`
//     );
//   } else if (req.url === "/about") {
//     res.writeHead(200, { "Content-Type": "text/plain" });
//     res.end("This is the about page.");
//   } else {
//     res.writeHead(404, { "Content-Type": "text/html" });
//     res.write(
//       `<html><body style='background-color: gray; text-align: center; display: flex; justify-content: center; align-items: center;'><h1 style='color: red; font-size: 5rem'>404 Not Found</h1></body></html>`
//     );
//     res.end();
//   }
// });

// const port = 5000;
// server.listen(port, () => {
//   console.log(`server http://localhost:${port} adresinde çalışıyor`);
// });




const http = require("http");
const { readFileSync } = require("fs");

// get all files
const homePage = readFileSync("./navbar-app/index.html");
const homeStyles = readFileSync("./navbar-app/styles.css");
const homeImage = readFileSync("./navbar-app/logo.svg");
const homeLogic = readFileSync("./navbar-app/browser-app.js");

const server = http.createServer((req, res) => {
  // console.log("user hit the server");
  // res.end(`Hi this is the port 5000`)

  // console.log(req.method)
  console.log(req.url);
  // Checking request url and sending html file

    // homePage
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(homePage);
  } 
    // aboutPage
  else if (req.url === "/about") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("This is the about page.");
  } 
    // styles
  else if (req.url === "/styles.css") {
    res.writeHead(200, { "Content-Type": "text/css" });
    res.end(homeStyles);
  } 
    // images
  else if (req.url === "/logo.svg") {
    res.writeHead(200, { "Content-Type": "image/svg+xml" });
    res.write(homeImage);
    res.end();
  } 
    // javascript files
  else if (req.url === "/browser-app.js") {
    res.writeHead(200, { "Content-Type": "text/javascript" });
    res.end(homeLogic);
  } 
    // not found 404
  else {
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
