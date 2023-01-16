import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useState } from 'react';
import { useEffect } from 'react';
import { TextField } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

function CoursePreview(){

    const [Courses, setCourses] = useState('');
    const [CourseID, setCourseID] = useState('');
    const [preview, setpreview] = useState('');



    useEffect(() =>{
   fetch('http://localhost:7000/api/instructorCourses',
     {
     method:'POST',
     headers:{
       "Content-type":"application/json; charset=UTF-8"
     },
   
     body: JSON.stringify({
       userName:"inst1",
     })
    
       })
       .then(res => {
         return res.json()
       })
       .then(data => {
         setCourses(data)
         console.log(data)
         
  
       })
   
     },[]);


     const handleSubmit = async(event) => {
  
        
        fetch('http://localhost:7000/api/editpreview',
          {
          method:'POST',
          headers:{
            "Content-type":"application/json; charset=UTF-8"
          },
        
          body: JSON.stringify({
            courseID:CourseID,
            preview:preview
          })
         
            })
            .then(res => {
              return res.json()
            })

          
        
              };
return (
  <div>
 <FormControl>
      <FormLabel id="demo-controlled-radio-buttons-group">Courses</FormLabel>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={CourseID}
        onChange={(e)=> setCourseID(e.target.value)}

      >
           {Courses && Courses.map((Course) => (
        <FormControlLabel value={Course.courseID} control={<Radio />} label={Course.title}/>
        ))}

      </RadioGroup>
    </FormControl>
    <p1>
    Preview Link
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
                   name="preview"
                   label="preview"
                   type="preview"
                   id="[preview]"
                   autoComplete="current-password"
                   value={preview}
                   onChange={(e)=>
                   setpreview(e.target.value)}
                 />
    
    </Box>
    <Button variant="contained" color="success" onClick={handleSubmit}>
  Update
  </Button>
  </div>
   
      )


}



export default CoursePreview













// import * as React from 'react';
// import Box from '@mui/material/Box';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
// import TextField from '@mui/material/TextField';

// function CoursePreview(){
//     const [age, setAge] = React.useState('');

//     const handleChange = (event) => {
//       setAge(event.target.value);
//     };


//     //19