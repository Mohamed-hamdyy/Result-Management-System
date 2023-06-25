import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import NavBar from "../../Components/NavBar/NavBar";
import Footer from "../../Components/Footer/Footer";
import Button from '@mui/material/Button';
import LoginIcon from '@mui/icons-material/Login';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import Backdrop from '@mui/material/Backdrop';


export function Login(){

const navigate=useNavigate();
const [user,setUser]=useState("");   
const [pass,setPass]=useState("");  
const [open,setOpen]=useState(false);  
const [Wrong,setWrong]=useState('');
const [data,setdata]=useState('')
const [handleInput,setHandleInput]=useState(false); 
let token='';
let role='';
let email='';


const handleNavigate=()=>{
if (window.localStorage.getItem('role')==='Admin')
   navigate('/adminHome');
else if (window.localStorage.getItem('role')==='Student')
   navigate('/student');
 else 
   navigate('/InstructorHome');  



}


 const handleUserName=(event)=>{
  setUser(event.target.value);


 }
 const handlePassword=(event)=>{
    setPass(event.target.value);
  
  
   }
   const handleEdit=()=>{
   setOpen(false);

   }
   const handleInputs=()=>{
    setHandleInput(false);
    setOpen(false);
    
    } 
   const handleSubmit = async (event) => {
     if(user===''|| pass===''){
     setHandleInput(true);
     setOpen(true);
     }
     else {
      fetch('http://localhost:7000/Userlogin',
        {
          method: 'POST',
          headers: {
            'Content-type': 'application/json; charset=UTF-8'
          },
  
          body: JSON.stringify({
            userName: user,
            password:pass
          })
  
        })
        .then(res => {
          return res.json()
        })
        .then(data => {
          setdata(data)
          token = data.token
          role = data.role
          email=data.email
          if (data.message === 'Success') {
            window.localStorage.setItem('userName',user)
            window.localStorage.setItem('token', token)
            window.localStorage.setItem('role', role)
            window.localStorage.setItem('id', 'null')
            window.localStorage.setItem('email', email)
            handleNavigate()
          }
          else if(data.message === 'username not found'){
            setOpen(true);  
            setWrong("Incorrect Username!")
          }
          else{
                setOpen(true);
                setWrong("Incorrect Password!")
          }
        })
      }
    }
 
return(
<div>
<Backdrop open={open} >
    <div className="confirmDivLogin">
       <div className="confirmtitleDiv">
       {handleInput?<h2 className="confirmTitleText"> Invalid Inputs</h2>
            :<h2 className="confirmTitleText"> Login Failed</h2>
}
       </div>
       <div className="confirmTextDiv">
       { handleInput?<p className="confirmTextDiv11Inst">Please enter the username and password to login!</p>

: <p className="confirmTextDiv11Inst">{Wrong} , Try Editing the Invalid Input Data to login.</p>
} 
          
         
       </div>
       <div className="confirmButtonsDiv">
    {!handleInput&&  <Button variant="outlined" color="error" endIcon={<ModeEditIcon/>} onClick={handleEdit}
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

<div className='WholeHomeLogin'>
<div className="loginDiv">
   <h2 className="titleText2">Login</h2>
   <div className="rowDiv">
<h3 className="QuoteText2">Username :</h3>
<input type='text' placeholder='Add the username' className="Input1" onChange={handleUserName} />
   </div>
   <div className="rowDiv">
<h3 className="QuoteText2">Password :   </h3>
<input type='Password' placeholder='Add the password' className="Input1" onChange={handlePassword} />
   </div>
 <p className="QuoteText3">New to Our Website <a href="/Register" >Register as new Student?</a></p>
 {!open && <Button variant="outlined" onClick={handleSubmit} color="error" endIcon={<LoginIcon/>} 
  style={{ color: "white" ,marginLeft:"230px",paddingTop:'8px',marginTop:'8px'}}  >
    login
    </Button>
}
</div>
</div>
    
</div>





)
}
export default Login;