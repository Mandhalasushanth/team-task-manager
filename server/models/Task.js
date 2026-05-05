const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema(
  {
    title: String,
    priority: String,
    status: String,
    dueDate: String,
    assignedTo: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model('Task', taskSchema);