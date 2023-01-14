import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CorporateLogin(){

    const [password, setpassword] = useState('');
    const [username, setusername] = useState('');
    const [data, setdata] = useState('');
    let token='';
    let role = '';
    let userName ='';
    const navigate = useNavigate()


    function handleClick1() {
        navigate("/addadmin");
      }

  
   const handleSubmit = async(event) => {
    
          
          fetch('http://localhost:7000/api/corporateuserlogin',
            {
            method:'POST',
            headers:{
              "Content-type":"application/json; charset=UTF-8"
            },
          
            body: JSON.stringify({
              userName:username,
              password:password
            })
           
              })
              .then(res => {
                return res.json()
              })
              .then(data => {
                setdata(data)
                token=data.token;
                role= data.role;
                userName= data.userName
                if(data.message === "Success"){
                    window.localStorage.setItem('token', token);
                    window.localStorage.setItem('role', role);
                    window.localStorage.setItem('id', 'null');
                    window.localStorage.setItem('userName', userName);
                    handleClick1();
                }
             

                
              })
          
                };
  return (
    <div>
  
  <p1>
   Enter New Username
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
                   name="username"
                   label="username"
                   type="username"
                   id="username"
                   autoComplete="current-username"
                   value={username}
                   onChange={(e)=>
                   setusername(e.target.value)}
                 />
    
    </Box>
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
                   value={password}
                   onChange={(e)=>
                   setpassword(e.target.value)}
                 />
    
    </Box>
    
    <Button variant="contained" color="success" onClick={handleSubmit}>
    Login
    </Button>
      </div>
        );
  
  }
export default CorporateLogin