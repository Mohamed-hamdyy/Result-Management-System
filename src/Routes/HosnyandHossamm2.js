const { Router } = require("express");
const express = require("express");
const Course = require("../Models/Course");
const Instructor = require("../Models/Instructor");
const CorporateUser = require("../Models/CorporateUser");
const IndividualUser = require("../Models/IndividualUser");
const Admin = require("../Models/Admin");
const individualUser = require("../Models/IndividualUser");
const Review = require("../Models/Review");
const InstructorReview = require("../Models/InstructorReview");

const Exam = require("../Models/Exam");
const ExamExercise = require("../Models/ExamExercise");
var nodemailer = require('nodemailer');



const creationRouter = express.Router();

creationRouter.use(express.urlencoded({ extended: false }));


//takes instructor as input and view ratings and reviews 
// TODO: make review elements work
creationRouter.post("/viewCourseRatingsReviews",async(req,res)=>{
    const{instructorUsername,courseID}=req.body;
    const course1= await Course.findOne({courseID:courseID});
    var rating = course1.rating
    var reviewARR=course1.review
    var resarr=[]
    for (let index = 0; index < reviewARR.length; index++) {
        reviewelement=await Review.findOne({reviewID:reviewARR[index]})
        resarr.push(reviewelement)
        
    }
    res.json({
        rating:rating,
        reviews:resarr
    })
});


creationRouter.post("/viewPersonalRatingsReviews",async(req,res)=>{
    const{instructorUsername}=req.body
    const inst = await Instructor.findOne({userName:instructorUsername})
    const rating = inst.rating
    const arr= inst.review
    var arroutput=[]
    for (var i = 0; i < arr.length ;i++) {
        const review = await InstructorReview.findOne({reviewID:arr[i]})

        arroutput.push(review)
    }
    console.log(arroutput)

    res.json({
        rating:rating,
        reviewarr:arroutput
    })


})






creationRouter.post("/editemailbio",async(req,res)=>{
    const {instructorUsername,miniBio,email}=req.body
    if (email==""){
        const inst=await Instructor.findOneAndUpdate({instructorUsername:instructorUsername},{miniBio:miniBio})
    }
    else if(miniBio==""){
        const inst=await Instructor.findOneAndUpdate({instructorUsername:instructorUsername},{email:email})
    }
    else{
        const inst=await Instructor.findOneAndUpdate({instructorUsername:instructorUsername},{email:email,miniBio:miniBio})

    }
})


creationRouter.post("/editpreview",async(req,res)=>{
    const {courseID,preview}=req.body
    var course=await Course.findOneAndUpdate({courseID:courseID},{preview:preview})
    course={...course,ahmed:"abcde"}
    console.log(course)

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


creationRouter.post("/userforgetpassword",async(req,res)=>{
    const{email}=req.body
    var result=""
    var user=await IndividualUser.findOne({email:email})
    if(user==null){
        user=await CorporateUser.findOne({email:email})
        if(user!=null){
            result="C"
        }
    }
    else{
        result="I"
    }
    if(result=="I"|| result=="C"){
        const link = `http://localhost:3000/changepass/${result}/${user.userName}`
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'ahmedyo2001@gmail.com',
              pass: 'dbpgtwmfixruexif'
            }
          });
          
          var mailOptions = {
            from: 'ahmedyo2001@gmail.com',
            to: email,
            subject: "reset link",
            text: link
          };
          
          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' );
            }
          });
    }
    else{
        res.send("not found")
    }
})

creationRouter.post("/userresetpass",async(req,res)=>{
    const{type,userName,password}=req.body
    if(type=="I"){
        var user=await IndividualUser.findOneAndUpdate({userName:userName},{password:password})
    }
    else {
        var user=await CorporateUser.findOneAndUpdate({userName:userName},{password:password})

    }
})



creationRouter.post("/instructorforgetpassword",async(req,res)=>{
    const{email}=req.body
    var user=await Instructor.findOne({email:email})
    
    if(user!=null){
        const link = `http://localhost:7000/changepass/${result}/${user.userName}`
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'ahmedyo2001@gmail.com',
              pass: 'dbpgtwmfixruexif'
            }
          });
          
          var mailOptions = {
            from: 'ahmedyo2001@gmail.com',
            to: email,
            subject: "reset link",
            text: link
          };
          
          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' );
            }
          });
    }
    else{
        res.send("not found")
    }
})

creationRouter.post("/instructorresetpass",async(req,res)=>{
    const{type,userName,password}=req.body
        var user=await Instructor.findOneAndUpdate({userName:userName},{password:password})
    

})






creationRouter.post("/userchangepass",async(req,res)=>{
    const{type,userName,password}=req.body
    if(type=="I"){
        var user=await IndividualUser.findOneAndUpdate({userName:userName},{password:password})
    }
    else {
        var user=await CorporateUser.findOneAndUpdate({userName:userName},{password:password})

    }
})




creationRouter.post("/instructorchangepass",async(req,res)=>{
    const{userName,password}=req.body

    var user=await Instructor.findOneAndUpdate({userName:userName},{password:password})

})

















module.exports = creationRouter;
