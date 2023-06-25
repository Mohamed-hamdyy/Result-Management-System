const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const InstSchema = new Schema({
    userName: {
        type: String,
        required: true,
        unique: true,
      },

    email:{
        type:String,
 
    },
    phoneNumber:{
        type:String,
    },

 
  
})

const Inst = mongoose.model('Instructors', InstSchema);
module.exports = Inst;