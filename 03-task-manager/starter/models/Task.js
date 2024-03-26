const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  name: String,
  completed: Boolean,
});

module.exports = mongoose.model("Task", TaskSchema);

// const taskSchema = new mongoose.Schema({
//     title: {
//         type: String,
//         required: true
//     },
//     description: {
//         type: String,
//         required: true
//     },
//     completed: {
//         type: Boolean,
//         default: false
//     },
//     createdAt: {
//         type: Date,
//         default: Date.now
//     }
// });