const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const corporateUserSchema = new Schema({
  userName: {
    type: String,
    required: true,
    unique: true,
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

const corporateUser = mongoose.model("corporateUser", corporateUserSchema);
module.exports = corporateUser;
