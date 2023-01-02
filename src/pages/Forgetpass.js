import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

function Forgetpass() {


  const [email, setemail] = useState('');


  const handleSubmit = async(event) => {
   
         
         fetch('http://localhost:7000/api/userforgetpassword',
           {
           method:'POST',
           headers:{
             "Content-type":"application/json; charset=UTF-8"
           },
         
           body: JSON.stringify({
             email:email
           })
          
             })
         
               };
 
 





    return (
<div>

<Box
component="form"
sx={{
'& > :not(style)': { m: 1, width: '50ch' },
}}
noValidate
autoComplete="off"
>
<TextField id="outlined-basic"
 label="Email" 
 variant="outlined" 
 value={email}
 onChange={(e)=>
 setemail(e.target.value)} />
</Box>
<Button variant="contained" color="success" onClick={handleSubmit}>
Send
</Button>
  </div>
    );
}


export default Forgetpass