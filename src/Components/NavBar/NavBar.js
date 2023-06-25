import React from 'react';
import { useState } from 'react';
import './NavBar.css'
import CastForEducationIcon from '@mui/icons-material/CastForEducation';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeSharpIcon from '@mui/icons-material/HomeSharp';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
  
const NavBar = (props) => {

    const [a,seta]=useState(props.home);
    const [b,setb]=useState(props.student);
    const [c,setc]=useState(props.admin);
    const [d,setd]=useState(props.inst);
    const headers='';
    //a?"Home": b?"Student":c?"Admin":d?"Instructor":'';

  return (
  <div className='nav'> 
    <div className='navLeft'>
       <CastForEducationIcon fontSize='large' style={{ color: 'white' ,paddingLeft:'20px',paddingTop:'15px' }}/>
       <h2 className='RmsText'>RMS</h2>
    </div>
   <div className='navMid'>
    <h2 className='Headers'>{headers}</h2>

    
    </div >

    <div className='navRight'>
    <h2 className={'Headers2'}>{props.title}</h2>
    {b  &&
    <AccountCircleIcon  fontSize='large' style={{ color: 'white' ,paddingLeft:'10px',paddingTop:'15px' }} />
    }
     {d  &&
    <AccountCircleIcon  fontSize='large' style={{ color: 'white' ,paddingLeft:'10px',paddingTop:'15px' }} />
    }
    {a &&
         <HomeSharpIcon  fontSize='large' style={{ color: 'white' ,paddingLeft:'10px',paddingTop:'15px' }} />
    
    }
    {c &&
         <AdminPanelSettingsIcon  fontSize='large' style={{ color: 'white' ,paddingLeft:'10px',paddingTop:'15px' }} />
    
    }

    </div>



  </div>

  )
};
  
export default NavBar;