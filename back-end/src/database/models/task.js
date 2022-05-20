const moongose = require('mongoose');
const Schema = moongose.Schema;

const taskSchema = new Schema({
  task: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  }
})

module.exports = moongose.model("task", taskSchema);