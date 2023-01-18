import React, { useState, useEffect } from 'react'
import './TraineeCourse.css'
import CourseDetails from '../Course/CourseDetails';
import CourseExercises from '../Course/CourseExercises';
import RateCourse from '../../components/RateCourse';
import ProgressBar from '../../components/ProgressBar/ProgressBar';
import { Progress } from 'reactstrap';
import CourseSub from '../Course/CourseSub';
import RefundDiv from '../../components/Refund/RefundDiv';
import Certificate from '../Course/Certificate';
import TicketDiv from '../../components/ticketDiv/TicketDiv';
import Access from '../../components/Access/Access';
import CoursePreview from '../Course/CoursePreview';

export function TraineeCourse(){
   
    const [id,setid]= useState(localStorage.getItem("NavCourseId"));
    const [Course,setCourse]=useState();
    const [Progress,setProgress]=useState();
    const[user,setUser]=useState(localStorage.getItem('userName'));
    const [Ind,setInd]=useState(false);
    const [Cor,setCor]=useState(false);
    const [type,setType]=useState(localStorage.getItem('role'));
    const [registered,setRegistered]=useState(false);
    

    const handleType=()=>{
       if(type=="individual user"){
         setInd(true);
       }
       else {
         setCor(true);
       }

    }


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
         const fetchRegistered= async (a, b,c )=>{
            const response = await fetch('http://localhost:7000/api/registeredCourse',{
              method:"POST",
              headers:{
                 "content-type":"application/json; charset=UTF-8"
          
          
              },
              body:JSON.stringify({
                 userName:a,
                 courseId:b,
                 type:c
                    
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
   async function getR(){
     
      setRegistered(await (fetchRegistered(user,id,type)));
   }
   getTheCourse();
   getR();
   handleType();

  if(registered)
   getTheProgress();

   },[Course]);



    

    return (
        <div>
     {Course && <div className='whole'>
      <h1 className='detailsTitle'>Course Details</h1>
      <div className='row'>
         {Course && <CourseDetails course={Course}/>}   
       {registered ? (<div className='pBar'>
        { Progress && <ProgressBar value={Progress.data.p}/>}
       </div> ):
       (<div>
        {!registered &&  Course && <CoursePreview course={Course}/> }
         </div>)}
         </div>
         <h1 className='detailsTitle'>Course Exercises</h1>
         <div className='row'>
       {Course && <CourseExercises course={Course} reg={registered} Exer={true}/>}
       </div>
       <h1 className='detailsTitle'>Course Subtitles</h1>
         <div className='row'>
       {Course && <CourseSub course={Course} reg={registered}/>}
       </div>
      <h1 className='detailsTitle'>Course Rate</h1>
       
      <div className='row'>
       
      
       {Course && <RateCourse />}
       </div>
       <h1 className='detailsTitle'>Tickets</h1>
       
      <div className='row'>
       
      
       { <TicketDiv />}
       </div>
       { Progress && Progress.data.p<50 && <div>
      <h1 className='detailsTitle'>Request</h1>

       <div className='row'>
        
       
        { registered && Ind && Course && <RefundDiv user={user} course={id}/>}
        {!registered && Cor && Course && <Access user={user} course={id}/>}
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

  )
}

export default TraineeCourse
