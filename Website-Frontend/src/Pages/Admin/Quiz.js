import React from "react";
import { useState } from "react";
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
import { Select } from "@mui/material";
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from "react-router-dom";
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import VerifyToken from "../../Components/Authentication/Verify";
import Footer4 from "../../Components/Footer/Footer4";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';


export function Quiz(){
 

const navigate=useNavigate();    


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
const total=localStorage.getItem("QuizGradeTotal");
const No=localStorage.getItem("QuizGradeNo");
const [gradeN,setGradeN]=useState([]);



const [grade,setGrade]=useState([]);
const [students,setStudents]=useState([]);
const [id,setID]=useState([]);





const [open,setOpen]=useState(false);
const [buttonState,setButtonState]=useState(true);
const [Res,setRes]=useState("");
const [showAlert,setAlert]=useState(false);
const [fetched,setFetched]=useState(false);
const [showResponse,setShowResponse]=useState(false);
const n=parseInt(total);


const handleGrade= (event) =>{
  const index=event.target.id;
   if(event.target.value >n){
     document.getElementById(index).value="";
   }
   else{
    id.push(index);
    gradeN.push(event.target.value);
   }
  }




const handleAdd=()=>{
setOpen(true);
setButtonState(false);

}

const handleCancel=()=>{
setOpen(false);
setButtonState(true);
}

const handleClose=()=>{
navigate('/InstructorHome');
  
  
  
}
const handlePanel=()=>{
    navigate('/InstructorHome');
    
    
    
  }

const handleConfirm= async()=>{
  setAlert(true);

  await fetchAddQuiz(students,code,gradeN,total,No,id);

}



  const fetchAddQuiz = async (a,b,c,d,e,f) => {
    const response = await fetch('http://localhost:7000/addQuiz', {
      method: 'POST',
      headers: {
        'content-type': 'application/json; charset=UTF-8'

      },
      body: JSON.stringify({
        userName: a,
        courseCode:b,
        quizGrade:c,
        quizTotal:d,
        Number:e,
        index:f

      })
    })
    const json = await response.json();
    setRes(json);
    setShowResponse(true);

  }

  const fetchStudents = async () => {
    const response = await fetch('http://localhost:7000/getStudentsList', {
      method: 'POST',
      headers: {
        'content-type': 'application/json; charset=UTF-8'

      },
      body: JSON.stringify({
      code:code,
      nomber:No
    
      })
    })
    const json = await response.json();
    setStudents(json.stu);
    setGrade(json.grades);
    setFetched(true);
  }

  useEffect(()=>{
    async function getQ(){
       await  fetchStudents();   
      }

       if(code)
       getQ();



      },[students,grade,gradeN]);   

 




return(
<div>
  <Backdrop open={open} >
    <div className="confirmDivInst">
       <div className="confirmtitleDiv">

            <h2 className="confirmTitleText"> Confirm the Request</h2>
       </div>
       <div className="confirmTextDiv">
          { showAlert && showResponse ?  <Alert severity="info" fontSize="300px">{Res.data}</Alert>
          :showAlert && !showResponse?<Box sx={{ display: 'flex' , margin:'1vw',paddingLeft:'17vw',paddingTop:'2vh'}}>
          <CircularProgress /> </Box>
            : <p className="confirmTextDiv11Inst">Are you sure you want to Add these Grades to the Students ?</p>
        } 
       </div>
       <div className="confirmButtonsDiv">
     {!showAlert && <Button variant="outlined" color="error" endIcon={<CheckIcon/>} onClick={handleConfirm}
  style={{ color: "teal" ,marginLeft:"10vw",marginTop:'8px'}} >
    Confirm
    </Button>}
   {!showAlert &&  <Button variant="outlined" color="error" endIcon={<CancelIcon/>} onClick={handleCancel}
  style={{ color: "teal" ,marginLeft:"2.5vw",marginTop:'8px'}} >
    Cancel
    </Button>}
    {showAlert && showResponse && <Button variant="outlined" color="error" endIcon={<KeyboardReturnIcon/>} onClick={handleClose}
  style={{ color: "teal" ,marginLeft:"15vw",marginTop:'8px'}} >
    Return
    </Button>}



       </div>

    </div>
     </Backdrop>


    <NavBar inst={true} title={localStorage.getItem('userName')}/>
<div className="wholeRemoveCourse4">
    <div className="PanelText">
      <ExpandCircleDownSharpIcon onClick={handlePanel} fontSize='large' style={{ color: "white" ,paddingLeft:'39vw',paddingTop:'20px'}}/>
      <h1 className="adminHeaderFinal">Instructor Panel:</h1>
    </div>
    <div className="RemoveDiv4">
        <div className="FuncHeader1">
        <ModeEditIcon  style={{ fontSize:"4vw", color: "white" ,paddingLeft:'10vw',paddingTop:'12px'}}/>
        <h1 className="FuncHeader1Text">Add Quiz Grade</h1>
        </div>


        {!fetched && <Box sx={{ display: 'flex' , margin:'10vw',paddingLeft:'10vw',paddingTop:'5vh'}}>
      <CircularProgress />
    </Box>
}
       {fetched &&<div>
       <div className="FuncHeader11">
       <h3 className="textFinalchange"> Course Code:  {code}</h3>

          <h3 className="textFinalchange"> Quiz Total: /{total}</h3>

          <h3 className="textFinalchange"> Quiz No: {No}</h3>

       </div>
       <h3 className="QuizOnlyInserted">'Only Inserted Grades gets added to the system' </h3>

       <div className="FuncHeader11">
      <h3 className="FuncHeader11TextM"> Course Students :</h3>
      <h3 className="FuncHeader11TextMM"> Grades :(current)</h3>
  
   </div>
  
   {students.map((s,i) => {
                    return <div className="FuncHeader11">
                      
          <h2 className="FuncHeader11TextStu"> {s.userName}</h2>
         {buttonState && <input type='text' placeholder={'('+grade[i]+')'} className="Input4" id={i}  onChange={handleGrade}/>}

                           </div>
   }
                  )}


      
       <div className="rowbutt">
        {buttonState && <Button variant="outlined" color="error" endIcon={<ChevronRightRoundedIcon/>} 
  style={{ color: "teal" ,marginLeft:"16vw",paddingTop:'8px',marginTop:'8px'}} onClick={handleAdd} >
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
export default Quiz;