import React from "react";
import './AllCourses.css'
import './TraineeCourse.css'
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import CourseDiv from "../Course/CourseDiv";
import TextField from "@mui/material/TextField";
import { ContentCutOutlined, Subject, Title } from "@mui/icons-material";


export function SearchCourses(){

    const navigate = useNavigate(); 
     

    const [courses,setCourses] = useState([]);
    const [title,setTitle] = useState();
    const [subject,setSubject] = useState();
    const [instName,setinstName] = useState();
     

      const [search,setSearch]=useState("");
      const [checked1,setChecked1]=useState(false);
      const [checked2,setChecked2]=useState(false);
      const [checked3,setChecked3]=useState(false);

      const handleSearch=(event)=>{
        setSearch(event.target.value);
      }
      
      const handleChecked1=(event)=>{
        setChecked1(!checked1);
      }
      const handleChecked2=(event)=>{
        setChecked2(!checked2);
      }
      const handleChecked3=(event)=>{
        setChecked3(!checked3);
      }
      const handleSearchClick=async (event)=>{
        console.log(search);
        if(checked1)
        setSubject(search);
        if(checked2)
          setTitle(search);
        if (checked3)
        setinstName(search);


        console.log(title);
        console.log(subject);
        console.log(instName); 
        console.log("search entered")
        await fetchSerach(instName,title,subject)
       


        
         
      }

      const fetchSerach= async (a,b,c)=>{
        const response = await fetch('http://localhost:7000/api/searchCourseBy',{
          method:"POST",
          headers:{
             "content-type":"application/json; charset=UTF-8"
      
      
          },
          body:JSON.stringify({
             instName:a,
             Title:b,
             Subject:c
      
      
          } )
        });
            const json = await response.json()
            console.log(json);
            setCourses( json);
            console.log(courses);
        }
      
    
   
    








return (
<div className="searchdiv">
<div className="searchTop">
<div className="search">
          <TextField
          id="outlined-basic"
          variant="outlined"
          label="Search"
          onChange={handleSearch}
           />
          </div>
    
          <button className="SButton"  onClick={handleSearchClick}>search</button>
         <div className="SearchBy">
         <label>
        <input
          type="checkbox"
          checked={checked1}
          onChange={handleChecked1}
        />
         By Subject
         </label>
         
         <label>
        <input
          type="checkbox"
          checked={checked2}
          onChange={handleChecked2}
        />
         By Title
         </label>
         <label>
        <input
          type="checkbox"
          checked={checked3}
          onChange={handleChecked3}
        />
         By Instructor
         </label>

         </div>
         </div>
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




    </div>











);





}
export default SearchCourses;



