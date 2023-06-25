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
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import VerifyToken from "../../Components/Authentication/Verify";
import Footer3 from "../../Components/Footer/Footer3";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';



export function AddWeight(){
 
const navigate =useNavigate();
const [first,setFirst]=useState(0);
const begin=async()=>{
    if(localStorage.getItem("token")){
            var user=await VerifyToken(localStorage.getItem("token"),"Admin");  
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


const code=localStorage.getItem("WeightCode");


const [course,setCourse]=useState();

const [quiz,setQuiz]=useState(''); 
const [exam,setExam]=useState(''); 
const [assign,setAssign]=useState(''); 
const [handleInput,setHandleInput]=useState(false);
const [fetched,setFetched]=useState(false);

const [open,setOpen]=useState(false);
const [buttonState,setButtonState]=useState(true);
const [Res,setRes]=useState("");
const [showAlert,setAlert]=useState(false);
const [showResponse,setShowResponse]=useState(false);



const handleQuiz= (event) =>{
  setQuiz(event.target.value);

}
const handleExam=(event)=>{
  setExam(event.target.value);

}
const handleAssign=(event)=>{
    setAssign(event.target.value);
  
  }
const handleAdd=()=>{
if(quiz==='' || exam==='' || assign==='')
   setHandleInput(true);
else if(parseInt(quiz)+parseInt(exam)+parseInt(assign)!=100)
   setHandleInput(true);  


setOpen(true);
setButtonState(false);

}

const handleCancel=()=>{
setOpen(false);
setButtonState(true);
}
const handleConfirm= async(event)=>{
  setAlert(true);

await fetchAddWeight(code,quiz,exam,assign);



}
const handleClose=()=>{
    navigate('/adminHome');
      
      
      
    }

const handlePanel=()=>{
  navigate('/adminHome');
  
  
  
}
const handleInputs=()=>{
  setHandleInput(false);
  setOpen(false);
  setButtonState(true);
  
  }



const fetchAddWeight = async (a,b,c,d) => {
    const response = await fetch('http://localhost:7000/addWeight', {
      method: 'POST',
      headers: {
        'content-type': 'application/json; charset=UTF-8'

      },
      body: JSON.stringify({
        courseCode:a,
        quizWeight:b,
        examWeight:c,
        assignWeight:d       

      })
    })
    const json = await response.json();
    setRes(json);
    setShowResponse(true);

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
    <div className="confirmDivFinal">
       <div className="confirmtitleDiv">

       {handleInput?<h2 className="confirmTitleText"> Invalid Inputs</h2>
            :<h2 className="confirmTitleText"> Confirm the Request</h2>
}       </div>
       <div className="confirmTextDiv">
          { showAlert && showResponse ?  <Alert severity="info" fontSize="300px">{Res.data}</Alert>
           : showAlert && !showResponse?<Box sx={{ display: 'flex' , margin:'1vw',paddingLeft:'17vw',paddingTop:'2vh'}}>
           <CircularProgress /> </Box>
          :handleInput?<p className="confirmTextDiv11">Please add the required percentages
           and make sure that the total weights percentage is 100!</p>
           :<p className="confirmTextDiv11">Are you sure you want to add these weight Distribution to the Course?</p>
        } 
       </div>
       <div className="confirmButtonsDiv">
     {!showAlert && !handleInput && <Button variant="contained" color="success" endIcon={<CheckIcon/>} onClick={handleConfirm}
  style={{ color: "white" ,marginLeft:"10vw",marginTop:'8px'}} >
    Confirm
    </Button>}
   {!showAlert && !handleInput && <Button variant="contained" color="success" endIcon={<CancelIcon/>} onClick={handleCancel}
  style={{ color: "white" ,marginLeft:"2.5vw",marginTop:'8px'}} >
    Cancel
    </Button>}
    {showAlert &&  showResponse && <Button variant="contained" color="success" endIcon={<KeyboardReturnIcon/>} onClick={handleClose}
  style={{ color: "white" ,marginLeft:"15vw",marginTop:'8px'}} >
    Return
    </Button>}
    {handleInput &&  <Button variant="contained" color="success" endIcon={<ModeEditIcon/>} onClick={handleInputs}
  style={{ color: "white" ,marginLeft:"15vw",marginTop:'8px'}} >
    Edit data 
    </Button>}


       </div>

    </div>
     </Backdrop>


    <NavBar admin={true} title={localStorage.getItem('userName')}/>
<div className="wholeRemoveCourse33">
    <div className="PanelTextFinal">
      <ExpandCircleDownSharpIcon onClick={handlePanel} fontSize='large' style={{ color: "white" ,paddingLeft:'38vw',paddingTop:'20px'}}/>
      <h1 className="adminHeaderFinal">Admin Panel:</h1>
    </div>
    <div className="RemoveDiv33">
        <div className="FuncHeader1">
        <ModeEditIcon  style={{ fontSize:"4vw", color: "white" ,paddingLeft:'10vw',paddingTop:'12px'}}/>
        <h1 className="FuncHeader1Text">Add Course Weight</h1>
        </div>
        {!fetched && <Box sx={{ display: 'flex' , margin:'10vw',paddingLeft:'10vw',paddingTop:'5vh'}}>
      <CircularProgress  />
    </Box>
}
       {fetched &&<div>      
        <div className="FuncHeader11">
          <h3 className="textFinalchange"> Course Code :</h3>
          <h2 className="textFinalchange">  {code} </h2>

          <h3 className="textFinalchange"> Course hours :</h3>
          {course && <h2 className="textFinalchange"> {course.c.hours} </h2>}
        
        </div>
   <div className="FuncHeader11">
      <h3 className="textFinalchange"> Course Name :</h3>
         {course && <h2 className="textFinalchange"> {course.c.name} </h2>}


   </div>
   <div className="FuncHeader11">
      <h3 className="FuncHeader11TextM"> Course Weight Distribution %:(Current Values)</h3>
  
   </div>
        <div className="FuncHeader11">
        
         <h3 className="FuncHeader11Text"> Quizes: </h3>
         {course && <input type='text' placeholder={'('+course.c.quizesWeight+')'} className="Input2" onChange={handleQuiz} />}
         <h3 className="FuncHeader11TextExam"> Exams: </h3>
         {course && <input type='text' placeholder={'('+course.c.ExamsWeight+')'} className="Input2" onChange={handleExam} />}

        </div>

        <div className="FuncHeader11">
         <h3 className="FuncHeader11Text"> Assignments: </h3>
         {course && <input type='text' placeholder={'('+course.c.AssignWeight+')'} className="Input2" onChange={handleAssign} />}
        </div>



      
       <div className="rowbutt">
        {buttonState && <Button variant="contained" color="success" endIcon={<ChevronRightRoundedIcon/>} 
  style={{ color: "white" ,marginLeft:"260px",paddingTop:'8px',marginTop:'14px'}} onClick={handleAdd} >
    update
    </Button>}
   

    </div>
    </div>
    }
    </div>
  



   </div>
    
        <Footer3 Sign={false}/>
</div>




)
}
export default AddWeight;