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
import { useParams } from 'react-router-dom';
import { useState } from 'react';

function Changepass() {


const {type}=useParams();
const {username}=useParams();
const [Password, setPassword] = useState('');

const handleSubmit = async(event) => {
  
        
  fetch('http://localhost:7000/api/userresetpass',
    {
    method:'POST',
    headers:{
      "Content-type":"application/json; charset=UTF-8"
    },
  
    body: JSON.stringify({
      userName:username,
      type:type,
      password:Password
    })
   
      })
      .then(res => {
        return res.json()
      })
  
              };



    return (
<div>
<p1>
Change your Password
</p1>
<Box
component="form"
sx={{
'& > :not(style)': { m: 1, width: '50ch' },
}}
noValidate
autoComplete="off"
>
<TextField
               margin="normal"
               required
               fullWidth
               name="password"
               label="Password"
               type="password"
               id="password"
               autoComplete="current-password"
               value={Password}
               onChange={(e)=>
               setPassword(e.target.value)}
             />

</Box>
<Button variant="contained" color="success" onClick={handleSubmit}>
Update
</Button>
  </div>
    );
}
export default Changepass