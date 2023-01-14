import * as React from 'react';
import Box from '@mui/material/Box';
import Label from '@mui/material/FormLabel';
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
import { useEffect } from 'react';
import Checkbox from '@mui/material/Checkbox';
import { useNavigate } from 'react-router-dom';
function Signup(){

    const [username, setusername] = useState('');
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [firstname, setfirstname] = useState('');
    const [lastname, setlastname] = useState('');
    const [gender, setgender] = useState('');
    const [checked, setChecked] = useState(false);
    const navigate = useNavigate()
    const handleChange = (event) => {
      setChecked(event.target.checked);
    };
    const handleSubmit = async(event) => {
      fetch('http://localhost:7000/api/createIndividualUser',
        {
        method:'POST',
        headers:{
          "Content-type":"application/json; charset=UTF-8"
        },
        body: JSON.stringify({
          userName:username,
          firstName:firstname,
          lastName:lastname,
          gender:gender,
          email:email,
          password:password
        })
       
          })
      
              };

    function Save(){
      if(checked)
      {
          handleSubmit();
          navigate("/");

      }
      return false;
      }

return(

<div>

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
                   name="username"
                   label="Username"
                   type="username"
                   id="username"
                   autoComplete="current-username"
                   value={username}
                   onChange={(e)=>
                   setusername(e.target.value)}
                 />
    
    </Box>
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
                   name="username"
                   label="Email"
                   type="username"
                   id="username"
                   autoComplete="current-username"
                   value={email}
                   onChange={(e)=>
                   setemail(e.target.value)}
                 />
    
    </Box>
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
                   name="username"
                   label="First Name"
                   type="username"
                   id="username"
                   autoComplete="current-username"
                   value={firstname}
                   onChange={(e)=>
                   setfirstname(e.target.value)}
                 />
    
    </Box>
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
                   name="username"
                   label="Last Name"
                   type="username"
                   id="username"
                   autoComplete="current-username"
                   value={lastname}
                   onChange={(e)=>
                   setlastname(e.target.value)}
                 />
    
    </Box>
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
                   name="username"
                   label="Password"
                   type="username"
                   id="username"
                   autoComplete="current-username"
                   value={password}
                   onChange={(e)=>
                   setpassword(e.target.value)}
                 />
    
    </Box>
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
                   name="username"
                   label="Gender"
                   type="username"
                   id="username"
                   autoComplete="current-username"
                   value={gender}
                   onChange={(e)=>
                   setgender(e.target.value)}
                 />
    
    </Box>
    <div>
    <a href="http://localhost:3000/Policies" rel="noreferrer" target="_blank">
    Payment and Refund Policies
  </a>
    </div>
    <div>
      <h2>
        Please check the check box if you accept the policies.
      </h2>
      <Checkbox
      checked={checked}
      onChange={handleChange}
      inputProps={{ 'aria-label': 'controlled' }}
    />

    </div>
    <Button variant="contained" color="success" onClick={Save}>
Send
</Button>




</div>



)



}
export default Signup