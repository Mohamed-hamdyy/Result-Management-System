import React, { useState,useEffect } from 'react';
import './TraineeCourse.css'
import CourseDetails from '../Course/CourseDetails';



export function TraineeCourse(){
   // var location= useLocation();
   // location.state.id
    const [id,setid]= useState(1);
    const [Course,setCourse]=useState();
    
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
          console.log(json);
          setCourse(json);
          console.log(Course);
      }

   useEffect(()=>{
 async function getTheCourse(){
   await (getCourse(id));

   }
   getTheCourse();

   },[]);



    

    return (
        <div>
    <div className='whole'>

      <h1 className='detailsTitle'>Course Details</h1>
        <CourseDetails course={Course}/>
      
      
     



     </div>
     
       </div>



    );

}

export default TraineeCourse;