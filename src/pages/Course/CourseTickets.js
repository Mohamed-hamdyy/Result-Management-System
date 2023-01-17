import React, { useState, useEffect } from 'react'
import './CourseSub.css'
import { useNavigate } from 'react-router-dom';


export function CourseTickets(){

    const [Ticket,setTicket]=useState();
    
    const getTickets= async ()=>{
      const response = await fetch('http://localhost:7000/api/getalltickets',{
        method:"POST",
        headers:{
           "content-type":"application/json; charset=UTF-8"
    
    
        },
        body:JSON.stringify({
        
              
        })
      });
        
          const json = await response.json()
          return json;
      }

  useEffect(() => {
    async function getTheTicket () {
      setTicket(await (getTickets()))
       console.log(Ticket);
    }
    getTheTicket()
  }, [Ticket])

   

const navigate =useNavigate()




return (
<div className='mainS'>
<h1 className='TickHead'>Tickets</h1>

 
  <ul>     
     {Ticket &&
      Ticket.map((Tick,i)=>{
          return <div> 
            
            <div className='rowS'>
            <h2 className='subText1'> {i+1}- </h2>

                         <h2 className='subText1'> Ticket Type: </h2>
             <h2 className='subText2'> {Tick.ticketType} </h2>
             <br/>
             <h2 className='subText1'> Status: </h2>

             <h2 className='subText2'> {Tick.ticketStatus} </h2>

             </div> 
             <div className='rowS'>
                          <h2 className='subText1'>Description:  </h2>
                          <h2 className='subText2'>{Tick.ticketText} </h2>
              
                          </div>
                           <br/>
                           <br/>
                          </div>  }
         )
         }
       </ul>  

    </div>
  )
}
export default CourseTickets;