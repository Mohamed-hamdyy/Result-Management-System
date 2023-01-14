import * as React from 'react';
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

function Createcourse(){

    const [CourseID, setCourseID] = useState('');
    const [title, settitle] = useState('');
    const [totalHours, settotalHours] = useState('');
    const [price, setprice] = useState('');
    const [subject, setsubject] = useState('');
    const navigate = useNavigate();
    function handleClick1() {
      if(window.localStorage.getItem('role')=== "individual user")
        navigate("/Individualpage");
        if(window.localStorage.getItem('role')=== "admin")
        navigate("/adminpage");
        if(window.localStorage.getItem('role')=== "instructor")
        navigate("/Instructorpage");
        if(window.localStorage.getItem('role')=== "corporate user")
        navigate("/Corporatepage");

      }
    function handleClick2() {
      window.localStorage.clear();
        navigate("/");
      }

    const handleSubmit = async(event) => {
  
        
        fetch('http://localhost:7000/api/createCourse',
          {
          method:'POST',
          headers:{
            "Content-type":"application/json; charset=UTF-8"
          },
        
          body: JSON.stringify({
            instructorUsername:window.localStorage.getItem('userName'),
            courseID:CourseID,
            title:title,
            totalHours:totalHours,
            price:price,
            subject:subject
          })
         
            })
            .then(res => {
              return res.json()
            })
        
              };


return (
  
  <div>

  <p1>
   Enter CourseID
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
                   label="CourseID"
                   type="username"
                   id="username"
                   autoComplete="current-username"
                   value={CourseID}
                   onChange={(e)=>
                   setCourseID(e.target.value)}
                 />
    
    </Box>
    <p1>
    Enter Title
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
                   label="Title"
                   type="mn,"
                   id="password"
                   autoComplete="current-password"
                   value={title}
                   onChange={(e)=>
                   settitle(e.target.value)}
                 />
    
    </Box>
    <p1>
   Enter TotalHours
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
                   label="TotalHours"
                   type="username"
                   id="username"
                   autoComplete="current-username"
                   value={totalHours}
                   onChange={(e)=>
                   settotalHours(e.target.value)}
                 />
    
    </Box>
    <p1>
    Enter Price
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
                   label="Price"
                   type="mnnbm"
                   id="Price"
                   autoComplete="current-password"
                   value={price}
                   onChange={(e)=>
                   setprice(e.target.value)}
                 />
    
    </Box>
    <p1>
   Enter Subject
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
                   label="Subject"
                   type="username"
                   id="username"
                   autoComplete="current-username"
                   value={subject}
                   onChange={(e)=>
                   setsubject(e.target.value)}
                 />
    
    </Box>
    
    <Button variant="contained" color="success" onClick={handleSubmit}>
    Update
    </Button>
      </div>
        );

}

export default Createcourse