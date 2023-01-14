import CourseDiv from "../Course/CourseDiv";
// import { Slider } from "@mui/material";
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';
import TextField from "@mui/material/TextField";
import { useState, useEffect } from "react";
import {useNavigate} from 'react-router-dom';
import './AllCourses.css'
import { SettingsRemoteSharp, Title } from "@mui/icons-material";
import FilterCourses from "./FilterCourses";


export function AllCourses(){
    const [courses,setCourses] = useState([]);
    const navigate = useNavigate(); 
     
    
    ////////////////get the user country from tokenn
    /////////call handle country from api to get the Country Number 
    

    useEffect(()=>{
        const api="http://localhost:7000"
        const fetchCourses = async ()=>{
            const response = await fetch('http://localhost:7000/api/getcoursesembeddedall',{
            method:"POST",
            headers:{
               "content-type":"application/json; charset=UTF-8"
        
        
            }
           
            });
            const json = await response.json()

            if(response.ok){
                setCourses(json)
            }


        }
        fetchCourses();
     },[])

     const handleSearchClick=()=>{
       navigate('/SearchCourse');   

     }


    return(
        <div>
        

        <div >

          <button className="SearchB" onClick={handleSearchClick}>Search</button> 
        </div>
         

        <div className='AllCourses'>
            <h1 className="heading">Our Courses</h1>
            <div>
              <ul>
                {
                  courses.map(course=>{
                    return <CourseDiv course={course} countryNumber={0} inst={false}/>
                  }
                  )
                }
              </ul>

            
            </div>
            <div>
              <FilterCourses/>
            </div>
            
            </div>

       


          
    </div>
       );
}
export default AllCourses;