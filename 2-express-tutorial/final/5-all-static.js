console.clear();

const express = require("express");
const path = require("path");

const app = express();

const route = 5000;

// setup static and middleware
app.use(express.static("./navbar-app"))


// app.get("/", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "./navbar-app/index.html"))
//   adding to static assets
//   SSR
// });

app.all("*", (req, res) => {
  res.status(404).send(`<h1>NOT FOUND</h1>`);
});

app.listen(route, () => {
  console.log(`listening ${route}`);
});
