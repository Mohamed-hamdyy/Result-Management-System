import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import NavBar from "../../Components/NavBar/NavBar";
import Footer from "../../Components/Footer/Footer";
import "./RemoveCourse.css";
import ExpandCircleDownSharpIcon from '@mui/icons-material/ExpandCircleDownSharp';
import Button from '@mui/material/Button';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import Backdrop from '@mui/material/Backdrop';
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';
import CancelIcon from '@mui/icons-material/Cancel';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import VerifyToken from "../../Components/Authentication/Verify";
import Footer4 from "../../Components/Footer/Footer4";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';


export function QuizNo(){
 
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





const code=localStorage.getItem("QuizGradeCode");

const [course,setCourse]=useState();

const [Number,setNumber]=useState(''); 
const [total,setTotal]=useState(''); 
const [handleInput,setHandleInput]=useState(false);

const [open,setOpen]=useState(false);
const [buttonState,setButtonState]=useState(true);
const [Res,setRes]=useState("");
const [showAlert,setAlert]=useState(false);
const [fetched,setFetched]=useState(false);


const handleNo= (event) =>{
  setNumber(event.target.value);

}
const handleTotal=(event)=>{
  setTotal(event.target.value);

}

const handleAdd=()=>{
  if(Number==='' ||total==='')
  setHandleInput(true);
setOpen(true);
setButtonState(false);

}

const handleCancel=()=>{
setOpen(false);
setButtonState(true);
}
const handleConfirm= async(event)=>{
  localStorage.setItem("QuizGradeTotal",total);
  localStorage.setItem("QuizGradeNo",Number);


  navigate('/Instructor/AddGrade/Quiz');


}

const handlePanel=()=>{
  navigate('/InstructorHome');
  
  
  
}
const handleInputs=()=>{
  setHandleInput(false);
  setOpen(false);
  setButtonState(true);
  
  } 


  const fetchCourseInfo = async (a) => {
    const response = await fetch('http://localhost:7000/getCourseQuiz', {
      method: 'POST',
      headers: {
        'content-type': 'application/json; charset=UTF-8'

      },
      body: JSON.stringify({
        courseCode:a

      })
    })
    const json = await response.json();
    setCourse(json);
    setFetched(true);
  }
 

  useEffect(()=>{
    async function getQ(){
       await  fetchCourseInfo(code);   
      }
      
      if(code)
      getQ();

    },[course]);   


return(
<div>
  <Backdrop open={open} >
    <div className="confirmDivInst">
       <div className="confirmtitleDiv">

       {handleInput?<h2 className="confirmTitleText"> Invalid Inputs</h2>
            :<h2 className="confirmTitleText"> Confirm the Request</h2>
}       </div>
       <div className="confirmTextDiv">
          { handleInput?<p className="confirmTextDiv11Inst">Please add the quiz total grade and the quiz number!</p>
            : <p className="confirmTextDiv11Inst">Are you sure you want to add Grades for Quiz {Number} and the total grade is: {total} ?</p>
        } 
       </div>
       <div className="confirmButtonsDiv">
     {!handleInput &&  <Button variant="outlined" color="error" endIcon={<CheckIcon/>} onClick={handleConfirm}
  style={{ color: "teal" ,marginLeft:"10vw",marginTop:'8px'}} >
    Confirm
    </Button>}
   {!handleInput &&  <Button variant="outlined" color="error" endIcon={<CancelIcon/>} onClick={handleCancel}
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
<div className="wholeRemoveCourse3">
    <div className="PanelText">
      <ExpandCircleDownSharpIcon onClick={handlePanel} fontSize='large' style={{ color: "white" ,paddingLeft:'39vw',paddingTop:'20px'}}/>
      <h1 className="adminHeaderFinal">Instructor Panel:</h1>
    </div>
    <div className="RemoveDiv3">
        <div className="FuncHeader1">
        <ModeEditIcon  style={{ fontSize:"4vw", color: "white" ,paddingLeft:'10vw',paddingTop:'12px'}}/>
        <h1 className="FuncHeader1Text">Add Quiz Nomber</h1>
        </div>
 
        {!fetched && <Box sx={{ display: 'flex' , margin:'10vw',paddingLeft:'10vw',paddingTop:'5vh'}}>
      <CircularProgress />
    </Box>
}
       
      {fetched &&  <div>
        <div className="FuncHeader11">
          <h3 className="textFinalchange"> Course Code :</h3>
          <h2 className="textFinalchange">  {code} </h2>

          <h3 className="textFinalchange"> Course hours :</h3>
          {course && <h2 className="textFinalchange"> {course.c.hours} </h2>}

        </div><div className="FuncHeader11">
            <h3 className="textFinalchange"> Course Name :</h3>
            {course && <h2 className="textFinalchange"> {course.c.name} </h2>}


          </div><div className="FuncHeader11">
            <h3 className="FuncHeader11TextM"> Course Weight Distribution :</h3>

          </div><div className="FuncHeader11">
           {course && course.c.quizesWeight && <h2 className="FuncHeader11TextQ">Quizes: {course.c.quizesWeight}</h2>}
            {course && course.c.ExamsWeight && <h2 className="FuncHeader11TextQ">Exams: {course.c.ExamsWeight}</h2>}
            {course && course.c.AssignWeight && <h2 className="FuncHeader11TextQ">Assignments: {course.c.AssignWeight}</h2>}
            {course && !course.c.AssignWeight && <h2 className="FuncHeader11TextQ"> (the course Weight distribution has not set by the admins) </h2>}


          </div><div className="FuncHeader11">


            <h3 className="textFinalchange"> Quizes No. :</h3>
            {course && buttonState && <Select className="dropDown"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={Number}
              label="Quiz"
              onChange={handleNo}
            >


              {course.arr.map((quiz, i) => {
                return <MenuItem value={i + 1}>Quiz {i + 1}</MenuItem>;

              }
              )}




            </Select>}
            <h3 className="textFinalchange"> Quizes total: </h3>
            <input type='text' placeholder='...........' className="Input2" onChange={handleTotal} />



          </div><div className="rowbutt">
            {buttonState && <Button variant="outlined" color="error" endIcon={<ChevronRightRoundedIcon />}
              style={{ color: "teal", marginLeft: "16vw", paddingTop: '12px', marginTop: '14px' }} onClick={handleAdd}>
              Add
            </Button>}


          </div>
          </div>
}
    </div>
              
  



   </div>
    
        <Footer4 Sign={false}/>
</div>




)
}
export default QuizNo;