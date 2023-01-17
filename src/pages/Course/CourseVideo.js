import React from 'react'
import './CourseVideo.css'
import Pdf from 'react-to-pdf'
import Player from '../../components/Player';
import Miniplayer from '../../components/Miniplayer';
import { useState } from 'react';
import { useEffect } from 'react';

function CourseVideo () {

 //console.log(localStorage.getItem("TraineeSubtitleId"));
 const[subtitle,setSubtitle]=useState();
 const [subId,setsubId]=useState(localStorage.getItem("TraineeSubtitleId"));

 const getSub= async (a)=>{
  const response = await fetch('http://localhost:7000/api/getSubtitleVideo',{
    method:"POST",
    headers:{
       "content-type":"application/json; charset=UTF-8"


    },
    body:JSON.stringify({
      subtitleID:a
          
    })
  });
      const json = await response.json()
      console.log(json);
      return json;
  }
  useEffect(()=>{
    async function getThesubt(){
     setSubtitle( await (getSub(subId) ));
     console.log(subtitle);
      }
      getThesubt(); 

    },[subtitle]);
  

   const ref = React.createRef()

  return (
    <>
      <div className='mainV'>
        <h1 className='title'>Course Video</h1>
        <div className="videoCont">
        <div className="videoDiv">
         {subtitle && <Miniplayer url={subtitle.videoLink}/> }
         </div>
         </div>
        <div className='include' ref={ref}>
          <h1 className='title2'>Notes:</h1>
          <textarea className='Tarea' placeholder='type your notes here' />
        </div>
        <Pdf targetRef={ref} filename='Notes.pdf'>
          {({ toPdf }) => <button className='dButton' onClick={toPdf}>Download as PDF</button>}

        </Pdf>

      </div>

    </>
  )
}
export default CourseVideo
