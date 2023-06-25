import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import"./InstructorHome.css";
import { useState } from "react";
import {VerifyToken} from "../../Components/Authentication/Verify";
import NavBar from "../../Components/NavBar/NavBar"; 
import Footer from "../../Components/Footer/Footer";
import Grid from '@mui/material/Grid';
import NoteAddRoundedIcon from '@mui/icons-material/NoteAddRounded';
import Button from '@mui/material/Button';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import ExpandCircleDownSharpIcon from '@mui/icons-material/ExpandCircleDownSharp';
import Footer4 from "../../Components/Footer/Footer4";


export function InstructorHome(){
const navigate = useNavigate();


const [first,setFirst]=useState(0);
const begin=async()=>{
    if(localStorage.getItem("token")){
            var user=await VerifyToken(localStorage.getItem("token"),"Instructor");  
            if (!user){         
                alert("You have to login as an Instructor first")
                window.location.href='/Login';
              }
    }else{
        alert("You have to Login first")
        window.location.href='/Login';
      }
}
if(first===0){
    begin();
    setFirst(1)
}


 

  const handleAddGrade=()=>{
navigate('/Instructor/AddGrade');




  }
 




return(
<div>
<NavBar inst={true} title={localStorage.getItem('userName')}/>
<div className="wholeInstructor">
    <div className="PanelText">
      <ExpandCircleDownSharpIcon fontSize='large' style={{ color: "white" ,paddingLeft:'39vw',paddingTop:'20px'}}/>
      <h1 className="adminHeaderFinal">Instructor Panel:</h1>
    </div>
    <div className="Panel2">
    <Grid container spacing={3}>
      
       
        <Grid item xs={5}>
        <div className="PanelDiv2Final">
            <div className="divRow">
               <NoteAddRoundedIcon fontSize='large' style={{ fontSize:"5vw",color: "white" ,paddingLeft:'7vw',paddingTop:'12px'}}/>
            </div>
  <Button variant="outlined" color="error" endIcon={<ChevronRightRoundedIcon/>} onClick={handleAddGrade} 
  style={{ color: "white" ,marginLeft:"80px",paddingTop:'10px',marginTop:'8px'}} >
    add grade
    </Button>

         </div>
            </Grid>
     
      </Grid>



    </div>


</div>
    
        <Footer4 SignOut={true}/>
</div>





)
}
export default InstructorHome;