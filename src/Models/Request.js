const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  CourseID: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true
  },
  
},) 

const User = mongoose.model('Request', userSchema);
module.exports = User;