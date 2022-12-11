const { Router } = require("express");
const express = require("express");
const Course = require("../Models/Course");
const Instructor = require("../Models/Instructor");
const CorporateUser = require("../Models/CorporateUser");
const IndividualUser = require("../Models/IndividualUser");
const Admin = require("../Models/Admin");
const individualUser = require("../Models/IndividualUser");
const Review = require("../Models/Review");
const Exam = require("../Models/Exam");
const ExamExercise = require("../Models/ExamExercise");




const creationRouter = express.Router();

creationRouter.use(express.urlencoded({ extended: false }));


//takes instructor as input and view ratings and reviews 
// TODO: make review elements work
creationRouter.get("/viewCourseRatingsReviews",async(req,res)=>{
    const{instructorUsername,courseID}=req.body;
    const course1= await Course.findOne({courseID:courseID});
    var rating = course1.rating
    var reviewARR=course1.review
    var resarr=[]
    reviewARR.forEach(element => {
        reviewelement=Review.findOne({})
        resarr.push(reviewelement)
    });

    console.log(outputarr)
});


creationRouter.get("viewPersonalRatingsReviews",async(req,res)=>{
    const{instructorUsername}=req.body;
    const inst = await Instructor.findOne({instructorUsername:instructorUsername})
    const rating = inst.rating
    const arr= inst.review
    var arroutput=[]
    arr.forEach (async element => {
        const reviewelement= await Review.findOne({reviewID:element})
        arroutput.push(reviewelement)
        console.log(reviewelement)
    });


})




creationRouter.post("/editEmail",async(req,res)=>{
    const {instructorUsername,email}=req.body
    const inst=await Instructor.findOneAndUpdate({instructorUsername:instructorUsername},{email:email})

})


creationRouter.post("/editbio",async(req,res)=>{
    const {instructorUsername,miniBio}=req.body
    const inst=await Instructor.findOneAndUpdate({instructorUsername:instructorUsername},{miniBio:miniBio})
})


creationRouter.post("/editpreview",async(req,res)=>{
    const {courseID,preview}=req.body
    const course=await Course.findOneAndUpdate({courseID:courseID},{preview:preview})

})


creationRouter.post("/editsubtitle",async(req,res)=>{
    const {subtitleID,videoLink,description}=req.body
    const course=await Course.findOneAndUpdate({subtitleID:subtitleID},{videoLink:videoLink,description:description})

})



creationRouter.post("/createexam",async(req,res)=>{
    const {courseID}=req.body
    const exam=(await Exam.find({})).length
    const examID=++exam
    const createExam=await Exam.create({examID:examID})
    const editcourse=await Course.findOne({courseID:courseID})
    const examarr=editcourse.exams
    examarr.push(examID)
    const abc= await Course.updateOne()
})


creationRouter.post("/createexamquestion",async(req,res)=>{
    const {  question, chice1,choice2,choice3,choice4,answer,courseID } = req.body;

  myArray2=++(await ExamExercise.find({})).length
    const exercise = await ExamExercise.create({
      exerciseID: myArray2,
      question: question,
      choice1:choice1,
      choice2:choice2,
      choice3:choice3,
      choice4:choice4,
      answer: answer,
    });
    const course=await Course.findOne({courseID:courseID})
    const newarr=course.examExercises.push(myArray2)
    const course2=await Course.findOneAndUpdate({courseID:courseID},{examExercises:newarr})

  
})


creationRouter.post("/forgetpassword",async(req,res)=>{
    const{email}=req.body
    
  
})

















module.exports = creationRouter;
