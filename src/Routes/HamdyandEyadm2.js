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
const Discount = require("../Models/Discount");
const Subtitle = require("../Models/Subtitle");




const creationRouter = express.Router();

creationRouter.use(express.urlencoded({ extended: false }));


//takes instructor as input and view ratings and reviews 
// TODO: make rating work
creationRouter.post("/addcourserating",async(req,res)=>{
    reviewID = (await Review.find({})).length++;
    const{courseID,rating,review}=req.body;
    obj = await Review.create({reviewID:reviewID,text:review,rating:rating})
    abc= await Course.findOne({courseID:courseID})
    oldrating=abc.rating;
    num=abc.numOfRatings;
    nrating=(oldrating*num+rating)/(num+1)
    console.log(nrating)
    console.log(abc.review)
    abc.review.push(reviewID)
    console.log(abc.review)
    abc2=await Course.updateOne({courseID:courseID},{review:abc.review,numOfRatings:num+1,rating:nrating})
    res.json({data:"rated"});
});


creationRouter.get("/addinstructorrating",async(req,res)=>{
    reviewID = (await InstructorReview.find({})).length++;
    const{instructorID,rating,review}=req.body;
    obj = await InstructorReview.create({reviewID:reviewID,text:review,rating:rating})
    abc= await Instructor.findOne({userName:instructorID})
    rating2=rating
    console.log(abc)
    oldrating=abc.rating;
    num=abc.numOfRatings;
    nrating=(oldrating*num+Number(rating))/(num+1)
    console.log(nrating)

    abc.review.push(reviewID)
    abc2=await Instructor.updateOne({userName:instructorID},{review:abc.review,numOfRatings:num+1,rating:nrating})
});


creationRouter.post("/getcoursesembedded",async(req,res)=>{
    const{courseID}=req.body;
    var course= await Course.findOne({courseID:courseID})
    var discountsarr=[]
    var subtitlesarr=[]
    for (let index = 0; index < course.discounts.length; index++) {
        discountsarr.push( await Discount.findOne({discountID:course.discounts[index]}))
        
    }
    for (let index = 0; index < course.subtitles.length; index++) {
        subtitlesarr.push( await Subtitle.findOne({subtitleID:course.subtitles[index]}))
        
    }
    course={
        ...course._doc,
        subtitlesarr:subtitlesarr,
        discountsarr:discountsarr,

    }
    console.log(course)

    res.json(course)

});



module.exports = creationRouter;
