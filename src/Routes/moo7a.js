const { Router } = require("express");
const express = require("express");
const Course = require("../Models/Course");
const Instructor = require("../Models/Instructor");
const CorporateUser = require("../Models/CorporateUser");
const IndividualUser = require("../Models/IndividualUser");
const Admin = require("../Models/Admin");
const instructor = require("../Models/Instructor");
const course = require("../Models/Course");

const creationRouter = express.Router();

creationRouter.use(express.urlencoded({ extended: false }));


//Taking Instructor's Name and returning their corresponding courses
creationRouter.get("/instructorCourses", async (req, res) => {
  const { userName} = req.body;
  var myArray = [];
  myArray = await course.find({
    instructorUsername:userName,
  });
  for (i = 0; i < myArray.length; i++)
  console.log(myArray[i]);
});

// view courses by filtering using username, title, price 
creationRouter.get("/filtercourses", async (req, res) => {
  const {userName,price,title} = req.body;
  var myArray = [];
  if (price==null){
    myArray = await course.find({
      instructorUsername:userName,
      title:title
    });
  }
  else if(title==null){
    myArray = await course.find({
      instructorUsername:userName,
      price:price
  
    });

  }
  else{
    myArray = await course.find({
      instructorUsername:userName,
      price:price,
      title:title
  
    });
  }
 
  for (i = 0; i < myArray.length; i++)
  console.log(myArray[i]);
});



module.exports = creationRouter;
