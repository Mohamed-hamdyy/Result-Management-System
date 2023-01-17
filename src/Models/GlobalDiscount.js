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
});

const admin = mongoose.model("globalDiscount", discountSchema);
module.exports = admin;