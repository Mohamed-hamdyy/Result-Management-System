import { MusicNote } from '@mui/icons-material';
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Star from '../../components/Star';
import { BiDownArrow } from "react-icons/bi";
import './Course.css';

export function CourseDiv(props) {
     const navigate = useNavigate();
     const [sub, setsub]=useState();
     const[exe,setexe]=useState();
     const[dis,setdis]=useState();
     const[time,setTime]=useState(true);

    const [courseDetails,setcourseDetails] = useState(false);

    const handleCourseDetails= async() => {
      setcourseDetails(!courseDetails);
    }


     const handleOpen=(event)=>{
      localStorage.setItem("NavCourseId",event.target.id);
      navigate('/TraineeCourse');


     }
  

  const [chosenCountry, setChosenCountry] = useState(0)

  // const api="http://localhost:7000"
  const getSub = async (cid, c) => {
    const response = await fetch('http://localhost:7000/api/choosecourse', {
      method: 'POST',
      headers: {
        'content-type': 'application/json; charset=UTF-8'

      },
      body: JSON.stringify({
        courseID: cid,
        country: c

      })
    })
    const json = await response.json()
    //    console.log(json);
    //    setdis(json.discount);
    //    setexe(json.exercisesarr);
    //     setsub(json.subtitlesarr);
  }

  



    const fares = [26,1,3.67,0.81,0.95];
    const currency = ['LE','$','UAE','£','€'];

    const stars = (starNumber) => {
        var array=[];
        for(var i=0;i<starNumber;i++){
          array=array.concat([0])
        }
        return array
      
      }
   
  return (
 
    <div className={courseDetails ? 'newCourse-After' : 'newCourse'}>
      <div className={courseDetails ? 'newCourse-After-Content' : 'newCourse-content'}>

          <div className="newCourse_title">
              <h3 >{props.course.title}</h3>
          </div>
          
                  { <div className="NewCourse_Prices">
                  <h2 className='NewCourse_price'>{  Math.floor(props.course.price*fares[chosenCountry])} {currency[chosenCountry]}</h2>
                 {<h2 className='NewCourse_price2'>   {props.course.discountsarr[0].percentage} %</h2>  }
                </div> } 
           
              <div className="NewCourse_StarsHoursPrice">
                <div className="starImgDiv">
                  {  <span>
      {[1, 2, 3, 4, 5].map((value) => (
        <Star
          key={value}
          filled={value <= props.course.rating}
        />
      ))}
           </span>}
                </div>

          <div className='NewCourse_Data_Price_Hours'>

            <h2 className='totalhours'>{props.course.totalHours} Hours</h2>
          </div>

        </div>

        <div className={courseDetails ? 'Large-NewData-NewCourse' : 'nonNewData-NewCourse'}>
          <div class='vl2' />
          <div style={{ display: 'flex', flexDirection: 'row' }}>

            <h3 style={{ fontSize: '20px' }}>Course Content :</h3>
            <h3 style={{ fontSize: '20px', marginLeft: '8rem' }}>Excercises:</h3>

          </div>

          {<div className={courseDetails ? 'NewData-NewCourse' : 'nonNewData-NewCourse'}>

              <div className="Course-subTitles">
                {props.course.subtitlesarr.map((subt,i)=>  <h4 >{i+1}  -  {subt.title}</h4>)}
            </div> 
            <div className="Course-subTitles">
                 {props.course.subtitlesarr.map((subt)=>  <h4 > {subt.hours} Hours</h4>)}
            </div>
            <div class="vl"></div>

              
            <div className="Course-subTitles">
                  {props.course.exercises.map((exer,i)=>  <h4 >Exercise {i+1} </h4>)}
            </div> 
             
        </div> }
          </div>
        </div>
    
      <div className='ViewMoreH55'>

          <h5 onClick={handleCourseDetails}>view details</h5>
          </div>
        <BiDownArrow className="icon" style={{marginRight: '1rem' , transform:'translate(0 ,0.4rem)'}} onClick={handleCourseDetails}></BiDownArrow>
      <button className="openCourseBut" id={props.course.courseID} onClick={handleOpen}
     >Open Course</button>
    </div>  
  )
}

export default CourseDiv;
