console.clear();

const express = require("express");
const app = express();
const port = 5000;
let { people } = require("./data");

// static assets
app.use("/", express.static("./methods-public"));
// parse form data
app.use(express.urlencoded({ extended: false }));

app.get("/api/people", (req, res) => {
  res.status(200).json({ success: true, data: people });
});

app.post("/login", (req, res) => {
  // console.log(req.body);
  const {name} = req.body;
  if(name){
    return res.status(200).send(`Welcome ${name}`);
  }
  res.status(401).send("Please Provide Credentials");
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
