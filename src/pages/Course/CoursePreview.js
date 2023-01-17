import React from 'react'
import './CourseVideo.css'
import Player from '../../components/Player';
import Miniplayer from '../../components/Miniplayer';
import { useState } from 'react';
import { useEffect } from 'react';

function CoursePreview (props) {

 //console.log(localStorage.getItem("TraineeSubtitleId"));
 


  return (
    <>
      <div className='mainPre'>
        <h1 className='titlePre'>Course Preview</h1>
        <div className="videoCont2">
        <div className="videoDiv">
         {  <Miniplayer url={props.course.preview}/> }
         </div>
         </div>
        <div className='include' >
          <h1 className='title2'>Summary:</h1>
          <h2 className="textSum">{props.course.summary}</h2>
        </div>
      <br/>
      <br/>

      </div>

    </>
  )
}
export default CoursePreview;
