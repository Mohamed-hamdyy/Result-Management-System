const { Router } = require("express");
const express = require("express");
const Course = require("../Models/Course");
const Instructor = require("../Models/Instructor");
const CorporateUser = require("../Models/CorporateUser");
const IndividualUser = require("../Models/IndividualUser");
const Admin = require("../Models/Admin");
const creationRoute= require("./creationAPI");

const creationRouter = express.Router();

creationRouter.use(express.urlencoded({ extended: false }));



/////getting course of a certain instructor
creationRouter.post('/searchCourseBy', (req,res)=>{
const instName =req.body.instName;
const Title =req.body.Title;
const Subject= req.body.Subject;
var x ;

if (Title!=undefined )
   x = Course.find({  title:Title });
else if (Subject!=undefined ) 
   x = Course.find({subject:Subject });
else 
x = Course.find({instructorUsername:instName});
       

x.exec((err,r)=>{
    if (err)
    throw err;

    res.json(r);
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

creationRouter.post("/TraineeMyCourse",async function(req,res){
   var userName = req.body.userName;
   var query = await IndividualUser.findOne({userName:userName})
   var array = query.registeredCourses;
   
   var arrayCourse = []
   for(var i = 0;i<array.length;i++){
       var queryCourse = await Course.findOne({courseID:array[i]})
       arrayCourse = arrayCourse.concat([queryCourse])
   }
   res.json(arrayCourse)
});
creationRoute.get("/getAllcourses",function(req,res){
    
   var query=Course.find({});
   // @ts-ignore
   query.exec(function(err,result){
       
       res.json(result)
   })
})
creationRoute.post('/getDetails',function(req,res){
   const userName=req.body.userName;
   var query=IndividualUser.findOne({userName:userName});
   // @ts-ignore
   query.exec(function(err,result){
       res.json(result)
   })
})

module.exports = creationRouter;
