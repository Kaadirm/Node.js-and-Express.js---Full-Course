console.clear();

require("dotenv").config();
// async errors

const express = require("express");
const app = express();

const notFoundMiddleware = require("./middleware/not-found");
const errorMiddleware = require("./middleware/error-handler");

// middleware
app.use(express.json());

// routes
app.get("/", (req, res) => {
  res.send("<h1>Store API</h1><a href='/api/v1/products'>products route</a>");
});

// products route
app.get("/api/v1/products", (req, res) => {
  res.json({ message: "products" });
});

app.use(notFoundMiddleware);
app.use(errorMiddleware);

const PORT = process.env.PORT || 3000;

const start = async () => {
  try {
    // connect to DB
    app.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
