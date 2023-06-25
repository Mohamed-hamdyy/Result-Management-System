import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import NavBar from "../../Components/NavBar/NavBar";
import Button from '@mui/material/Button';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import Backdrop from '@mui/material/Backdrop';
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';
import CancelIcon from '@mui/icons-material/Cancel';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
 
export function Register(){

    const navigate =useNavigate();
const [user,setUser]=useState("");   
const [pass,setPass]=useState("");    
const [email,setEmail]=useState("");    
const [phone,setPhone]=useState("");    

const [open,setOpen]=useState(false);
const [buttonState,setButtonState]=useState(true);
const [Res,setRes]=useState("");
const [showAlert,setAlert]=useState(false); 
const [handleInput,setHandleInput]=useState(false); 
const [showResponse,setShowResponse]=useState(false);




 const handleUserName=(event)=>{
  setUser(event.target.value);


 }
 const handlePassword=(event)=>{
    setPass(event.target.value);
  
  
   }
   const handleEmail=(event)=>{
    setEmail(event.target.value);
  
  
   }
   const handlePhone=(event)=>{
    setPhone(event.target.value);
  
  
   }
   const handleReg=()=>{
    if(user==='' || pass===''|| email==='' || phone==='' )
       setHandleInput(true);
    setOpen(true);
    setButtonState(false);
    
    }
 
    const handleCancel=()=>{
    setOpen(false);
    setButtonState(true);
    }
    const handleEdit=()=>{
        setOpen(false);
        setButtonState(true);
        setAlert(false);
        setShowResponse(false);
    }
    const handleConfirm=async ()=>{
      setAlert(true);
     await fetchRegister(user,pass,email,phone);
    
    
    }
    const handleContinue=()=>{
      navigate('/Login');
    
    
    }
    
      const fetchRegister = async (a,b,c,d) => {
        const response = await fetch('http://localhost:7000/createStudent', {
          method: 'POST',
          headers: {
            'content-type': 'application/json; charset=UTF-8'
    
          },
          body: JSON.stringify({
            userName: a,
            password:b,
            email:c,
            phoneNumber:d
          
    
          })
        })
        const json = await response.json();
        setRes(json);
        setShowResponse(true);
      
      }
      const handleInputs=()=>{
        setHandleInput(false);
        setOpen(false);
        
        } 


return(
<div>  <Backdrop open={open} >
    <div className="confirmDivLogin">
       <div className="confirmtitleDiv">

       {handleInput?<h2 className="confirmTitleText"> Invalid Inputs</h2>
            :<h2 className="confirmTitleText"> Confirm Request</h2>
}       </div>
       <div className="confirmTextDiv">
          {showAlert && !showResponse?<Box sx={{ display: 'flex' , margin:'1vw',paddingLeft:'17vw',paddingTop:'2vh'}}>
          <CircularProgress /> </Box> 
           : showAlert && showResponse ?  <Alert severity="info" fontSize="300px">
            {Res && Res.created ?"Account successfully registered, continue to Login with your data":
            "User Name have been taken, try using another one" }</Alert>
            :handleInput?<p className="confirmTextDiv11Inst">Please enter all the required Inputs to set up your account!</p> 
            :<p className="confirmTextDiv11Inst">Are you sure you want to use this data to set up your account ?</p>
        } 
       </div>
       <div className="confirmButtonsDiv">
     {!showAlert &&  !handleInput &&  <Button variant="outlined" color="error" endIcon={<CheckIcon/>} onClick={handleConfirm}
  style={{ color: "teal" ,marginLeft:"10vw",marginTop:'8px'}} >
    Confirm
    </Button>}
   {!showAlert && !handleInput && <Button variant="outlined" color="error" endIcon={<CancelIcon/>} onClick={handleCancel}
  style={{ color: "teal" ,marginLeft:"2.5vw",marginTop:'8px'}} >
    Cancel
    </Button>}
    {showAlert && showResponse &&  !handleInput && Res && Res.created &&  <Button variant="outlined" color="error" endIcon={<ChevronRightRoundedIcon/>} onClick={handleContinue}
  style={{ color: "teal" ,marginLeft:"15vw",marginTop:'8px'}} >
    Continue 
    </Button>}
    {showAlert && showResponse && !handleInput && Res && !Res.created &&  <Button variant="outlined" color="error" endIcon={<ModeEditIcon/>} onClick={handleEdit}
  style={{ color: "teal" ,marginLeft:"15vw",marginTop:'8px'}} >
    Edit Data 
    </Button>}
    {  handleInput && <Button variant="outlined" color="error" endIcon={<ModeEditIcon/>} onClick={handleInputs}
  style={{ color: "teal" ,marginLeft:"15vw",marginTop:'8px'}} >
    Enter 
    </Button>}

       </div>

    </div>
     </Backdrop>

<div className="WholeHomeRegister">
<div className="RegisterDiv">
   <h2 className="titleTextReg">Register:</h2>
   <div className="rowDiv">
<h3 className="QuoteText2">Username:</h3>
<input type='text' placeholder='Add the Username' className="Input1" onChange={handleUserName} />
   </div>
   <div className="rowDiv">
<h3 className="QuoteText2">Password:   </h3>
<input type='Password' placeholder='Add the password' className="Input1" onChange={handlePassword} />
   </div>
   <div className="rowDiv">
<h3 className="QuoteText2">Email:  </h3>
<input type='text' placeholder='Add the email' className="Input1" onChange={handleEmail} />
   </div>
   <div className="rowDiv">
<h3 className="QuoteText2">Phone Number:   </h3>
<input type='text' placeholder='Add the phone Number' className="Input1" onChange={handlePhone} />
   </div>

 {!open && <Button variant="outlined" color="error" endIcon={<HowToRegIcon/>} onClick={handleReg}
  style={{ color: "white" ,marginLeft:"230px",paddingTop:'8px',marginTop:'8px'}}  >
    Register
    </Button>}
</div>
</div>
    
</div>





)
}
export default Register;