import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../../Components/NavBar/NavBar";
import Footer from "../../Components/Footer/Footer";
import "./RemoveCourse.css";
import NoteAddRoundedIcon from '@mui/icons-material/NoteAddRounded';
import ExpandCircleDownSharpIcon from '@mui/icons-material/ExpandCircleDownSharp';
import Button from '@mui/material/Button';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import Backdrop from '@mui/material/Backdrop';
import CheckIcon from '@mui/icons-material/Check';
import CancelIcon from '@mui/icons-material/Cancel';
import { useEffect } from "react";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import VerifyToken from "../../Components/Authentication/Verify";
import Footer4 from "../../Components/Footer/Footer4";
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';


export function AddGrade(){


const navigate =useNavigate();


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




const [code,setCode]=useState(''); 

const [Courses,setCourses]=useState([]);


const [open,setOpen]=useState(false);
const [buttonState,setButtonState]=useState(true);
const [res,setRes]=useState();
const [q,setQ]=useState(false);
const [handleInput,setHandleInput]=useState(false);
const [courseBarDone,setCourseBarDone]=useState(false);


const handleCode= (event) =>{
  setCode(event.target.value);

}

const handleAddQuiz=()=>{
  if(code==='')
  setHandleInput(true);

setQ(true);
setOpen(true);
setButtonState(false);

}
const handleAddExam=()=>{
  if(code==='')
  setHandleInput(true);

    setQ(false);
    setOpen(true);
    setButtonState(false);
    
    }
const handlePanel=()=>{
      navigate('/InstructorHome');
      
      
      
    }
const handleCancel=()=>{
setOpen(false);
setButtonState(true);
}


const handleConfirm=async ()=>{
 if(q){
 localStorage.setItem("QuizGradeCode",code);
 navigate('/Instructor/AddGrade/QuizNo');




 }


 else {
 localStorage.setItem("ExamGradeCode",code);
 navigate('/Instructor/AddGrade/ExamNo');


 }
}
const handleInputs=()=>{
  setHandleInput(false);
  setOpen(false);
  setButtonState(true);
  
  }  



const fetchCourses = async (a,b) => {
  const response = await fetch('http://localhost:7000/getCoursesList', {
    method: 'POST',
    headers: {
      'content-type': 'application/json; charset=UTF-8'

    },
    body: JSON.stringify({
  
    })
  })
  const json = await response.json();
  setCourses(json);
  setCourseBarDone(true);
}



useEffect(()=>{
  async function getQ(){
     await  fetchCourses();   
    }

    getQ();

  },[Courses]);   



return(
<div>
  <Backdrop open={open} >
    <div className="confirmDivInst">
       <div className="confirmtitleDiv">

       {handleInput?<h2 className="confirmTitleText"> Invalid Inputs</h2>
            :<h2 className="confirmTitleText"> Confirm the Request</h2>
}       </div>
       <div className="confirmTextDiv">
          { handleInput?<p className="confirmTextDiv11Inst">Please add the required course name!</p>
         :<p className="confirmTextDiv11Inst">Do you want to add ({q?"Quiz":"Exam"})Grades to the Course : ({code})?</p>
}
       </div>
       <div className="confirmButtonsDiv">
     {!handleInput && <Button variant="outlined" color="error" endIcon={<CheckIcon/>} onClick={handleConfirm}
  style={{ color: "teal" ,marginLeft:"10vw",marginTop:'8px'}} >
    Confirm
    </Button>}
   {!handleInput && <Button variant="outlined" color="error" endIcon={<CancelIcon/>} onClick={handleCancel}
  style={{ color: "teal" ,marginLeft:"2.5vw",marginTop:'8px'}} >
    Cancel
    </Button>}
    {handleInput &&  <Button variant="outlined" color="error" endIcon={<ModeEditIcon/>} onClick={handleInputs}
  style={{ color: "teal" ,marginLeft:"15vw",marginTop:'8px'}} >
    Edit data 
    </Button>}



       </div>

    </div>
     </Backdrop>

    



    <NavBar inst={true} title={localStorage.getItem('userName')}/>
<div className="wholeAddGrade">
    <div className="PanelText">
      <ExpandCircleDownSharpIcon onClick={handlePanel} fontSize='large' style={{ color: "white" ,paddingLeft:'39vw',paddingTop:'20px'}}/>
      <h1 className="adminHeaderFinal" >Instructor Panel:</h1>
    </div>
    <div className="AddGradeDiv">
        <div className="FuncHeader1">
        <NoteAddRoundedIcon  style={{ fontSize:"4vw", color: "white" ,paddingLeft:'13vw',paddingTop:'12px'}}/>
        <h1 className="FuncHeader1Text">Add Grade</h1>
        </div>
        
        <div className="FuncHeader11">
          <h3 className="FuncHeader11TextN"> 'Select the Course that you want to add grade to ' </h3>
        </div>
        
        <div className="FuncHeader11">
          <h3 className="propertext"> Course:</h3>
          {!courseBarDone && <Box sx={{ display: 'flex' , margin:'1vw',paddingLeft:'9vw'}}>
      <CircularProgress />
    </Box>
    }
          {courseBarDone && Courses && buttonState &&     
          <FormControl fullWidth>
           <Select   sx={{
          width: '30vw',
         backgroundColor:'aliceblue'
        }}
          value={code}
          onChange={handleCode}
        >
        
                  { Courses.course && Courses.course.map((c) => {
                    return <MenuItem value={c.code}>({c.code}){c.name}</MenuItem>

                  }
                  )}

         
        </Select>
        </FormControl>
  }        </div>


      
       <div className="rowbutt">
        {buttonState && <Button variant="outlined" color="success" endIcon={<ChevronRightRoundedIcon/>} 
  style={{ color: "white" ,marginLeft:"220px",paddingTop:'8px',marginTop:'8px'}} onClick={handleAddQuiz} >
    Quiz
    </Button>}
    {buttonState && <Button variant="outlined" color="success" endIcon={<ChevronRightRoundedIcon/>} 
  style={{ color: "white" ,marginLeft:"20px",paddingTop:'13px',marginTop:'8px'}} onClick={handleAddExam} >
    Exam
    </Button>}

    </div>
    </div>
  



   </div>
    
        <Footer4 Sign={false}/>
</div>




)
}
export default AddGrade;