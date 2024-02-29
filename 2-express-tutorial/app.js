console.clear();

const express = require("express");
const app = express();
const port = 5000;
let { people } = require("./data");

// static assets
app.use("/", express.static("./methods-public"));
// parse form data
app.use(express.urlencoded({ extended: false }));
// parse json
app.use(express.json());
app.get("/api/people", (req, res) => {
  res.status(200).json({ success: true, data: people });
});

app.post("/api/people", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: "please provide name value" });
  }
  console.log(name);
  res.status(201).json({ success: true, person: name });
});

//Postman setup
app.post("/api/postman/people", (req, res) => {
  const { name } = req.body;
  console.log(name);
  if (!name) {
    console.log("There is no information");
    return res
      .status(400)
      .json({ success: false, msg: "please provide name value" });
  }
  res
    .status(201)
    .json({
      success: true,
      data: [...people, { id: people.length + 1, name: name }],
    });
});

app.post("/login", (req, res) => {
  // console.log(req.body);
  const { name } = req.body;
  if (name) {
    return res.status(200).send(`Welcome ${name}`);
  }
  res.status(401).send("Please Provide Credentials");
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
