const express = require("express");
const bcrypt= require("bcrypt");
const Admin = require("../Models/Admin");
const User= require("../Models/Users");
const Student= require("../Models/Students");
const Inst=require("../Models/Instructor");
const Course =require("../Models/Course");


const creationRouter = express.Router();
creationRouter.use(express.urlencoded({ extended: false }));


/////////create Admin
creationRouter.post("/createAdmin", async (req, res) => {
    
    const  userName = req.body.userName;
    const password=req.body.password;
    const email=req.body.email;
  
    myArray = await User.find({
      userName: userName,
    });
    
    if (myArray.length == 0) {
      const password2= await bcrypt.hash(password,10)

      const admin = await Admin.create({
        userName: userName,
        password: password2,
      });
      const user=await User.create({
         userName:userName,
         password:password2,
         email:email,
         role:"Admin"
      });


      res.json({Created:true})
    } else {
      res.json({Created:false})
    }
  });

////////////////create student 
creationRouter.post("/createStudent", async (req, res) => {
    
    const  userName = req.body.userName;
    const password=req.body.password;
    const email=req.body.email;
    const Phone=req.body.phoneNumber;
  
    myArray = await User.find({
      userName: userName,
    });
    
    if (myArray.length == 0) {
      const password2= await bcrypt.hash(password,10)

      const student = await Student.create({
        userName: userName,
        email:email,
        phoneNumber:Phone,
        registeredCourses:[],

      });
      const user=await User.create({
         userName:userName,
         password:password2,
         email:email,
         role:"Student"
      });


      res.json({created:true})
    } else {
      res.json({created:false})
    }
  });
/////////////////create Inst
  creationRouter.post("/createInst", async (req, res) => {
    
    const  userName = req.body.userName;
    const password=req.body.password;
    const email=req.body.email;
    const Phone=req.body.phoneNumber;
  
    myArray = await User.find({
      userName: userName,
    });
    
    if (myArray.length == 0) {
      const password2= await bcrypt.hash(password,10)

      const Instructor = await Inst.create({
        userName: userName,
        email:email,
        phoneNumber:Phone,

      });
      const user=await User.create({
         userName:userName,
         password:password2,
         email:email,
         role:"Instructor"
      });


      res.json({created:true})
    } else {
      res.json({created:false})
    }
  });

/////create Course

creationRouter.post("/createCourse", async (req, res) => {
    
  const  code = req.body.code;
  const name=req.body.name;
  const hours=req.body.hours;
  const No=req.body.quizNo;


  const Array=await Course.find({});
  const id=Array.length+1;



  const myArray = await Course.find({
     code:code
  });
  
  if (myArray.length == 0) {

    const  course  = await Course.create({
      courseId:id,
     code :code,
     name:name,
     hours:hours,
     quizNo:No

    });


    res.json({created:true})
  } else {
    res.json({created:false})
  }
});




  module.exports = creationRouter;
