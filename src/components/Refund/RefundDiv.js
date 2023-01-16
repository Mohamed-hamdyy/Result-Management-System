import React from 'react'
import './Refund.css'
import { useState } from 'react';




function RefundDiv(props){
    
    const[res,setRes]=useState();
    const[show,setShow]=useState(false);

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

        const handleReq= async ()=>{
            setRes(await fetchRequest(props.user,props.course));
            setShow(true);


        }



  
        return (
         <div className='mainR'>
            <h2 className='RefTitle'>Refund</h2>
            <div className='rowRef'>
         <h2 className='RefText1'>Request a Refund</h2>
         <button className='RefButton' onClick={handleReq} >request</button>
        
           </div>
           {show && res && <h2 className='RefText2'>{res.data}</h2>}
         </div>
        );
      };
      

export default RefundDiv;




