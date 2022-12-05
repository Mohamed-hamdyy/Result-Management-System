const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const instructorreviewSchema = new Schema({
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

const reviewSchema1 = mongoose.model("InstructorReview", instructorreviewSchema);
module.exports = reviewSchema1;
