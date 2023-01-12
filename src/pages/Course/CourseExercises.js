import React from 'react'
import './CourseExercises.css'
import { useNavigate } from 'react-router-dom';


export function CourseExercises(props){

const navigate =useNavigate()

const handleExe=(event)=>{
   localStorage.setItem("ExerciseId",event.target.id);
   navigate('/CourseExercise');

}

return (
<div className='mainE'>

 
  <ul>     
     {
      props.course.exercises.map(exe=>{
          return  <div className='row'>
             <h2 className='Exercise'>Exercise </h2>
            <button className="ExeButton" id={exe} onClick={handleExe}>solve</button>
             </div> 
          }
         )
         }
       </ul>  





</div>
);


}
export default CourseExercises;