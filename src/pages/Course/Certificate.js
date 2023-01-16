import React from 'react'
import'./CourseVideo.css';
import Pdf from 'react-to-pdf';
import img1 from "../../images/Certificate5.jpg"
import { useState } from 'react';

function Certificate(props){

const[showC,setShow]=useState(true);  
const ref=React.createRef();
const handleFinish=()=>{
setShow(false);

}

 return (
     <>
  {showC && <div className="mainV">
    <h1 className='title'>Congratulations</h1>
    <h1 className='title3'>you have successfully passed the Course </h1>

    <div className='include' ref={ref}>
          <h1 className='title4'> Course: {props.title}</h1>
    
          <img src={img1} className="ImageCer" alt="no image" height="200" width="350"/>
          
     </div>
    <Pdf targetRef={ref} filename="Certificate.pdf" >
       {({ toPdf})=>   <button className="dButton" onClick={toPdf}>Download as PDF</button>}

   </Pdf> 

    <button className="CloseButton" onClick={handleFinish}>Finish</button>

  </div>
}

  </>
);



}
export default Certificate;