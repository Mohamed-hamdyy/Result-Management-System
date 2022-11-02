const { Router } = require("express");
const express = require("express");
const Course = require("../Models/Course");
const Instructor = require("../Models/Instructor");
const CorporateUser = require("../Models/CorporateUser");
const IndividualUser = require("../Models/IndividualUser");
const Admin = require("../Models/Admin");
const individualUser = require("../Models/IndividualUser");
const creationRoute= require("./creationAPI");


const creationRouter = express.Router();

creationRouter.use(express.urlencoded({ extended: false }));



/////getting course of a certain instructor
creationRouter.get('/getInstructorCourses', (req,res)=>{
const instName =req.body.name;
const Title =req.body.title;
const Subject= req.body.subject;
var x ;

if (Title==undefined )
   x = Course.find({instructorUsername:instName , subject: Subject });
else 
   x = Course.find({instructorUsername: instName , title:Title });

x.exec((err,r)=>{
    if (err)
    throw err;
    else 
    for (i = 0; i < r.length; i++) console.log(r[i]);
});

  
});
////// creating a course by instructor 
creationRouter.use('/InstCreateCourse',creationRoute);


//// adding a new admin
creationRouter.use('/addAdmin',creationRoute);

////adding an instructor
creationRouter.use('/addInstructor',creationRoute);

/////adding corporate trainees 
creationRouter.use('/addCorporate',creationRoute);



module.exports = creationRouter;
