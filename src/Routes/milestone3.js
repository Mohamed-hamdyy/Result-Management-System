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
const Request = require("../Models/Request");
const Request = require("../Models/Ticket");


const bcrypt= require("bcrypt");
const Ticket = require("../Models/Ticket");

const creationRouter = express.Router();

creationRouter.use(express.urlencoded({ extended: false }));

// Creating Course and checking that id is unique


creationRouter.post("/payforcourse", async (req, res) => {
    const {courseID, amount,userName}= req.body
    const user= await IndividualUser.findOne({userName:userName})
    const usercourses= user.registeredCourses
    usercourses.push(courseID)
    const course= await Course.findOne({courseID:courseID})
    var instructor= await Instructor.findOne({userName:course.instructorUsername})
    var wallet = instructor.ownedMoney + amount
    instructor= await Instructor.findOneAndUpdate({userName:instructor.userName},{ownedMoney:wallet})



});

creationRouter.post("/getwallet", async (req, res) => {
    const {userName}= req.body    
    
    const instructor=await Instructor.findOne({userName:userName})
    res.json({wallet:instructor.wallet})
    });
    
  
    
    creationRouter.post("/createrequest", async (req, res) => {
        const {userName,courseID}= req.body    
        var request = await Request.create({userName:userName,courseID:courseID})
        var user =await CorporateUser.findOne({userName:userName})
        var array= user.requestedCourses
        array.push(courseID)
        var user =await CorporateUser.findOneAndUpdate({userName:userName},{requestedCourses:array})
        });


    creationRouter.post("/getallrequests", async (req, res) => {
        var request = await Request.create({})
        res.json(request)
        });

    creationRouter.post("/acceptrequest", async (req, res) => {
        const {userName,courseID}= req.body    
        var user =await CorporateUser.findOne({userName:userName})
        var array= user.registeredCourses
        array.push(courseID)
        var array2= user.requestedCourses
        var index=array2.indexOf(courseID)
        array2.splice(index,1)
        await CorporateUser.findOneAndUpdate({userName:userName},{registeredCourses:array,requestedCourses:array2})
        await Request.findOneAndDelete({userName:userName,courseID:courseID})
        });

    creationRouter.post("/rejectrequest", async (req, res) => {
        const {userName,courseID}= req.body    
        var user =await CorporateUser.findOne({userName:userName})
        var array2= user.requestedCourses
        var index=array2.indexOf(courseID)
        array2.splice(index,1)
        await CorporateUser.findOneAndUpdate({userName:userName},{requestedCourses:array2})
        await Request.findOneAndDelete({userName:userName,courseID:courseID})
        });


    creationRouter.post("/bestratings", async (req, res) => {
        var array = await Course.find({})
        array.sort(function(a, b){return b.rating - a.rating})
        res.send(array)
        });
            
    creationRouter.post("/getalltickets", async (req, res) => {
        var array = await Ticket.find({})
        res.send(array)
        });
    creationRouter.post("/markaspending", async (req, res) => {
        var {ticketID} = req.body

        var array = await Ticket.findOneAndUpdate({ticketID:ticketID},{ticketStatus:"pending"})
        });

    creationRouter.post("/markasresolved", async (req, res) => {
        var {ticketID} = req.body

        var array = await Ticket.findOneAndUpdate({ticketID:ticketID},{ticketStatus:"resolved"})
        });

    creationRouter.post("/deleteresolved", async (req, res) => {
        var {ticketID} = req.body

        var array = await Ticket.deleteMany({ticketStatus:"resolved"})
        });

    module.exports = creationRouter;
