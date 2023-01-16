const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const progressSchema = new Schema({
    userName:{
    type:String,
    required:true


    },
    courseId:{
    type:String,
    required:true

    },
    Done:[
    {
        type:Number
    }

    ]
});


const Progress = mongoose.model("progress", progressSchema);
module.exports = Progress;