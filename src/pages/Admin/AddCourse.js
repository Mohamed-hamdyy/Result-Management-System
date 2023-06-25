import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import NavBar from "../../Components/NavBar/NavBar";
import Footer from "../../Components/Footer/Footer";
import "./AddCourse.css";
import ExpandCircleDownSharpIcon from '@mui/icons-material/ExpandCircleDownSharp';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import Button from '@mui/material/Button';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import Backdrop from '@mui/material/Backdrop';
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';
import CancelIcon from '@mui/icons-material/Cancel';
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import VerifyToken from "../../Components/Authentication/Verify";
import Footer3 from "../../Components/Footer/Footer3";
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';



export function AddCourse(){


  const navigate =useNavigate();


  const [first,setFirst]=useState(0);
  const begin=async()=>{
      if(localStorage.getItem("token")){
              var user=await VerifyToken(localStorage.getItem("token"),"Admin");  
              if (!user){         
                  alert("You have to login as an Admin first")
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






const [user,setUser]=useState('');
const [Code,setCode]=useState('');

const [Courses,setCourses]=useState([]);


const [open,setOpen]=useState(false);
const [buttonState,setButtonState]=useState(true);
const [res,setRes]=useState();
const [showAlert,setAlert]=useState(false);
const [handleInput,setHandleInput]=useState(false);
const [courseBarDone,setCourseBarDone]=useState(false);
const [showResponse,setShowResponse]=useState(false);


const handleUserName= (event) =>{
    setUser(event.target.value);

}
const handleChange= (event) =>{
  setCode(event.target.value);

}

const handleAdd=()=>{
  if(user==='' || Code==='')
   setHandleInput(true);
setOpen(true);
setButtonState(false);

}
const handleCancel=()=>{
setOpen(false);
setButtonState(true);

}
const handlePanel=()=>{
  navigate('/adminHome');
  
  
  
}
const handleConfirm=async ()=>{
  setAlert(true);
  await fetchAddCourse(user,Code);


}
const handleClose=()=>{
  setOpen(false);
  setButtonState(true);
 setAlert(false);
 setShowResponse(false);



}
const handleInputs=()=>{
setHandleInput(false);
setOpen(false);
setButtonState(true);

}

  const fetchAddCourse = async (a,b) => {
    const response = await fetch('http://localhost:7000/addCourse', {
      method: 'POST',
      headers: {
        'content-type': 'application/json; charset=UTF-8'

      },
      body: JSON.stringify({
        userName: a,
        courseCode:b,
  

      })
    })
    const json = await response.json();
    setRes(json);
    setShowResponse(true);
    
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
    <div className="confirmDivFinal">
       <div className="confirmtitleDiv">

            {handleInput?<h2 className="confirmTitleText"> Invalid Inputs</h2>
            :<h2 className="confirmTitleText"> Confirm the Request</h2>
}
       </div>
       <div className="confirmTextDiv">
          {showAlert && !showResponse?<Box sx={{ display: 'flex' , margin:'1vw',paddingLeft:'17vw',paddingTop:'2vh'}}>
          <CircularProgress /> </Box> 
          :  showAlert && showResponse ?  <Alert severity="info" fontSize="300px">{res && res.Added ?"Course successfully added to the student ":
          "Course is already registered to the Student" }</Alert>
           :handleInput?<p className="confirmTextDiv11">Please provide the course name and the student username!</p>
           :<p className="confirmTextDiv11">Do you want to add the chosen code:({Code}) to the user: ({user})?</p>

        } 
       </div>
       <div className="confirmButtonsDiv">
     {!showAlert && !handleInput &&  <Button variant="contained" color="success" endIcon={<CheckIcon/>} onClick={handleConfirm}
  style={{ color: "white" ,marginLeft:"10vw",marginTop:'8px'}} >
    Confirm
    </Button>}
   {!showAlert && !handleInput &&  <Button variant="contained" color="success" endIcon={<CancelIcon/>} onClick={handleCancel}
  style={{ color: "white" ,marginLeft:"2.5vw",marginTop:'8px'}} >
    Cancel
    </Button>}
    {showAlert && showResponse && <Button variant="contained" color="success" endIcon={<CancelPresentationIcon/>} onClick={handleClose}
  style={{ color: "white" ,marginLeft:"15vw",marginTop:'8px'}} >
    Close 
    </Button>}
    {handleInput &&  <Button variant="contained" color="success" endIcon={<ModeEditIcon/>} onClick={handleInputs}
  style={{ color: "white" ,marginLeft:"15vw",marginTop:'8px'}} >
    Edit data 
    </Button>}

       </div>

    </div>
     </Backdrop>


    <NavBar admin={true} title={localStorage.getItem('userName')}/>
<div className="wholeAdminFinal">
    <div className="PanelTextFinal">
      <ExpandCircleDownSharpIcon onClick={handlePanel} fontSize='large' style={{ color: "white" ,paddingLeft:'38vw',paddingTop:'20px'}}/>
      <h1 className="adminHeaderFinal">Admin Panel:</h1>
    </div>
    <div className="addCourseDiv">
        <div className="FuncHeader1">
        <AddCircleRoundedIcon  style={{ fontSize:"4vw", color: "white" ,paddingLeft:'9vw',paddingTop:'12px'}}/>
        <h1 className="FuncHeader1Text">Add Course to Student</h1>
        </div>
        
        <div className="FuncHeader11">
          <h3 className="FuncHeader11Text"> Student UserName : </h3>
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
          value={user}
          onChange={handleUserName}
        >
        
                  { Courses.student && Courses.student.map((s) => {
                    return <MenuItem value={s.userName}>{s.userName}</MenuItem>

                  }
                  )}

         
        </Select>
        </FormControl>
  }

        </div>
        
        <div className="FuncHeader11">
          <h3 className="FuncHeader11Text"> Course: </h3>
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
          value={Code}
          onChange={handleChange}
        >
        
                  { Courses.course && Courses.course.map((c) => {
                    return <MenuItem value={c.code}>({c.code}){c.name}</MenuItem>

                  }
                  )}

         
        </Select>
        </FormControl>
  }

        </div>

        
       
        {buttonState && <Button variant="contained" color="success" endIcon={<ChevronRightRoundedIcon/>} 
  style={{ color: "white" ,marginLeft:"280px",paddingTop:'10px',marginTop:'20px'}} onClick={handleAdd} >
    add
    </Button>}



    </div>
  



   </div>
    
        <Footer3 Sign={false}/>
</div>




)
}
export default AddCourse;