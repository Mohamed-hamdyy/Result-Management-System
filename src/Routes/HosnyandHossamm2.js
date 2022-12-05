const { Router } = require("express");
const express = require("express");
const Course = require("../Models/Course");
const Instructor = require("../Models/Instructor");
const CorporateUser = require("../Models/CorporateUser");
const IndividualUser = require("../Models/IndividualUser");
const Admin = require("../Models/Admin");
const individualUser = require("../Models/IndividualUser");
const Review = require("../Models/Review");


const creationRouter = express.Router();

creationRouter.use(express.urlencoded({ extended: false }));


//takes instructor as input and view ratings and reviews 
// TODO: make review elements work
creationRouter.get("/viewCourseRatingsReviews",async(req,res)=>{
    const{instructorUsername}=req.body;
    const courseArr= await Course.find({instructorUsername:instructorUsername});
    outputarr=[]
    ratingsarr=[]
    courseArr.forEach(element => {


    var arrelement=
    {
        courseTitle:element.title,
        rating:element.rating,
        numOfRatings:element.numOfRatings,
        review:element.review,
    }
    outputarr.push(arrelement)

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










module.exports = creationRouter;
