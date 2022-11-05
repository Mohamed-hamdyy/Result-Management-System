const { Router } = require("express");
const express = require("express");
const Course = require("../Models/Course");
const Instructor = require("../Models/Instructor");
const CorporateUser = require("../Models/CorporateUser");
const IndividualUser = require("../Models/IndividualUser");
const Admin = require("../Models/Admin");
const individualUser = require("../Models/IndividualUser");

const creationRouter = express.Router();

creationRouter.use(express.urlencoded({ extended: false }));





// takes as an input type and userName to select/change country
creationRouter.put("/selectCountry",async(req,res)=>{
  const{userName,type,country}=req.body;
  if(type=='Instructor'){
  const instructor= await Instructor.findOneAndUpdate({userName:userName},{country:country})
}
 if(type=='IndividualUser'){
  const individualUser= await IndividualUser.findOneAndUpdate({userName:userName},{country:country})
 }
 if(type=='CorporateUser'){
  const corporateUser= await CorporateUser.findOneAndUpdate({userName:userName},{country:country})
 }

 console.log('Country Selected')
})

//takes instructorUsername as input and view courses available
creationRouter.get("/viewCourses",async(req,res)=>{
  const{title,totalHours,rating}=req.body;
  
  const filter={}
  const courseArr= await Course.find(filter)

  for(i=0;i<courseArr.length;i++){
  console.log('Course Title:'+courseArr[i].title+'  Course Total Hours:'+courseArr[i].totalHours+'  Course Ratings:'+courseArr[i].rating);
}})


//takes type as input and view courses prices
creationRouter.get("/viewCoursesPrices",async(req,res)=>{
  const{price,title}=req.body;
  
  const filter={}
  const courseArr= await Course.find(filter)

  for(i=0;i<courseArr.length;i++){
  console.log('Course Title:'+courseArr[i].title+ '  Course Price:'+ courseArr[i].price);
}})






module.exports = creationRouter;



