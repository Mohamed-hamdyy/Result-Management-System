const express = require("express");
const bcrypt= require("bcrypt");
const Admin = require("../Models/Admin");
const User= require("../Models/Users");
const Student= require("../Models/Students");


const creationRouter = express.Router();
creationRouter.use(express.urlencoded({ extended: false }));


creationRouter.post('/getCourses',async function(req,res){
   const userName=req.body.userName;

   const student= await Student.find({userName:userName});
   const array = student[0].registeredCourses;
  
   res.json(array);
   

});


module.exports = creationRouter;
