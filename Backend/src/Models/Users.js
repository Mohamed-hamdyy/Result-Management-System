const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UsersSchema = new Schema({

  userName: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  email:{
    type:String,

  },
  role: {
    type: String,
  },
  
});

const userSchema = mongoose.model("Users", UsersSchema);
module.exports = userSchema;
