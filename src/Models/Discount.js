const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const discountSchema = new Schema({
  discountID: {
    type: Number,
    required: true,
    unique: true,
  },
  percentage: {
    type: Number,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
});

const admin = mongoose.model("discount", discountSchema);
module.exports = admin;
