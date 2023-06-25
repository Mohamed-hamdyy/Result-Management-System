import React from "react";
import { useState } from "react";
import "./Home.css";
import NavBar from "../../Components/NavBar/NavBar";
import Footer from "../../Components/Footer/Footer";
import Button from '@mui/material/Button';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Backdrop from '@mui/material/Backdrop';
import Login from "../Login/Login";

export function Home(){
const [more,setMore]=useState(false); 

 const handleView=()=>{
 setMore(!more);

 }

 
return(
<div>

   


    <NavBar home={true} title={"Welcome"}/>
<div className="WholeHomeFinal">
<div className="homeText">
<h1 className="titleText">Result Management System</h1>
<h1 className="QuoteText">Access your results in an easy and a swift way.</h1>
{ <Button variant="contained" color="success" endIcon={!more?<KeyboardArrowDownIcon/>:<KeyboardArrowUpIcon/>}
 onClick={handleView}>

   {!more?"Show More":"Show Less"}
</Button>
}
{more && <div className="Descrip">

<p id="para" className="DTextFinal">Online Results-management system that facilitates the environment of 
both the students and the educators (lecturers,teachers,...etc) responsible for grading them.
 A system that produces faster results for students , requires less effort from the educators and also reduces
  the burden on the educators and saves the results from any human errors or damages.</p>

</div>
}
</div>
</div>

  
<Footer Sign={true} buttonText={'Login'}/>


</div>


)
}
export default Home;