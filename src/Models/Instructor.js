const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const instructorSchema = new Schema({
  firstName: {
    type: String,
  },
  email: {
    type: String,
  },
  lastName: {
    type: String,
  },
  country: {
    type: String,
  },
  miniBio: {
    type: String,
  },
  password: {
    type: String,
    required: true,
  },
  ownedMoney: {
    type: Number,
  },
  userName: {
    type: String,
    required: true,
    unique: true,
  },
  rating: {
    type: Number,
  },
  numOfRatings: {
    type: Number,
  },
  
  review: [
    {
      type: String,
    },
  ],
});

const instructor = mongoose.model("instructor", instructorSchema);
module.exports = instructor;
