const { Router } = require("express");
const express = require("express");
const Course = require("../Models/Course");
const Instructor = require("../Models/Instructor");
const CorporateUser = require("../Models/CorporateUser");
const IndividualUser = require("../Models/IndividualUser");
const Admin = require("../Models/Admin");
const creationRoute= require("./creationAPI");
const Exercise=require("../Models/Exercise");
const course = require("../Models/Course");
const Subtitle=require("../Models/Subtitle");
const Ticket=require("../Models/Ticket");

const creationRouter = express.Router();

creationRouter.use(express.urlencoded({ extended: false }));



/////getting course of a certain instructor
creationRouter.post('/searchCourseBy', async (req,res)=>{
const instName =req.body.instName;
const Title =req.body.Title;
const Subject= req.body.Subject;
var courses ;
var outputarray=[];
courses =  await Course.find({});

if (Title!=undefined ){
   for(i=0;i<courses.length;i++){
    if(courses[i].title.match(Title))
         outputarray.push(courses[i]);

   }

}
else if (Subject!=undefined ) 
for(i=0;i<courses.length;i++){
   if(courses[i].subject.match(Subject))
        outputarray.push(courses[i]);

  }
else {
for(i=0;i<courses.length;i++){
   if(courses[i].subject.match(instName))
        outputarray.push(courses[i]);

  }    
}

    res.json(outputarray);

  
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
creationRoute.post("/createTicket", async function(req,res){
   const Tickets= await Ticket.find({});
   const n =Tickets.length+1; 
   const ticketID=n+"";
   const status=req.body.status;
   const type=req.body.type;
   const text=req.body.text;
   const courseId=req.body.courseID;

   var query=  await Ticket.create({
     ticketID:ticketID,
     ticketStatus:status,
     ticketType:type,
     ticketText:text,
     courseID:courseId

   
   });
  res.json({data:"created"});
})
creationRoute.post('/getDetails',function(req,res){
   const userName=req.body.userName;
   var query=IndividualUser.findOne({userName:userName});
   // @ts-ignore
   query.exec(function(err,result){
       res.json(result)
   })
})


creationRoute.post('/getExercise',function(req,res){
   const exerciseID=req.body.exerciseID;
   var query=Exercise.findOne({exerciseID:exerciseID});
   // @ts-ignore
   query.exec(function(err,result){
       res.json(result)
   })
})

creationRouter.post('/getSubtitles',async function(req,res){
   const subtitles=req.body.subtitles;

    

   var subtitlesarr=[]
   for (let index = 0; index < subtitles.length; index++) {
      var sub= parseInt(subtitles[index]);
      subtitlesarr.push( await Subtitle.findOne({ subtitleID: sub  }))
      
  }

  res.json(subtitlesarr);


});



module.exports = creationRouter;
