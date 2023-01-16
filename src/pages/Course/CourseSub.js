import React, { useState, useEffect } from 'react'
import './CourseSub.css'
import { useNavigate } from 'react-router-dom';


export function CourseSub(props){

    const array= props.course.subtitles;
    const [sub,setSub]=useState();
    
    const getsubtitles= async (a)=>{
      const response = await fetch('http://localhost:7000/api/getSubtitles',{
        method:"POST",
        headers:{
           "content-type":"application/json; charset=UTF-8"
    
    
        },
        body:JSON.stringify({
           subtitles: a
              
        })
      });
          console.log(a);
          const json = await response.json()
          return json;
      }

  useEffect(() => {
    async function getThesub () {
      setSub(await (getsubtitles(array)))
      // console.log(Course);
    }
    getThesub()
  }, [])

   

const navigate =useNavigate()

const handleWatch=(event)=>{
   localStorage.setItem("TraineeSubtitleId",event.target.id);
   navigate('/CourseVideo');



}


return (
<div className='mainS'>

 
  <ul>     
     {sub &&
      sub.map((subt,i)=>{
          return  <div className='rowS'>
             <h2 className='subText'>{i+1}- {subt.title} </h2>
            <button className="subButton" id={subt.subtitleID} onClick={handleWatch}>watch</button>
             </div> 
          }
         )
         }
       </ul>  

    </div>
  )
}
export default CourseSub
