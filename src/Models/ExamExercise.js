const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const examExerciseSchema = new Schema({
  exerciseID: {
    type: Number,
    required: true,
    unique: true,
  },
  question: {
    type: String,
    required: true,
  },
  choice1: {
    type: String,
    required: true,
  },
  choice2: {
    type: String,
    required: true,
  },
  choice3: {
    type: String,
    required: true,
  },
  choice4: {
    type: String,
    required: true,
  },
  answer: {
    type: String,
    required: true,
  },
});

const admin = mongoose.model("ExamExcercise", examExerciseSchema);
module.exports = admin;
