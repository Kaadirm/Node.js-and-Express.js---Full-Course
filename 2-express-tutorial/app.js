console.clear();

const express = require("express");
const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.json([{name: "Kadir"}, {name: "Berk" }])
})

app.listen(port, () => {
  console.log(`listening on port ${port}`);
})