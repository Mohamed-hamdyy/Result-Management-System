const { Router } = require("express");
const express = require("express");
const Course = require("../Models/Course");
const Instructor = require("../Models/Instructor");
const CorporateUser = require("../Models/CorporateUser");
const IndividualUser = require("../Models/IndividualUser");
const Admin = require("../Models/Admin");
const individualUser = require("../Models/IndividualUser");
const course = require("../Models/Course");
const Subtitle = require("../Models/Subtitle");
const Exercise = require("../Models/Exercise");
const Discount = require("../Models/Discount");

const creationRouter = express.Router();

creationRouter.use(express.urlencoded({ extended: false }));

// takes as an input subject or rating or both and returns courses
creationRouter.post("/filtersubjectrating", async (req, res) => {
  const { subject, rating } = req.body;
  var course;
  if (subject == "") {
    course = await Course.find({});
    var arr= []
    for (let index = 0; index < course.length; index++) {
      if(course[index].rating>=rating){
        arr.push(course[index])
      }      
    }
    res.json(arr)
  } else if (rating == "") {
    course = await Course.find({ subject: subject });
    res.json(course);

  } else {
    course = await Course.find({ subject: subject});
    for (let index = 0; index >= course.length; index++) {
      if(course[index].rating<rating){
        arr.push(course[index])
      }      
    }
    res.json(arr)
  }
  

});

// takes s input price and returns the courses with this price
creationRouter.post("/filterprice", async (req, res) => {
  const { min,max } = req.body;
  var course=[];
  var output=[];

  course = await Course.find({});

  for (i = 0; i < course.length; i++){
        if(course[i].price>=min && course[i].price<=max )
            output.push(course[i]);
  }
   res.json(output);

});

// search for courses using one of the following (subject or title or intructorUsername) not all
creationRouter.post("/filtercoursesubjectinstructor", async (req, res) => {
  const { title, subject, instructorUsername } = req.body;
  var course = [];
  var outputarr=[]
  if (subject == "") {
    course = await Course.find({ title: title , instructorUsername:instructorUsername});
  }
  else if (title == "") {
    course = await Course.find({ subject: subject , instructorUsername:instructorUsername});
  }
  else {
    course = await Course.find({ instructorUsername: instructorUsername,title: title, subject: subject });
  }
  for (i = 0; i < course.length; i++){
    outputarr.push(course[i]);
  } 
  res.json(outputarr)

});

creationRouter.post("/filtercoursebyid", async (req, res) => {
  var { courseID } = req.body;
  var course = await Course.findOne({ courseID: courseID });
  res.json(course);
});

creationRouter.post("/choosecourse", async (req, res) => {
  console.log ("entered");

  var { courseID, country } = req.body;
  var course = await Course.findOne({ courseID: courseID });
  var discountval = 0;
  var subtitlesarr = [];
  var exercisesarr = [];
  var totalhrs = 0;

  for (i = 0; i < course.discounts.length; i++) {
    var discount = await Discount.findOne({ discountID: course.discounts[i] });
    if (discount.country == country) {
      discountval = discount.percentage;
    }
  }
  for (i = 0; i < course.exercises.length; i++) {
    exercisesarr.push(
      await Exercise.findOne({ exerciseID: course.exercises[i] })
    );
  }

  for (i = 0; i < course.subtitles.length; i++) {
    var sub = await Subtitle.findOne({ subtitleID: course.subtitles[i] });
    totalhrs += sub.hours;
    subtitlesarr.push(sub);
  }
  res.json({
    exercisesarr:exercisesarr,
    subtitlesarr:subtitlesarr,
    discount:discountval,
  })
});

module.exports = creationRouter;
