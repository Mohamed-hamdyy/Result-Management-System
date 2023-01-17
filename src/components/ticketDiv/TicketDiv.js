import React from 'react'
import './TicketDiv.css'
import { useState } from 'react';
import Ticket from '../Ticket';
import CourseTickets from '../../pages/Course/CourseTickets';
import { useNavigate } from 'react-router';

function TicketDiv(props){
    
    const[res,setRes]=useState();
    const[show,setShow]=useState(false);
    const navigate=useNavigate();

    const fetchRequest= async (a,b)=>{
        const response = await fetch('http://localhost:7000/api/addRequest',{
          method:"POST",
          headers:{
             "content-type":"application/json; charset=UTF-8"
      
      
          },
          body:JSON.stringify({
          userName:a,
          courseId:b

      
          } )
        });
            const json = await response.json()
            return json;
        }

      const handleIssue=()=>{
        setShow(true);



      }
      const handleSee=()=>{
       setShow(false);
      navigate("/AllTickets");


      }


  
        return (
         <div className='mainR'>
            <h2 className='RefTitle'>Tickets</h2>
            <div className='rowRef'>
         <h2 className='RefText1'>issue a new ticket</h2>
         <button className='RefButton' onClick={handleIssue} >Issue</button>
                 
           </div>
           <div className='rowRef'>
         <h2 className='RefText1'>see all Tickets</h2>
         <button className='RefButton' onClick={handleSee} >See</button>
                 
           </div>

           {show && <Ticket/>}
         </div>
        );
      };
      

export default TicketDiv;