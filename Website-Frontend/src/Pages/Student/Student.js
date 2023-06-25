import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import NavBar from "../../Components/NavBar/NavBar";
import { useNavigate } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import CourseDiv from "../../Components/CourseDiv/CourseDiv";
import ExpandCircleDownSharpIcon from '@mui/icons-material/ExpandCircleDownSharp';
import "./Student.css";
import { VerifyToken } from "../../Components/Authentication/Verify";
import Footer2 from "../../Components/Footer/Footer2";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';


export function Student(){

  const navigate=useNavigate();
  const [Courses,setCourses]=useState([]);
 const[fetched,setFetched]=useState(false);

const handleNav=()=>{
navigate('/Login');

}


 const [first,setFirst]=useState(0);
const begin=async()=>{
    if(localStorage.getItem("token")){
            var user=await VerifyToken(localStorage.getItem("token"),"Student");  
            if (!user){         
                alert("You have to login as a Student first");
                window.location.href='/Login';

              }
    }else{
        alert("You have to Login first");
        window.location.href='/Login';
      }
}
if(first===0){
    begin();
    setFirst(1)
}




const fetchCourses = async (a) => {
    const response = await fetch('http://localhost:7000/getCourses', {
      method: 'POST',
      headers: {
        'content-type': 'application/json; charset=UTF-8'

      },
      body: JSON.stringify({
        userName: a,

      })
    })
    const json = await response.json();
     setCourses(json)
     setFetched(true);

  }
  useEffect(()=>{
    async function getCourses(){
      fetchCourses(window.localStorage.getItem('userName'));
   
      }
      if( localStorage.getItem('role')==='Student'){
      getCourses();
      }
   
      },[Courses]);   
   
return(
<div>
    <NavBar student={true} title={window.localStorage.getItem('userName')}/>
<div className="Courses">
    <div className="header">
    <ExpandCircleDownSharpIcon fontSize='large' style={{ color: "#042A2B" ,paddingLeft:'30px',paddingTop:'33px'}}/>

     <h2 className="studentTitle">Your Currently registered Courses:</h2>  
    </div> 
    
    {!fetched && <Box sx={{ display: 'flex' , margin:'10vw',paddingLeft:'35vw'}}>
      <CircularProgress />
    </Box>
}
    {fetched &&  <ul>
            {
                  Courses.map(course => {
                    return <CourseDiv course={course} />
                  }
                  )
                }
          </ul>

              }

       {Courses.length===0?<h2 className="studentTitle2">You Currently do not have registered Courses yet </h2>
       :<h2 className="studentTitle"></h2>}       

</div>
    
        <Footer2 SignOut={true}/>
</div>





)
}
export default Student;