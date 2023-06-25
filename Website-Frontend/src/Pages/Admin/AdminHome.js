import React from "react";
import { useNavigate } from "react-router-dom";
import"./AdminHome.css";
import { useState } from "react";
import NavBar from "../../Components/NavBar/NavBar"; 
import Footer from "../../Components/Footer/Footer";
import Grid from '@mui/material/Grid';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import DeleteIcon from '@mui/icons-material/Delete';
import NoteAddRoundedIcon from '@mui/icons-material/NoteAddRounded';
import PersonAddAlt1RoundedIcon from '@mui/icons-material/PersonAddAlt1Rounded';
import Button from '@mui/material/Button';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import ExpandCircleDownSharpIcon from '@mui/icons-material/ExpandCircleDownSharp';
import PercentIcon from '@mui/icons-material/Percent';
import VerifyToken from "../../Components/Authentication/Verify";
import Footer3 from "../../Components/Footer/Footer3";

export function AdminHome(){
const navigate = useNavigate();

const [first,setFirst]=useState(0);
const begin=async()=>{
    if(localStorage.getItem("token")){
            var user=await VerifyToken(localStorage.getItem("token"),"Admin");  
            if (!user){         
                alert("You have to login as an Admin first")
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

const handleCourse=()=>{
navigate('/admin/addCourse');


}
const handleAdmin=()=>{
  navigate('/admin/addAdmin');
  
  
  }

  const handleRemove=()=>{
navigate('/admin/RemoveCourse');

  }

  const handleAddWeight=()=>{
navigate('/admin/AddWeight');




  }





return(
<div>
<NavBar admin={true} title={localStorage.getItem('userName')}/>
<div className="wholeAdminFinal">
    <div className="PanelTextFinal">
      <ExpandCircleDownSharpIcon fontSize='large' style={{ color: "white" ,paddingLeft:'38vw',paddingTop:'20px'}}/>
      <h1 className="adminHeaderFinal">Admin Panel:</h1>
    </div>
    <div className="Panel">
    <Grid container spacing={7}>
        <Grid item xs={5}>
         <div className="PanelDivFinal">
            <div className="divRow">
               <AddCircleRoundedIcon fontSize='large' style={{ fontSize:"4vw", color: "White" ,paddingLeft:'6.5vw',paddingTop:'12px'}}/>
            </div>
  <Button variant="contained" color="success" endIcon={<ChevronRightRoundedIcon/>} onClick={handleCourse}
  style={{ color: "white" ,marginLeft:"50px",paddingTop:'10px',marginTop:'8px'}} >
      add Course
    </Button>

         </div>
        </Grid>
        <Grid item xs={5}>
        <div className="PanelDivFinal">
            <div className="divRow">
               <DeleteIcon fontSize='large' style={{fontSize:"4vw", color: "White" ,paddingLeft:'6.5vw',paddingTop:'12px'}}/>
            </div>
  <Button variant="contained" color="success" endIcon={<ChevronRightRoundedIcon/>} onClick={handleRemove}
  style={{ color: "white" ,marginLeft:"35px",paddingTop:'10px',marginTop:'8px'}} >
    Remove Courses
    </Button>

         </div>
             </Grid>
        <Grid item xs={5}>
        <div className="PanelDivFinal">
            <div className="divRow">
               <PercentIcon fontSize='large' style={{ fontSize:"4vw",color: "White" ,paddingLeft:'6.5vw',paddingTop:'12px'}}/>
            </div>
  <Button variant="contained" color="success" endIcon={<ChevronRightRoundedIcon/>} onClick={handleAddWeight} 
  style={{ color: "white" ,marginLeft:"50px",paddingTop:'10px',marginTop:'8px'}} >
    add Weight
    </Button>

         </div>
            </Grid>
        <Grid item xs={5}>
        <div className="PanelDivFinal">
            <div className="divRow">
               <PersonAddAlt1RoundedIcon fontSize='large' style={{fontSize:"4vw", color: "White" ,paddingLeft:'6.5vw',paddingTop:'12px'}}/>
            </div>
  <Button variant="contained" color="success" endIcon={<ChevronRightRoundedIcon/>} onClick={handleAdmin} 
  style={{ color: "white" ,marginLeft:"59px",paddingTop:'10px',marginTop:'8px'}} >
    add User
    </Button>

         </div>     
          </Grid>
      </Grid>



    </div>


</div>
    
        <Footer3 SignOut={true}/>
</div>





)
}
export default AdminHome;