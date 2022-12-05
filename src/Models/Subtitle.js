const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const subtitleSchema = new Schema({
  subtitleID: {
    type: Number,
    required: true,
    unique: true,
  },
  title: {
    type: String,
    required: true,
  },
  hours: {
    type: Number,
    required: true,
  },
  videoLink: {
    type: String,
  },
  description: {
    type: String,
  },
});

const admin = mongoose.model("Subtitle", subtitleSchema);
module.exports = admin;
