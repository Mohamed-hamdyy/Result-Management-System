const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const courseSchema = new Schema({
  courseID: {
    type: String,
    required: true,
    unique: true,
  },
  title: {
    type: String,
    required: true,
  },
  totalHours: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  instructorUsername: {
    type: String,
    required: true,
  },
});

const course = mongoose.model("course", courseSchema);
module.exports = course;
