const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const CourseSchema = new Schema({
  courseId: {
        type: Number,
        required: true,
        unique: true,

      },
    code: {
        type: String,
        required: true,
        unique: true,
      },

    name:{
        required: true,
        type:String,
 
    },
    hours:{
        required: true,
        type:String,
    },
    quizNo:{
        required: true,
        type:String,
    },
    quizesWeight:{
        type:String,
    },
    ExamsWeight:{
        type:String,
    },
    AssignWeight:{
        type:String,
    },
  
})

const Course = mongoose.model('Courses', CourseSchema);
module.exports = Course;