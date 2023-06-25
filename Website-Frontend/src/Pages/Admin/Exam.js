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
import { useNavigate } from "react-router-dom";
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import VerifyToken from "../../Components/Authentication/Verify";
import Footer4 from "../../Components/Footer/Footer4";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';


export function Exam(){
 

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


const code=localStorage.getItem("ExamGradeCode");
const total=localStorage.getItem("ExamGradeTotal");
const [gradeN,setGradeN]=useState([]);
const [rankN,setRankN]=useState([]);

const [rank,setRank]=useState([]);
const [grade,setGrade]=useState([]);
const [students,setStudents]=useState([]);
const [id,setID]=useState([]);
const [id2,setId2]=useState([]);
const [fetched,setFetched]=useState(false);
const [showResponse,setShowResponse]=useState(false);




const [open,setOpen]=useState(false);
const [buttonState,setButtonState]=useState(true);
const [Res,setRes]=useState("");
const [showAlert,setAlert]=useState(false);
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

const handleRank=(event)=>{
 const index2=event.target.id;
 var a =event.target.value;
if(a==='A+' || a==='a+'){
  document.getElementById(index2).value="A+";
  id2.push(index2-1000);
  rankN.push("A+");

}
else if(a==='A'|| a==='a'){
  document.getElementById(index2).value="A";
  id2.push(index2-1000);
  rankN.push("A");
}
else if(a==='A-'|| a==='a-'){
  document.getElementById(index2).value="A-";
  id2.push(index2-1000);
  rankN.push("A-");
}
else if(a==='B+'|| a==='b+'){
  document.getElementById(index2).value="B+";
  id2.push(index2-1000);
  rankN.push("B+");
}
else if(a==='B'|| a==='b'){
  document.getElementById(index2).value="B";
  id2.push(index2-1000);
  rankN.push("B");
}
else if(a==='B-'|| a==='b-'){
  document.getElementById(index2).value="B-";
  id2.push(index2-1000);
  rankN.push("B-");
}
else if(a==='C+'|| a==='c+'){
  document.getElementById(index2).value="C+";
  id2.push(index2-1000);
  rankN.push("C+");
}
else if(a==='C'|| a==='c'){
  document.getElementById(index2).value="C";
  id2.push(index2-1000);
  rankN.push("C");
}
else if(a==='C-'|| a==='c-'){
  document.getElementById(index2).value="C-";
  id2.push(index2-1000);
  rankN.push("C-");
}
else if(a==='D'|| a==='d'){
  document.getElementById(index2).value="D";
  id2.push(index2-1000);
  rankN.push("D");
}
else if(a==='F'|| a==='f'){
  document.getElementById(index2).value="F";
  id2.push(index2-1000);
  rankN.push("F");
}
else{
  document.getElementById(index2).value="";

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

  await fetchAddExam(students,code,gradeN,total,rankN,id,id2);

}



  const fetchAddExam = async (a,b,c,d,e,f,g) => {
    const response = await fetch('http://localhost:7000/addExam', {
      method: 'POST',
      headers: {
        'content-type': 'application/json; charset=UTF-8'

      },
      body: JSON.stringify({
        userName: a,
        courseCode:b,
        examGrade:c,
        examTotal:d,
        rank:e,
        index:f,
        index2:g
      })
    })
    const json = await response.json();
    setRes(json);
    setShowResponse(true);

  }

  const fetchStudents = async () => {
    const response = await fetch('http://localhost:7000/getStudentsList2', {
      method: 'POST',
      headers: {
        'content-type': 'application/json; charset=UTF-8'

      },
      body: JSON.stringify({
      code:code,
    
      })
    })
    const json = await response.json();
    setStudents(json.stu);
    setGrade(json.grades);
    setRank(json.rank);
    setFetched(true);
  }

  useEffect(()=>{
    async function getQ(){
       await  fetchStudents();   
      }
     if(code)
      getQ();

      },[students,grade,gradeN,rank,rankN]);   

 




return(
<div>
  <Backdrop open={open} >
    <div className="confirmDivInst">
       <div className="confirmtitleDiv">

            <h2 className="confirmTitleText"> Confirm the Request</h2>
       </div>
       <div className="confirmTextDiv">
          { showAlert && showResponse ?  <Alert severity="info" fontSize="300px">{Res.data}</Alert>
            : showAlert && !showResponse?<Box sx={{ display: 'flex' , margin:'1vw',paddingLeft:'17vw',paddingTop:'2vh'}}>
            <CircularProgress /> </Box> 
            :<p className="confirmTextDiv11Inst">Are you sure you want to add these Grades to the Students ?</p>
        } 
       </div>
       <div className="confirmButtonsDiv">
     {!showAlert &&  <Button variant="outlined" color="error" endIcon={<CheckIcon/>} onClick={handleConfirm}
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
    <div className="RemoveDiv44">
        <div className="FuncHeader1">
        <ModeEditIcon  style={{ fontSize:"4vw", color: "white" ,paddingLeft:'15vw',paddingTop:'12px'}}/>
        <h1 className="FuncHeader1Text">Add Exam Grade</h1>
        </div>
        {!fetched && <Box sx={{ display: 'flex' , margin:'10vw',paddingLeft:'13vw',paddingTop:'3vh'}}>
      <CircularProgress />
    </Box>
}
       {fetched && <div>
       <div className="FuncHeader11">
       <h3 className="textFinalchange"> Course Code:</h3>
          <h2 className="textFinalchange">  {code} </h2>

          <h3 className="textFinalchange"> Exam Total:</h3>
          <h2 className="textFinalchange">  /{total} </h2>

    

       </div>
       <h3 className="QuizOnlyInserted2">'Only Inserted Grades and Ranks gets added to the system' </h3>

       <div className="FuncHeader11">
      <h3 className="FuncHeader11TextM"> Course Students :</h3>
      <h3 className="FuncHeader11TextMM"> total/{total}:</h3>
      <h3 className="FuncHeader11TextMM2"> Grade:</h3>
  
   </div>

   {students.map((s,i) => {
                    return <div className="FuncHeader11">
                      
          <h2 className="FuncHeader11TextStu"> {s.userName}</h2>
         {buttonState && <input type='text' placeholder={'('+grade[i]+')'} className="Input4Exam" id={i}  onChange={handleGrade}/>}
         {buttonState && <input type='text' placeholder={'('+rank[i]+')'} className="Input4Exam" id={1000+i}  onChange={handleRank}/>}
       
                           </div>
   }
                  )}


      
       <div className="rowbutt">
        {buttonState && <Button variant="outlined" color="error" endIcon={<ChevronRightRoundedIcon/>} 
  style={{ color: "teal" ,marginLeft:"20vw",paddingTop:'10px',marginTop:'8px'}} onClick={handleAdd} >
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
export default Exam;