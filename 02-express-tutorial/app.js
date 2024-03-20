console.clear();
const express = require("express");
const app = express();
const port = 5000;

// routes import
const peopleRouter = require("./routes/people");
const authRouter = require("./routes/auth");
// static assets
app.use("/", express.static("./methods-public"));
// parse form data
app.use(express.urlencoded({ extended: false }));
// parse json
app.use(express.json());

// ROUTES
app.use("/api/people", peopleRouter);
app.use("/login", authRouter);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});