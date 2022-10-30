const { Router } = require("express");
const express = require("express");
const Course = require("../Models/Course");
const Instructor = require("../Models/Instructor");
const CorporateUser = require("../Models/CorporateUser");
const IndividualUser = require("../Models/IndividualUser");
const Admin = require("../Models/Admin");

const creationRouter = express.Router();

creationRouter.use(express.urlencoded({ extended: false }));

creationRouter.post("/createCourse", async (req, res) => {
  const { courseID, title, totalHours, price, subject, instructorUsername } =
    req.body;
  const course = await Course.create({
    courseID: courseID,
    title: title,
    totalHours: totalHours,
    price: price,
    subject: subject,
    instructorUsername: instructorUsername,
  });
  res.status(200);
});

creationRouter.post("/createInstructor", async (req, res) => {
  const {
    firstName,
    email,
    lastName,
    country,
    miniBio,
    password,
    ownedMoney,
    userName,
    rating,
    numOfRatings,
  } = req.body;
  const instructor = await Instructor.create({
    firstName: firstName,
    email: email,
    lastName: lastName,
    country: country,
    miniBio: miniBio,
    password: password,
    ownedMoney: ownedMoney,
    userName: userName,
    rating: rating,
    numOfRatings: numOfRatings,
  });
  res.status(200).send("creating instructor");
});

creationRouter.post("/createCorporateUser", async (req, res) => {
  const { userName, password, country } = req.body;
  const user = await CorporateUser.create({
    userName: userName,
    password: password,
    country: country,
  });
});

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
  //await user.save();
});




creationRouter.post("/createAdmin", async (req, res) => {
  const { userName, password } = req.body;
  const admin = await Admin.create({
    userName: userName,
    password: password,
  });
});

module.exports = creationRouter;
