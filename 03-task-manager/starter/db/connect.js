const mongoose = require("mongoose");

const connectionString =
  "mongodb+srv://kaadirrm:8a09xMbwKo6uuDGd@nodeexpressprojects.8slvgqg.mongodb.net/03-TASK-MANAGER?retryWrites=true&w=majority&appName=NodeExpressProjects";

const connectDB = (url) => {
  return mongoose.connect(connectionString);
};

module.exports = connectDB;
