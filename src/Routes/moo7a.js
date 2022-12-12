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
creationRouter.post("/instructorCourses", async (req, res) => {
  const { userName } = req.body;
  var myArray = [];
  var outputarr = [];
  myArray = await course.find({
    instructorUsername: userName,
  });
  for (i = 0; i < myArray.length; i++)
    outputarr.push("Course Name:" + myArray[i].title);
  res.json(outputarr);
});

// view courses by filtering using username, title, price
creationRouter.post("/filtercourses", async (req, res) => {
  const { userName, pricefrom, subject ,priceto} = req.body;
  var myArray = [];
  var outputarr = [];
  var from = pricefrom
  var to = priceto

  console.log("x");

  if (pricefrom == null){
    from=0
  }
  if (priceto == null){
    to=999999999999
  }

  if (subject == null) {
      myArray = await course.find({
        instructorUsername: userName,
  });
    } 
  else {
      myArray = await course.find({
        instructorUsername: userName,
        subject: subject,
      });
    }
      myArray.forEach(element => 
        {

        if(element.price>=from&&element.price<=to ){
          outputarr.push(element.title)
        }
      });
  res.json(outputarr)
});

module.exports = creationRouter;
