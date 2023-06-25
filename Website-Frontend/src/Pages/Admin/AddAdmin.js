import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import NavBar from "../../Components/NavBar/NavBar";
import Footer from "../../Components/Footer/Footer";
import "./AddAdmin.css";
import ExpandCircleDownSharpIcon from '@mui/icons-material/ExpandCircleDownSharp';
import PersonAddAlt1RoundedIcon from '@mui/icons-material/PersonAddAlt1Rounded';
import Button from '@mui/material/Button';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import Backdrop from '@mui/material/Backdrop';
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';
import CancelIcon from '@mui/icons-material/Cancel';
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';
import VerifyToken from "../../Components/Authentication/Verify";
import Footer3 from "../../Components/Footer/Footer3";
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';


export function AddAdmin(){


  const navigate=useNavigate();

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

  const [user,setUser]=useState('');
  const [email,setEmail]=useState('');
  const [password,setPass]=useState('');
  const [phone,setPhone]=useState('');
  const [adding,setAdding]=useState(false);
  const [Inst,setInst]=useState(false);
  const [handleInput,setHandleInput]=useState(false);


 const [open,setOpen]=useState(false);
const [buttonState,setButtonState]=useState(true);
const [res,setRes]=useState();
const [res2,setRes2]=useState();
const [showAlert,setAlert]=useState(false);
const [showResponse,setShowResponse]=useState(false);



const handleUserName= (event) =>{
  setUser(event.target.value);

}
const handleEmail= (event) =>{
setEmail(event.target.value);

}
const handlePass= (event) =>{
setPass(event.target.value);

}
const handlePhone= (event) =>{
  setPhone(event.target.value);
  
  }
const handleAdd=()=>{
  if(user==='' || email==='' || password==='')
  setHandleInput(true);
 
   if(Inst && phone==='')
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

if(Inst)
await fetchAddInst(user,password,email,phone);
else 
await fetchAddAdmin(user,password,email);
    
  
  
  }
  const handleClose=()=>{
    setOpen(false);
     setButtonState(true);
     setAlert(false);
    setShowResponse(false);
  
  }
 const handleAddAdm=()=>{
  setAdding(true);
 }
 const handleAddInst=()=>{
 setAdding(true);
 setInst(true);

 }
 const handleInputs=()=>{
  setHandleInput(false);
  setOpen(false);
  setButtonState(true);
  
  }
const handleReturn=()=>{
setAdding(false);
setInst(false);


}

  const fetchAddAdmin = async (a,b,c,) => {
    const response = await fetch('http://localhost:7000/createAdmin', {
      method: 'POST',
      headers: {
        'content-type': 'application/json; charset=UTF-8'

      },
      body: JSON.stringify({
        userName: a,
        password:b,
        email:c

      })
    })
    const json = await response.json();
    setRes(json);
    setShowResponse(true);
 
  }
  const fetchAddInst = async (a,b,c,d) => {
    const response = await fetch('http://localhost:7000/createInst', {
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
    setRes2(json);
    setShowResponse(true);
  }
  

    return( 
    <div>
      <Backdrop open={open} >
    <div className="confirmDivFinal">
       <div className="confirmtitleDiv">

       {handleInput?<h2 className="confirmTitleText"> Invalid Inputs</h2>
            :<h2 className="confirmTitleText"> Confirm the Request</h2>
}       </div>
       <div className="confirmTextDiv">
          { showAlert && showResponse && Inst ?  <Alert severity="info" fontSize="300px">{res2 && res2.created ?"Instructor Created Successfully":
          "the UserName is already taken , try using another one for the new Instructor " }</Alert>
           : showAlert && showResponse  && !Inst ?  <Alert severity="info" fontSize="300px">{res && res.Created ?"Admin Created Successfully":
           "the UserName is already taken , try using another one for the new Admin " }</Alert>
           : showAlert && !showResponse? <Box sx={{ display: 'flex' , margin:'1vw',paddingLeft:'17vw',paddingTop:'2vh'}}>
           <CircularProgress /> </Box>
           :handleInput?<p className="confirmTextDiv11">Please add all the required Inputs correctly to set up the new account!</p>
           :<p className="confirmTextDiv11">Do you want to add the User: ({user}) to the System?</p>

        } 
       </div>
       <div className="confirmButtonsDiv">
     {!showAlert &&  !handleInput &&  <Button variant="contained" color="success" endIcon={<CheckIcon/>} onClick={handleConfirm}
  style={{ color: "white" ,marginLeft:"10vw",marginTop:'8px'}} >
    Confirm
    </Button>}
   {!showAlert && !handleInput && <Button variant="contained" color="success" endIcon={<CancelIcon/>} onClick={handleCancel}
  style={{ color: "white" ,marginLeft:"2.5vw",marginTop:'8px'}} >
    Cancel
    </Button>}
    {showAlert && showResponse &&   <Button variant="contained" color="success" endIcon={<CancelPresentationIcon/>} onClick={handleClose}
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
            <div className="WholeAddAdmin">
            <div className="PanelTextFinal">
      <ExpandCircleDownSharpIcon  onClick ={handlePanel} fontSize='large' style={{ color: "white" ,paddingLeft:'38vw',paddingTop:'20px'}}/>
      <h1 className="adminHeaderFinal">Admin Panel:</h1>
             </div> 
             <div className="addAdminDiv">
        <div className="FuncHeader1">
        <PersonAddAlt1RoundedIcon   onClick={handleReturn} style={{ fontSize:"4vw", color: "white" ,paddingLeft:'14vw',paddingTop:'12px'}}/>
        <h1 className="FuncHeader1Text">Add User</h1>
        </div>
        {adding && <div>
        <div className="FuncHeader11">
         {Inst ? <h3 className="FuncHeader11Text"> Inst. UserName : </h3>
         :<h3 className="FuncHeader11Text">Admin UserName : </h3>
}
          <input type='text' placeholder='add the admin user name' className="Input1" onChange={handleUserName} />
        </div>
        
        <div className="FuncHeader11">
          <h3 className="FuncHeader11Text"> email : </h3>
          <input type='text' placeholder='add the email' className="Input1" onChange={handleEmail}/>
        </div>

        <div className="FuncHeader11">
          <h3 className="FuncHeader11Text"> password : </h3>
          <input type='password' placeholder='password' className="Input1" onChange={handlePass}/>
        </div>
       
        {Inst && <div className="FuncHeader11">
          <h3 className="FuncHeader11Text"> phone : </h3>
          <input type='text' placeholder='Phone Number' className="Input1" onChange={handlePhone}/>
        </div>
}
    

       

      {buttonState &&  <Button variant="contained" color="success" endIcon={<ChevronRightRoundedIcon/>} onClick={handleAdd}
  style={{ color: "white" ,marginLeft:"280px",paddingTop:'10px',marginTop:'8px'}} >
    add
    </Button>
    }
    </div>
  }
  {!adding && <div className="buttonDivRow">
    <Button variant="contained" color="success" endIcon={<ChevronRightRoundedIcon/>} onClick={handleAddAdm}
  style={{ color: "white" ,marginLeft:"180px",paddingTop:'10px',marginTop:'100px'}} >
    Admin
    </Button>
    <Button variant="contained" color="success" endIcon={<ChevronRightRoundedIcon/>} onClick={handleAddInst}
  style={{ color: "white" ,marginLeft:"50px",paddingTop:'10px',marginTop:'100px'}} >
    Instructor
    </Button>



  </div>
}





    </div>
  



   </div>
    
        <Footer3 Sign={false}/>


            </div>


    )








}
export default AddAdmin; 