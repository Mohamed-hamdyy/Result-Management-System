import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
import { useEffect } from 'react';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Label from '@mui/material/FormLabel';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function ViewCourseRatingsReviews(){


    const [courses, setCourses] = useState('');
    const [courseID, setCourseID] = useState('');
    const [ratings, setratings] = useState('');
    const [subject, setSubject] = useState('');
    const [title, setTitle] = useState('');




    useEffect(() =>{
   fetch('http://localhost:7000/api/instructorCourses',
     {
     method:'POST',
     headers:{
       "Content-type":"application/json; charset=UTF-8"
     },
   
     body: JSON.stringify({
       userName:"inst2",
     })
    
       })
       .then(res => {
         return res.json()
       })
       .then(data => {
         setCourses(data)

         
  
       })
   
     },[]);


     const handleSubmit = async(event) => {
  
        
        fetch('http://localhost:7000/api/viewCourseRatingsReviews',
          {
          method:'POST',
          headers:{
            "Content-type":"application/json; charset=UTF-8"
          },
        
          body: JSON.stringify({
            instructorUsername:"inst1",
            courseID:courseID
          })
         
            })
            .then(res => {
              return res.json()
            })
            .then(data => {
                setratings(data)
                console.log(data)
              })
          
        
              };

return (
  <div>
    <FormControl>
      <FormLabel id="demo-controlled-radio-buttons-group">Courses</FormLabel>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={courseID}
        onChange={(e)=> setCourseID(e.target.value)}

      >
           {courses && courses.map((course) => (
        <FormControlLabel value={course.courseID} control={<Radio />} label={course.title}/>
        ))}

      </RadioGroup>
    </FormControl>
    <box>
    <Button variant="contained" color="success" onClick={handleSubmit}>
  Choose
  </Button>

  <h1>Rating
        <h2></h2>
      <Label>
    {ratings.rating}
  </Label>
  </h1>
    </box>

    <><Box sx={{ minWidth: 120 }}>
        </Box><TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Ratings</TableCell>
                            <TableCell>Review</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {ratings.reviews&&ratings.reviews.map((rating) => (
                            <TableRow
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell align="left">{rating.rating}</TableCell>
                                <TableCell align="left">{rating.text}</TableCell>
                                

                            </TableRow>
                        ))}


                    </TableBody>
                </Table>
            </TableContainer></>
  </div>
  
)}
                    
export default ViewCourseRatingsReviews
 // 17