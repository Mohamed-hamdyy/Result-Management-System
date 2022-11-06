const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const courseSchema = new Schema({
  courseID: {
    type: String,
    required: true,
    unique: true,
  },
  rating: {
    type: Number,
    required: false,
    unique: false,
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
  discounts: [
    {
      type: Number,
    },
  ],
  summary: {
    type: String,
  },

  subtitles: [
    {
      type: Number,
    },
  ],
  exercises: [
    {
      type: Number,
    },
  ],
});

const course = mongoose.model("course", courseSchema);
module.exports = course;
