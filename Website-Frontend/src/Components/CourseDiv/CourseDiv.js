import React from "react";
import "./CourseDiv.css";
import QuizIcon from '@mui/icons-material/Quiz';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';

export function CourseDiv(props){

return(
<div className="WholeCourse">
 <div className="CourseInfo">
    <h2 className="codeText">[{props.course.code}]</h2>
    <h2 className="nameText">{props.course.name}</h2>
    <h2 className="hoursText">Credit hours: {props.course.hours}</h2>

</div>
<div className="CourseGrades">
    <div className="Quizes">
    <QuizIcon fontSize='large' style={{ color: "#87CEEB" ,paddingLeft:'30px',paddingTop:'15px' }}/>
    <h3 className="nameText2">Quizes :</h3>
            {
                  props.course.quizesGrades.map((quiz,i) => {
                    return <h3 className="QuizGrade">Quiz({i+1}): {quiz}/{props.course.quizesTotal[i]}</h3>
                  }
                  )
                }


       

    </div>
    <div className="Exams">
     <EventAvailableIcon fontSize='large' style={{ color: "#87CEEB" ,paddingLeft:'30px',paddingTop:'15px' }}/>
     <h3 className="nameText2">Exam :</h3>
     <h3 className="QuizGrade">Grade : {props.course.examGrade}/{props.course.examTotal}</h3>
     <h3 className="QuizGrade">Rank: {props.course.examState}</h3>         
    </div>
 </div> 
</div>





)
}
export default CourseDiv;