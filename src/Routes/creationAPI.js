const { Router } = require("express");
const express = require("express");
const Course = require("../Models/Course");
const Instructor = require("../Models/Instructor");
const CorporateUser = require("../Models/CorporateUser");
const IndividualUser = require("../Models/IndividualUser");
const Admin = require("../Models/Admin");
const corporateUser = require("../Models/CorporateUser");
const individualUser = require("../Models/IndividualUser");
const Subtitle = require("../Models/Subtitle");
const Exercise = require("../Models/Exercise");
const Discount = require("../Models/Discount");

const creationRouter = express.Router();

creationRouter.use(express.urlencoded({ extended: false }));

// Creating Course and checking that id is unique
creationRouter.post("/createCourse", async (req, res) => {
  const { courseID, title, totalHours, price, subject, instructorUsername } =
    req.body;
  myArray = await Course.find({
    courseID: courseID,
  });
  if (myArray.length == 0) {
    const course = await Course.create({
      courseID: courseID,
      title: title,
      totalHours: totalHours,
      price: price,
      subject: subject,
      instructorUsername: instructorUsername,
    });
    console.log("course created successfully");
  } else {
    console.log("course already taken");
  }
  res.status(200);
});

// Creating an istructor and checking username is unique
creationRouter.post("/createInstructor", async (req, res) => {
  const {
    password,
    userName,
  } = req.body;
  myArray = await Instructor.find({
    userName: userName,
  });

  if (myArray.length == 0) {
    const instructor = await Instructor.create({
      firstName: "",
      email: "",
      lastName: "",
      country: "Morocco",
      miniBio: "",
      password: password,
      ownedMoney: 0,
      userName: userName,
      rating: 1,
      numOfRatings: 0,
    });
    res.status(200).send("creating instructor");
    console.log("instructor created successfully");
  } else {
    console.log("Username already taken!");
  }
});

// creating CorporateUser and checking that username is not in individuals or corporate users
creationRouter.post("/createCorporateUser", async (req, res) => {
  const { userName, password } = req.body;
  myArray = await corporateUser.find({
    userName: userName,
  });
  myArray2 = await individualUser.find({
    userName: userName,
  });
  if (myArray.length == 0 && myArray2.length == 0) {
    const user = await CorporateUser.create({
      userName: userName,
      password: password,
      country:"Morocco",
    });
    console.log("User Created Successfully");
  } else {
    console.log("Username already taken!");
  }
});

// creating IndividualUser and checking that username is not in individuals or corporate users
creationRouter.post("/createIndividualUser", async (req, res) => {
  const {
    userName,
    firstName,
    lastName,
    gender,
    card,
    wallet,
    password,
    country,
  } = req.body;
  myArray = await corporateUser.find({
    userName: userName,
  });
  myArray2 = await individualUser.find({
    userName: userName,
  });
  if (myArray.length == 0 && myArray2.length == 0) {
    const user = await IndividualUser.create({
      userName: userName,
      firstName: firstName,
      lastName: lastName,
      gender: gender,
      card: card,
      wallet: wallet,
      password: password,
      country: country,
    });
    console.log("User Created Successfully");
  } else {
    console.log("Username already taken!");
  }
  //await user.save();
});

// Creating Admin and checking username isnt available already
creationRouter.post("/createAdmin", async (req, res) => {
  console.log(req.body)
  const { userName, password } = req.body;

  myArray = await Admin.find({
    userName: userName,
  });
  if (myArray.length == 0) {
    const admin = await Admin.create({
      userName: userName,
      password: password,
    });
    console.log("User craeted successfully");
  } else {
    console.log("Username already taken!");
  }
});

creationRouter.post("/createSubtitle", async (req, res) => {
  const { subtitleID, title, hours } = req.body;

  myArray = await Subtitle.find({
    subtitleID: subtitleID,
  });
  if (myArray.length == 0) {
    const subtitle = await Subtitle.create({
      subtitleID: subtitleID,
      title: title,
      hours: hours,
    });
    console.log("subtitle craeted successfully");
  } else {
    console.log("subtitle id already used");
  }
});

creationRouter.post("/createExercise", async (req, res) => {
  const {  question, chice1,choice2,choice3,choice4,answer } = req.body;

  myArray = await Exercise.find({
    exerciseID: exerciseID,
  });

  myArray2=(await Exercise.find({})).length
  if (myArray.length == 0) {
    const exercise = await Exercise.create({
      exerciseID: ++myArray2,
      question: question,
      choice1:choice1,
      choice2:choice2,
      choice3:choice3,
      choice4:choice4,
      answer: answer,
    });
    console.log("Exercise craeted successfully");
  } else {
    console.log("Exercise id already used");
  }
});

creationRouter.post("/createDiscount", async (req, res) => {
  const { discountID, country, percentage ,date} = req.body;

  myArray = await Discount.find({
    discountID: discountID,
  });
  if (myArray.length == 0) {
    const exercise = await Discount.create({
      discountID: discountID,
      country: country,
      percentage: percentage,
      date:date
    });
    console.log("discount craeted successfully");
  } else {
    console.log("discount id already used");
  }
});

module.exports = creationRouter;
