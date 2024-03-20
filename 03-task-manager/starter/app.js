const express = require("express");
const app = express();
const PORT = 3000;

// routes
app.get("/hello", (req, res) => {
  res.send("Task Manager App");
});

// app.get("/api/v1/tasks") get all the tasks
// app.post("/api/v1/tasks") create a new task
// app.get("/api/v1/tasks/:id") get a single task
// app.patch("/api/v1/tasks/:id") update a task
// app.delete("/api/v1/tasks/:id") delete a task

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
