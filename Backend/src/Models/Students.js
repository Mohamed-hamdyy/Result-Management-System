const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const studentSchema = new Schema({
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

    registeredCourses:[
    {
        code:{type:String },
        name:{type:String },
        hours:{type:String},
        quizesGrades:[ {type:String, default:[] } ],
        quizesTotal:[{type:String ,default:[]  } ],
        examGrade:{type:String, default:"-"},
        examTotal:{type:String,default:"-"},
        examState:{type:String,default:"-"},
        

    }

],
  
})

const Student = mongoose.model('Students', studentSchema);
module.exports = Student;