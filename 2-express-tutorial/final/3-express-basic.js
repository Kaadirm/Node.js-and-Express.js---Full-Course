console.clear()

const express = require("express");
const app = express();
const route = 5000;

// const homePage = app.use()

app.get("/", (req, res) => {
  console.log("user in the homePage");
  res.status(200).send("Home Page")
});

app.get("/about", (req, res) => {
  console.log("user in the about page");
  res.send("About Page");
})

app.all("*", (req, res) => {
  res.status(404).send(`<h1>Resource Not Found</h1>`)
})

app.listen(route, () =>{
  console.log("server is listening on port 5000")
})

// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use
// app.listen