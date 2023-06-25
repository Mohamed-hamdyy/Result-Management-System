const express= require ("express")
const mongoose=require("mongoose")
var bodyParser = require('body-parser')
var cors = require('cors')
const jwt = require("jsonwebtoken")
require("dotenv").config()
const Admin = require("../Models/Admin");
const bcrypt= require("bcrypt")
const User=require("../Models/Users");

const creationRouter = express.Router();

creationRouter.use(express.urlencoded({ extended: false }));

creationRouter.use(bodyParser.json())

creationRouter.use(cors())


creationRouter.post("/Userlogin", async (req, res) => {

    const  userName = req.body.userName;
    const password=req.body.password;

    const someUser=await User.findOne({userName:userName})
    if(someUser==null){
       res.json({message:"username not found"}).status(404)
      
    }
    else{
      bcrypt.compare(password,someUser.password).then(
        isCorrect=>{
          if(isCorrect){
            payload={
              userName:userName,
              role:someUser.role
          }
          jwt.sign(payload,process.env.JWT_SECRET,{
            expiresIn: "2h",
          },(err,token)=>{
            if(err) {
              console.log(err)
    
               res.json({message:err})
               return
            }
             res.json({message:"Success",token:token,role:someUser.role,email:someUser.email})
             return
          }) 
          }
  
          else{
            res.status(404).json({message:"incorrect password "})
            return
          }
               }
        
      )   
    }

  });


  creationRouter.post("/verifyUser", async (req, res) => {
    const  token = req.body.token;
    const role=req.body.role;

    var User;
    if (token==null){
      res.json({message: "redirect"})
      return
    }
    const tok=token
    try{
       User=jwt.verify(tok,process.env.JWT_SECRET)

    }
    catch(e){
      res.json({message:"redirect"})
      return
    }
    if(User==null || User.role!=role){
      res.json({message:"redirect"})
      return
    }else{
      res.json({message:"stay"})
    }


  });
  










module.exports = creationRouter;
