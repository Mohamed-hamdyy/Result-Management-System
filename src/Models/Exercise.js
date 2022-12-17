const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
  exerciseID: {
    type: Number,
    required: true,
    unique: true,
  },
  question: {
    type: [String],

  },
  choices: {
    type: [[String]],

  },
  answer: {
    type: [String],
    
  },
  instructorID: {
    type: Number
  }
});

const admin = mongoose.model("Excercise", exerciseSchema);
module.exports = admin;
