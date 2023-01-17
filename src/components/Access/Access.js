import React from 'react'
import './Access.css'
import { useState } from 'react';




function Access(props){
    
    const[res,setRes]=useState();
    const[show,setShow]=useState(false);

    const fetchRequest= async (a,b)=>{
        const response = await fetch('http://localhost:7000/api/createrequest',{
          method:"POST",
          headers:{
             "content-type":"application/json; charset=UTF-8"
      
      
          },
          body:JSON.stringify({
          userName:a,
          courseID:b

      
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
            <div className='ContReq'>
            <h2 className='RefTitle'>Request Access</h2>
            </div>
            <div className='rowRef'>
         <h2 className='RefText1'>Request access to this course</h2>
         <button className='RefButton' onClick={handleReq} >request</button>
        
           </div>
           {show && res && <h2 className='RefText2'>{res.data}</h2>}
         </div>
        );
      };
      

export default Access;




