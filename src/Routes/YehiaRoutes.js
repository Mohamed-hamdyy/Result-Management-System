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
creationRouter.get("/filtersubjectrating", async (req, res) => {
  const { subject, rating } = req.body;
  var course;
  if (subject == undefined) {
    course = await Course.find({ rating: rating });
  } else if (rating == undefined) {
    course = await Course.find({ subject: subject });
  } else {
    course = await Course.find({ subject: subject, rating: rating });
  }
  for (i = 0; i < course.length; i++)
    console.log("Course name :" + course[i].title);
});

// takes s input price and returns the courses with this price
creationRouter.get("/filterprice", async (req, res) => {
  const { price } = req.body;
  var course;

  course = await Course.find({ price: price });

  for (i = 0; i < course.length; i++)
    console.log("Course name :" + course[i].title);
});

// search for courses using one of the following (subject or title or intructorUsername) not all
creationRouter.get("/filtercoursesubjectinstructor", async (req, res) => {
  const { title, subject, instructorUsername } = req.body;
  var course = [];
  if (subject == undefined && instructorUsername == undefined) {
    course = await Course.find({ title: title });
  }
  if (title == undefined && instructorUsername == undefined) {
    course = await Course.find({ subject: subject });
  }
  if (subject == undefined && title == undefined) {
    course = await Course.find({ instructorUsername: instructorUsername });
  }
  for (i = 0; i < course.length; i++) console.log(course[i]);
});

creationRouter.get("/filtercoursebyid", async (req, res) => {
  var { courseID } = req.body;
  var course = await Course.findOne({ courseID: courseID });
  console.log(course.title);
});

creationRouter.get("/choosecourse", async (req, res) => {
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
  console.log(course.title);
  console.log(subtitlesarr);
  console.log(exercisesarr);
  console.log(totalhrs);
  console.log(course.price);
  console.log("price: " + (course.price - course.price * (discountval / 100)));
});

module.exports = creationRouter;
