const mongoose = require("mongoose");

const connectionString =
  "mongodb+srv://kaadirrm:8a09xMbwKo6uuDGd@nodeexpressprojects.8slvgqg.mongodb.net/03-TASK-MANAGER?retryWrites=true&w=majority&appName=NodeExpressProjects";

mongoose
  .connect(connectionString)
  .then(() => {
    console.log("CONNECTED TO THE DATABASE");
  })
  .catch((error) => {
    console.error("Error connecting to the database:", error);
  });
