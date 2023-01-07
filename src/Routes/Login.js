const express= require ("express")
const mongoose=require("mongoose")
var bodyParser = require('body-parser')
var cors = require('cors')
const jwt = require("jsonwebtoken")
require("dotenv").config()
const Course = require("../Models/Course");
const Instructor = require("../Models/Instructor");
const CorporateUser = require("../Models/CorporateUser");
const IndividualUser = require("../Models/IndividualUser");
const Admin = require("../Models/Admin");
const individualUser = require("../Models/IndividualUser");
const bcrypt= require("bcrypt")


const creationRouter = express.Router();

creationRouter.use(express.urlencoded({ extended: false }));

creationRouter.use(bodyParser.json())

creationRouter.use(cors())


creationRouter.post("/adminlogin", async (req, res) => {

    const { userName, password} = req.body;

    const admin=await Admin.findOne({userName:userName})
    if(admin==null){
      res.sendStatus(404).json("username not found")
    }
   bcrypt.compare(password,admin.password).then(
      isCorrect=>{
        if(isCorrect){
          payload={
            userName:userName,
            role:"admin"
        }
        jwt.sign(payload,process.env.JWT_SECRET,(err,token)=>{
          if(err) {
            console.log(err)
  
             res.json({message:err})
          }
           res.json({message:"Success",token:"Bearer "+token,role:"admin"})
        }) 
        }

        else{
          res.sendStatus(404).json("incorrect password ")

        }
             }
      
    )   
  });


  creationRouter.post("/adminverify", async (req, res) => {
    const { token} = req.body;

    if (token==null){
      res.json("redirect")
      return
    }
    const tok=token.split(" ")[1]
    const admin=jwt.verify(tok,process.env.JWT_PRIVATE)

    if(admin==null){
      res.json("redirect to home page")
    }

  });
  


  creationRouter.post("/instructorlogin", async (req, res) => {

    const { userName, password} = req.body;

    const admin=await Instructor.findOne({userName:userName})
    if(admin==null){
      res.sendStatus(404).json("username not found")
    }
   bcrypt.compare(password,admin.password).then(
      isCorrect=>{
        if(isCorrect){
          payload={
            userName:userName,
            role:"instructor",
        }
        jwt.sign(payload,process.env.JWT_SECRET,(err,token)=>{
          if(err) {
            console.log(err)
  
            return res.json({message:err})
          }
          return res.json({message:"Success",token:"Bearer "+token,role:"instructor",userName:userName})
        }) 
        }
        else{
          res.sendStatus(404).json("incorrect password ")

        }
             }  
    )   
  });
  creationRouter.post("/instructorverify", async (req, res) => {
    const { token} = req.body;

    if (token==null){
      res.json("redirect")
      return
    }
    const tok=token.split(" ")[1]
    const instructor=jwt.verify(tok,process.env.JWT_PRIVATE)

    if(instructor==null){
      res.json("redirect to home page")
    }
    res.json({userName:instructor.userName})

  });

  creationRouter.post("/individualuserlogin", async (req, res) => {

    const { userName, password} = req.body;

    const admin=await IndividualUser.findOne({userName:userName})
    if(admin==null){
      res.sendStatus(404).json("username not found")
    }
   bcrypt.compare(password,admin.password).then(
      isCorrect=>{
        if(isCorrect){
          payload={
            userName:userName,
            role:"individual user",
            id:admin.userName
        }
        jwt.sign(payload,process.env.JWT_SECRET,(err,token)=>{
          if(err) {
            console.log(err)
  
            return res.json({message:err})
          }
          return res.json({message:"Success",token:"Bearer "+token,role:"individual user",userName:userName})
        }) 
        }
        else{
          res.sendStatus(404).json("incorrect password ")

        }
             }  
    )   
  });

  creationRouter.post("/individualuserverify", async (req, res) => {
    const { token} = req.body;

    if (token==null){
      res.json("redirect")
      return
    }
    const tok=token.split(" ")[1]
    const instructor=jwt.verify(tok,process.env.JWT_PRIVATE)

    if(instructor==null){
      res.json("redirect to home page")
    }
    res.json({userName:instructor.userName})

  });


  creationRouter.post("/corporateuserlogin", async (req, res) => {

    const { userName, password} = req.body;

    const admin=await CorporateUser.findOne({userName:userName})
    if(admin==null){
      res.sendStatus(404).json("username not found")
    }
   bcrypt.compare(password,admin.password).then(
      isCorrect=>{
        if(isCorrect){
          payload={
            userName:userName,
            role:"corporate user",
            id:admin.userName
        }
        jwt.sign(payload,process.env.JWT_SECRET,(err,token)=>{
          if(err) {
            console.log(err)
  
            return res.json({message:err})
          }
          return res.json({message:"Success",token:"Bearer "+token,role:"corporate user",userName:userName})
        }) 
        }
        else{
          res.sendStatus(404).json("incorrect password ")

        }
             }  
    )   
  });

  creationRouter.post("/corporateuserverify", async (req, res) => {
    const { token} = req.body;

    if (token==null){
      res.json("redirect")
      return
    }
    const tok=token.split(" ")[1]
    const instructor=jwt.verify(tok,process.env.JWT_PRIVATE)

    if(instructor==null){
      res.json("redirect to home page")
    }
    res.json({userName:instructor.userName})

  });








module.exports = creationRouter;
