const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  reviewID: {
    type: Number,
    unique: true,
  },
  text : {
    type: String,
    default:"no review ",
    
  },
  rating:{
    type:Number,
    default:1
  },
});

const reviewSchema1 = mongoose.model("Review", reviewSchema);
module.exports = reviewSchema1;
