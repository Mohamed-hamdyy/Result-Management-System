const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const individualUserSchema = new Schema({
  userName: {
    type: String,
    required: true,
    unique: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  card: {
    type: String,
    required: true,
  },
  wallet: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
    unique: true,
  },
  registeredCourses: [
    {
      type: String,
    },
  ],
});

const individualUser = mongoose.model("individualUser", individualUserSchema);
module.exports = individualUser;
