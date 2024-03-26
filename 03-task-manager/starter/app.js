const express = require("express");
const app = express();
const tasks = require("./routes/task");
const connectDB = require("./db/connect");
require("dotenv").config();
// middleware
app.use(express.json());

// routes
// app.get("/hello", (req, res) => {
//   res.send("Task Manager App");
// });

app.use("/api/v1/tasks", tasks);

// app.get("/api/v1/tasks") get all the tasks
// app.post("/api/v1/tasks") create a new task
// app.get("/api/v1/tasks/:id") get a single task
// app.patch("/api/v1/tasks/:id") update a task
// app.delete("/api/v1/tasks/:id") delete a task

const PORT = 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error(error);
  }
};

start();
