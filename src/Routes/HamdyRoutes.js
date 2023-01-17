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
const Progress=require("../Models/Progress");
const Request=require("../Models/Request");
const creationRouter = express.Router();
const ReqRef=require("../Models/ReqRefund");
const Exam=require("../Models/Exam");
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
creationRoute.post('/getExam',function(req,res){
   const examID=req.body.examID;
   var query=Exam.findOne({examID:examID});
   // @ts-ignore
   query.exec(function(err,result){
       res.json(result)
   })
})


creationRoute.post('/createProgress',async function(req,res){
   const userName=req.body.userName;
   const courseId=req.body.courseId;

  const progress= await Progress.create({
   userName:userName,
   courseId:courseId,
   Done:[]

  })
   res.json({data:"item created"});
})
creationRoute.post('/addProgress',async function(req,res){
   const userName=req.body.userName;
   const courseId=req.body.courseId;
   const exe=req.body.exe;

   const ExNum=parseInt(exe);
   let found =false ;
   
  const userProgress= await Progress.find({
   userName:userName,
   courseId:courseId
  })
  const array=userProgress[0].Done;
  console.log(array);
  for ( let i=0;i<array.length;i++){
   if (array[i]===ExNum)
       found=true;

  }
  if (!found){
  array.push(ExNum);
  const userP=await Progress.updateOne({userName:userName,courseId:courseId},{Done:array});
  }

res.json({data:" progress added"});

});
creationRoute.post('/getProgress',async function(req,res){
   const userName=req.body.userName;
   const courseId=req.body.courseId;

   
  const userProgress= await Progress.find({
   userName:userName,
   courseId:courseId
  })
  const courseEx=await Course.find({courseID:courseId});
  const array=userProgress[0].Done;
  const array2=courseEx[0].exercises;

 const p=(array.length/array2.length)*100;
  

res.json({data:{p}});

});
creationRoute.post('/addRequest',async function(req,res){
   const userName=req.body.userName;
   const courseId=req.body.courseId;
   
 
   const checkRequest= await ReqRef.find({
      userName:userName,
      CourseID:courseId
     })
  if(checkRequest.length==0){
  const userRequest= await ReqRef.create({
   userName:userName,
   CourseID:courseId
  })
  res.json({data:"request added"});

}
 else
res.json({data:"Request already has been made"});

});

creationRouter.post('/getSubtitles',async function(req,res){
   const subtitles=req.body.subtitles;

    

   var subtitlesarr=[]
   for (let index = 0; index < subtitles.length; index++) {
      var sub= parseInt(subtitles[index]);
      subtitlesarr.push( await Subtitle.findOne({ subtitleID: sub  }))
      
  }

  res.json(subtitlesarr);


});
creationRouter.post('/getSubtitleVideo',async function(req,res){
   const subtitleID=req.body.subtitleID;

  const sub=await Subtitle.find({subtitleID:subtitleID});

  res.json(sub[0]);


});
creationRouter.post('/getSubtitleVideo',async function(req,res){
   const subtitleID=req.body.subtitleID;

  const sub=await Subtitle.find({subtitleID:subtitleID});

  res.json(sub[0]);


});
creationRouter.post('/registeredCourse',async function(req,res){
   const userName=req.body.userName;
   const courseId=req.body.courseId;
   const type=req.body.type;
   var found =false;
  if(type=="Individual"){
  const user=await IndividualUser.find({userName:userName});
   const array=user[0].registeredCourses;
  for (let i=0;i<array.length;i++){
     if (array[i]==courseId)
         found=true;
  }
  }
  else{
  const user=await CorporateUser.find({userName:userName});
   const array=user[0].registeredCourses;
  for (let i=0;i<array.length;i++){
     if (array[i]==courseId)
         found=true;
  }
  }
  
  res.json(found);


});
creationRouter.post("/TraineeMail",async(req,res)=>{
   const userName=req.body.userName;
   var user=await IndividualUser.findOne({userName:userName})
   var userE=user.email;
   console.log(user);

   if(user!=null){
       const link = `http://localhost:3000/Certificate/${user.userName}`
       var transporter = nodemailer.createTransport({
           service: 'gmail',
           auth: {
             user: 'mohamed.hamdyy83@gmail.com',
             pass: 'dbpgtwmfixruexif'
           }
         });
         
         var mailOptions = {
           from: 'mohamed.hamdyy83@gmail.com',
           to: email,
           subject: "Course Passed",
           text: link,
           Image: src
         };
         
         transporter.sendMail(mailOptions, function(error, info){
           if (error) {
             console.log(error);
           } else {
             console.log('Email sent: ' );
           }
         });
   }
   else{
       res.send("not found")
   }
})



module.exports = creationRouter;
