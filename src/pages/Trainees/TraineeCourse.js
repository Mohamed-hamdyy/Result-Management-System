import React, { useState,useEffect } from 'react';
import './TraineeCourse.css'
import CourseDetails from '../Course/CourseDetails';
import CourseExercises from '../Course/CourseExercises';
import RateCourse from '../../components/RateCourse';
import ProgressBar from '../../components/ProgressBar/ProgressBar';
import { Progress } from 'reactstrap';
import CourseSub from '../Course/CourseSub';
import RefundDiv from '../../components/Refund/RefundDiv';
import Certificate from '../Course/Certificate';

export function TraineeCourse(){
   
    const [id,setid]= useState(localStorage.getItem("NavCourseId"));
    const [Course,setCourse]=useState();
    const [Progress,setProgress]=useState();
    const[user,setUser]=useState("ahmedyo2001");

    const getCourse= async (a)=>{
      const response = await fetch('http://localhost:7000/api/filtercoursebyid',{
        method:"POST",
        headers:{
           "content-type":"application/json; charset=UTF-8"
    
    
        },
        body:JSON.stringify({
           courseID:a
              
        })
      });
          const json = await response.json()
       //   console.log(json);
          return json;
      }
      const getProgress= async (a, b )=>{
         const response = await fetch('http://localhost:7000/api/getProgress',{
           method:"POST",
           headers:{
              "content-type":"application/json; charset=UTF-8"
       
       
           },
           body:JSON.stringify({
              userName:a,
              courseId:b
                 
           })
         });
             const json = await response.json()
             return json;
         }

   useEffect(()=>{
 async function getTheCourse(){
   setCourse(await (getCourse(id)));
   //console.log(Course);

   }
   async function getTheProgress(){
     
      setProgress(await (getProgress(user,id)));
   
   }
   getTheCourse();
   getTheProgress();

   },[Course]);



    

    return (
        <div>
     {Course && <div className='whole'>
      <h1 className='detailsTitle'>Course Details</h1>
      <div className='row'>
         {Course && <CourseDetails course={Course}/>}   
         <div className='pBar'>
        {Progress && <ProgressBar value={Progress.data.p}/>}
         </div>
         </div>
         <h1 className='detailsTitle'>Course Exercises</h1>
         <div className='row'>
       {Course && <CourseExercises course={Course}/>}
       </div>
       <h1 className='detailsTitle'>Course Subtitles</h1>
         <div className='row'>
       {Course && <CourseSub course={Course}/>}
       </div>
      <h1 className='detailsTitle'>Course Rate</h1>
       
      <div className='row'>
       
      
       {Course && <RateCourse />}
       </div>
       { Progress && Progress.data.p<50 && <div>
      <h1 className='detailsTitle'>Course Refund</h1>

       <div className='row'>
        
       
        {Course && <RefundDiv user={user} course={id}/>}
        </div> </div>}
        
        { Progress && Progress.data.p==100 && <div>

       <div className='row'>
        
       
        {Course && <Certificate title={Course.title} />} 
        </div>
        </div>}

       <br/>
       <br/>

     </div>
}
       </div>



    );

}

export default TraineeCourse;