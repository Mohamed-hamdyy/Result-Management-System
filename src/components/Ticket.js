import React, { Component } from "react";
import './Ticket.css'
import { useState } from "react";

function Ticket(){

  const [text,setTex]= useState();
  const [type,setType]= useState();
  const [courId,setId]= useState("1");
  const [stat,setStat]= useState(false);

  const [checked1,setChecked1]= useState(false);
  const [checked2,setChecked2]= useState(false);
  const [checked3,setChecked3]= useState(false);

   const [issue,setIssue]=useState(false);


  //get from props.course

    const getTicket = async (a,b,c, d)=>{
    const response =  await fetch('http://localhost:7000/api/createTicket',{
    method:"POST",
    headers:{
       "content-type":"application/json; charset=UTF-8"


    },
    body:JSON.stringify({
       courseID:a,
       status:b,
       type:c,
       text:d

    })
  });
      const json = await response.json()
      console.log(json);
      
  }


 

   const handleText=(event)=>{
    setTex(event.target.value);


  }
  const handleChecked1=()=>{
   setType("financial");
   setChecked1(true);
   setChecked2(false);
   setChecked3(false);

  }
  const handleChecked2=(event)=>{
    setType("technical");
    setChecked1(false);
    setChecked2(true);
    setChecked3(false);
 
   }
   const handleChecked3=(event)=>{
    setType("other");
    setChecked1(false);
    setChecked2(false);
    setChecked3(true);
 
   }
  const handleSubmit= async (event)=>{
   event.preventDefault();
   const call= await getTicket(courId,stat,type,text);
   setIssue(true);
  }


    return (
        <div className="wholeTic">
      <form >
        <div>
    <h1 className="rep">Report a new issue</h1>
</div>
    <h2>
        Problem type:
    </h2>
        <div className="radio">
          <label>
            <input
              type="radio"
              value='Financial'
              checked={checked1}
              onChange={handleChecked1}

            />
            Financial
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              value={'Technical'}
              checked={checked2}
              onChange={handleChecked2}
            />
            Technical
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              value={'Other'}
              checked={checked3}
              onChange={handleChecked3}

            />
            Other
          </label>
        </div>
        <div>
        <input className="RepText" type="text" placeholder="Briefly describe your issue"  onChange={handleText}></input>
        </div>
        <button className="buttonRep" type="submit" onClick={handleSubmit}>
          Submit
        </button>

        {issue &&  <h2>report issued successfuly !</h2>}
      </form>
      </div>
    );
  }


export default Ticket;