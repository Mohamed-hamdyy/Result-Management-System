import React from 'react'
import './CourseExercises.css'
import { useNavigate } from 'react-router-dom'

export function CourseExercises (props) {
  const navigate = useNavigate()

export function CourseExercises(props){

const navigate =useNavigate()


const handleExe=(event)=>{
   localStorage.setItem("ExerciseId",event.target.id);
   localStorage.setItem("ExCourseId",props.course.courseID);

   navigate('/CourseExercise');

}

return (
<div className='mainE'>

 
  <ul>     
     {
      props.course.exercises.map((exe,i)=>{
          return  <div className='row'>
             <h2 className='Exercise'>Exercise {i+1} </h2>
            <button className="ExeButton" id={exe} onClick={handleExe}>solve</button>
             </div> 
          }
         )
         }
      </ul>

    </div>
  )
}
export default CourseExercises
