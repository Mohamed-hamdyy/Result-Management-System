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
  },
  lastName: {
    type: String,
  },
  gender: {
    type: String,
  },
  card: {
    type: String,
  },
  wallet: {
    type: String,
  },
  password: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: false,
  },
  registeredCourses: [
    {
      type: String,
    },
  ],
});

const individualUser = mongoose.model("individualUser", individualUserSchema);
module.exports = individualUser;
