import React from "react";
import '../index.css';
import { useState } from "react";
import { ContentCutOutlined } from "@mui/icons-material";


export function SelectCountry(){
    ////get the username and the type from token 
  const userName='ahmedyo2001';
  const type='IndividualUser';
  const [Country,setCountry]=useState('');
  const[checked1,setChecked1]=useState(false);
  const[checked2,setChecked2]=useState(false);
  const[checked3,setChecked3]=useState(false);
  const[checked4,setChecked4]=useState(false);
  const[checked5,setChecked5]=useState(false);
  const[checked6,setChecked6]=useState(false);

  const handleChecked1=(event)=>{
    setChecked1(true);
    setChecked2(false);setChecked5(false);
    setChecked3(false);setChecked6(false);
    setChecked4(false);
  }
  const handleChecked2=(event)=>{
    setChecked2(true);
    setChecked1(false);setChecked5(false);
    setChecked3(false);setChecked6(false);
    setChecked4(false);

  }
  const handleChecked3=(event)=>{
    setChecked3(true);
    setChecked2(false);setChecked5(false);
    setChecked1(false);setChecked6(false);
    setChecked4(false);

  }
  const handleChecked4=(event)=>{
    setChecked4(true);
    setChecked2(false);setChecked5(false);
    setChecked3(false);setChecked6(false);
    setChecked1(false);

  }
  const handleChecked5=(event)=>{
    setChecked5(true);
    setChecked2(false);setChecked1(false);
    setChecked3(false);setChecked6(false);
    setChecked4(false);

  }
  const handleChecked6=(event)=>{
    setChecked6(true);
    setChecked2(false);setChecked5(false);
    setChecked3(false);setChecked1(false);
    setChecked4(false);

  }
  const getCountry= ()=>{
   if (checked1)
     setCountry("Egypt");
     if (checked2)
     setCountry("USA");
     if (checked3)
     setCountry("UAE");
     if (checked4)
     setCountry("London");
     if (checked5)
     setCountry("Germany");
     if (checked6)
     setCountry("Other");



  }
  const fetchCountry= async (a,b,c)=>{
    const response = await fetch('http://localhost:7000/api/selectCountry',{
      method:"POST",
      headers:{
         "content-type":"application/json; charset=UTF-8"
  
  
      },
      body:JSON.stringify({
         userName:a,
         type:b,
         country:c
  
  
      } )
    });
        const json = await response.json()
        console.log(json);
    }
  const handleSelectCountry= async (event)=>{
      if ((checked1||checked2||checked3||checked4||checked5||checked6)===false)
           alert("must select a counntry");
      
       event.preventDefault();
       getCountry();
       console.log(Country);
       await fetchCountry(userName,type,Country)
       

  }



  




return (
<div>

<div className="CountryDiv">

    <h1 className="CountryText">Select Your Country</h1>
<form>
    <div className="radio">
      <label>
        <input type="radio" value="Egypt" checked={checked1} onClick={handleChecked1} />
        Egypt
      </label>
    </div>
    <div className="radio">
      <label>
        <input type="radio" value="USA" checked={checked2} onClick={handleChecked2}/>
        USA
      </label>
    </div>
    <div className="radio">
      <label>
        <input type="radio" value="UAE" checked={checked3} onClick={handleChecked3}/>
        UAE
      </label>
    </div>
    <div className="radio">
      <label>
        <input type="radio" value="London" checked={checked4} onClick={handleChecked4} />
        London
      </label>
    </div>
    <div className="radio">
      <label>
        <input type="radio" value="Germany" checked={checked5} onClick={handleChecked5}/>
        Germany
      </label>
    </div>
    <div className="radio">
      <label>
        <input type="radio" value="Other" checked={checked6} onClick={handleChecked6} />
        Other
      </label>
    </div>

    <button className="CountryButton" onClick={handleSelectCountry}>Select</button>

  </form>
  </div>







</div>
);



}
export default SelectCountry;

