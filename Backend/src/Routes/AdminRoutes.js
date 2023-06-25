const express = require("express");
const bcrypt= require("bcrypt");
const Admin = require("../Models/Admin");
const User= require("../Models/Users");
const Student= require("../Models/Students");
const Course=require("../Models/Course");


const creationRouter = express.Router();
creationRouter.use(express.urlencoded({ extended: false }));



creationRouter.post('/getCoursesList',async function(req,res){

 const course= await Course.find({
 })
 const student= await Student.find({
})

res.json({course,student});


});
creationRouter.post('/getCoursesListApp',async function(req,res){

  const course= await Course.find({
  })
 
 
 res.json(course);
 
 
 });
 creationRouter.post('/getStudentsListApp',async function(req,res){

 
  const student= await Student.find({
 })
 
 res.json(student);
 
 
 });



creationRouter.post('/addCourse',async function(req,res){
    const userName=req.body.userName;
    const courseCode=req.body.courseCode;
  

 
    var found = false ;

   const student= await Student.find({
    userName:userName,
   })
   const array=student[0].registeredCourses;
  
   for (let i=0;i<array.length;i++){
       if (array[i].code===courseCode)
           found =true;

   }


   if(!found){
    const c = await Course.find({
        code:courseCode
     })
    
     const q=[];
     const n=parseInt(c[0].quizNo);

    for (let i=0;i<n;i++){
       q.push('-')
    }


    const course={
      code:courseCode,
      name:c[0].name,
      hours:c[0].hours,
      quizesGrades:q,
      quizesTotal:q

    }

    array.push(course);

   const userStudent= await Student.updateOne({userName:userName},{registeredCourses:array});
   
 
 res.json({Added:true});
}
else {
    res.json({Added:false});

}


 });
 
creationRouter.post('/RemoveCourse',async function(req,res){
  const userName=req.body.userName;
  const courseCode=req.body.courseCode;
  

  var found = false ;

  
 const student= await Student.find({
  userName:userName,
 })

 const array=student[0].registeredCourses;
 const regC=[];

 for (let i=0;i<array.length;i++){
     if (array[i].code===courseCode)
         found =true;
     else 
         regC.push(array[i]);

 }


 if(found){
 const userStudent= await Student.updateOne({userName:userName},{registeredCourses:regC});
 

res.json({Removed:true});
}
else {
  res.json({Removed:false});

}


});


creationRouter.post('/RemoveAllCourses',async function(req,res){
  const userName=req.body.userName;
    
 const student= await Student.find({
  userName:userName,
 })

 const array=student[0].registeredCourses;
 const regC=[];




 const userStudent= await Student.updateOne({userName:userName},{registeredCourses:regC});
 

res.json({Removed:true});




});



creationRouter.post('/getCourseQuiz',async function(req,res){
 const code=req.body.courseCode;
 
 const course= await Course.find({
  code:code
})
const c=course[0];
const arr=[];
const n = parseInt(c.quizNo);

for ( let i=0;i<n;i++){
 arr.push('-');
}



res.json({c,arr});

});
creationRouter.post('/getCourseQuizApp',async function(req,res){
  const code=req.body.courseCode;
  
  const course= await Course.find({
   code:code
 })
 const c=course[0];
 const arr=[];
 const n = parseInt(c.quizNo);
 
 for ( let i=0;i<n;i++){
  arr.push('-');
 }
 
 
 
 res.json(c);
 
 });
 creationRouter.post('/getCourseQuizApp2',async function(req,res){
  const code=req.body.courseCode;
  
  const course= await Course.find({
   code:code
 })
 const c=course[0];
 const arr=[];
 const n = parseInt(c.quizNo);
 
 for ( let i=0;i<n;i++){
  arr.push(i+1);
 }
 
 
 
 res.json({a:arr});
 
 });
creationRouter.post('/getStudentsList',async function(req,res){
  const code =req.body.code;
  const n =req.body.nomber;
  const nn=n-1;

  const stu=[];
  const grades=[];


  const student= await Student.find({
 })

 for ( let i=0;i<student.length;i++){
   for ( let k=0;k<student[i].registeredCourses.length;k++){
      if(student[i].registeredCourses[k].code===code){
         stu.push(student[i]);
         grades.push(student[i].registeredCourses[k].quizesGrades[nn]);
        }
   }
 }
 
 
 res.json({stu,grades});
 
 
 });
 creationRouter.post('/getStudentsListApp22',async function(req,res){
  const code =req.body.code;
  const n =req.body.nomber;
  const nn=n-1;

  const stu=[];
  const grades=[];


  const student= await Student.find({
 })

 for ( let i=0;i<student.length;i++){
   for ( let k=0;k<student[i].registeredCourses.length;k++){
      if(student[i].registeredCourses[k].code===code){
         stu.push(student[i]);
         grades.push(student[i].registeredCourses[k].quizesGrades[nn]);
        }
   }
 }
 
 res.json(stu);
 
 
 });
 creationRouter.post('/getStudentsList2',async function(req,res){
  const code =req.body.code;


  const stu=[];
  const grades=[];
  const rank=[]

  const student= await Student.find({
 })

 for ( let i=0;i<student.length;i++){
   for ( let k=0;k<student[i].registeredCourses.length;k++){
      if(student[i].registeredCourses[k].code===code){
         stu.push(student[i]);
         grades.push(student[i].registeredCourses[k].examGrade);
         rank.push(student[i].registeredCourses[k].examState);
        }
   }
 }
 
 
 res.json({stu,grades,rank});
 
 
 });


creationRouter.post('/StudentQuizes',async function(req,res){
  const userName=req.body.userName;
  const courseCode=req.body.courseCode;

  const student= await Student.find({
    userName:userName,
   })
   

   const array=student[0].registeredCourses;

   for (let i=0;i<array.length;i++){
       if (array[i].code===courseCode){
         res.json(array[i].quizesGrades);
         return;
  
       }
      }
  

});



 creationRouter.post('/addQuiz',async function(req,res){
  const userName=req.body.userName;
  const courseCode=req.body.courseCode;
  const quizGrade=req.body.quizGrade;
  const quizTotal=req.body.quizTotal;
  const quizNo=req.body.Number;
  const index=req.body.index;

  const No=quizNo-1;


for (let i=0;i<index.length;i++){

  const regC=[];
  const user=userName[index[i]].userName;

  const student= await Student.find({
    userName:user,
   })
   const array=student[0].registeredCourses;

for (let l=0;l<array.length;l++){
   if(array[l].code===courseCode){
    array[l].quizesGrades[No]=quizGrade[i];
    array[l].quizesTotal[No]=quizTotal;
    regC.push(array[l]);
   }
   else 
   regC.push(array[l]);


}
const userStudent= await Student.updateOne({userName:user},{registeredCourses:regC});

}

res.json({data:"Quiz Grades Added Successfully"});


});
creationRouter.post('/addQuizApplication',async function(req,res){
  const courseCode=req.body.courseCode;
  const quizGrade=req.body.quizGrade;
  const quizTotal=req.body.quizTotal;
  const quizNo=req.body.Number;

  const n=parseInt(quizNo);
  const No=n-1;


  const stu=[];
  const student= await Student.find({
  })
 
  for ( let i=0;i<student.length;i++){
    for ( let k=0;k<student[i].registeredCourses.length;k++){
       if(student[i].registeredCourses[k].code===courseCode){
          stu.push(student[i]);
         }
    }
  }

for (let i=0;i<stu.length;i++){

  const regC=[];
  const user=stu[i].userName;

  const student2= await Student.find({
    userName:user,
   })
   const array=student2[0].registeredCourses;

for (let l=0;l<array.length;l++){
   if(array[l].code===courseCode){
    if(quizGrade[i]!=""){
    array[l].quizesGrades[No]=quizGrade[i];
    array[l].quizesTotal[No]=quizTotal;

    }
    regC.push(array[l]);
   }
   else 
   regC.push(array[l]);


}
const userStudent= await Student.updateOne({userName:user},{registeredCourses:regC});

}

res.json({Added:true});


});

creationRouter.post('/addExamApplication',async function(req,res){
  const courseCode=req.body.courseCode;
  const examGrade=req.body.examGrade;
  const examTotal=req.body.examTotal;
  const rank=req.body.rank;
 


  const stu=[];
  const student= await Student.find({
  })
 
  for ( let i=0;i<student.length;i++){
    for ( let k=0;k<student[i].registeredCourses.length;k++){
       if(student[i].registeredCourses[k].code===courseCode){
          stu.push(student[i]);
         }
    }
  }

for (let i=0;i<stu.length;i++){

  const regC=[];
  const user=stu[i].userName;

  const student2= await Student.find({
    userName:user,
   })
   const array=student2[0].registeredCourses;

for (let l=0;l<array.length;l++){
   if(array[l].code===courseCode){
    if(examGrade[i]!=""){
    array[l].examGrade=examGrade[i];
    array[l].examTotal=examTotal;

     }
      if(rank[i]!=""){
      array[l].examState=rank[i];
      }
    regC.push(array[l]);
   }
   else 
   regC.push(array[l]);


}
const userStudent= await Student.updateOne({userName:user},{registeredCourses:regC});

}

res.json({Added:true});


});

creationRouter.post('/addExam',async function(req,res){
  const userName=req.body.userName;
  const courseCode=req.body.courseCode;
  const ExamGrade=req.body.examGrade;
  const ExamTotal=req.body.examTotal;
  const rank=req.body.rank;
  const index=req.body.index;
  const index2=req.body.index2;



for (let i=0;i<index.length;i++){

  const regC=[];
  const user=userName[index[i]].userName;

  const student= await Student.find({
    userName:user,
   })
   const array=student[0].registeredCourses;

for (let l=0;l<array.length;l++){
   if(array[l].code===courseCode){
    array[l].examGrade=ExamGrade[i];
    array[l].examTotal=ExamTotal;
    regC.push(array[l]);
   }
   else 
   regC.push(array[l]);


}
const userStudent= await Student.updateOne({userName:user},{registeredCourses:regC});

}

for (let i=0;i<index2.length;i++){

  const regC=[];
  const user=userName[index2[i]].userName;

  const student= await Student.find({
    userName:user,
   })
   const array=student[0].registeredCourses;

for (let l=0;l<array.length;l++){
   if(array[l].code===courseCode){
    array[l].examState=rank[i];
    regC.push(array[l]);
   }
   else 
   regC.push(array[l]);


}
const userStudent= await Student.updateOne({userName:user},{registeredCourses:regC});

}

res.json({data:"Exam Grades Added Successfully"});


});
creationRouter.post('/addWeight',async function(req,res){
  const courseCode=req.body.courseCode;
  const quizW=req.body.quizWeight+'%';
  const examW=req.body.examWeight+'%';
  const assignW=req.body.assignWeight+'%';


  const course= await Course.updateOne({code:courseCode},{quizesWeight:quizW,ExamsWeight:examW,AssignWeight:assignW});

  res.json({data:"Course Weights have been Added Successfully"});

 
   

  
  

});
creationRouter.post('/addWeightApp',async function(req,res){
  const courseCode=req.body.courseCode;
  const quizW=req.body.quizWeight+'%';
  const examW=req.body.examWeight+'%';
  const assignW=req.body.assignWeight+'%';


  const course= await Course.updateOne({code:courseCode},{quizesWeight:quizW,ExamsWeight:examW,AssignWeight:assignW});

  res.json({Added:true});

 
   

  
  

});






module.exports = creationRouter;

