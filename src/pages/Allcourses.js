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
import { useNavigate } from 'react-router-dom';


function Allcourses(){

    const [Courses, setCourses] = useState('');
    const [current, setcurrent] = useState('');
    const navigate = useNavigate();

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
         
          const pay = () => {

            navigate('/Pay',
            {
                state: {id:current}
            })
            console.log(current)
          }


return(

<div>
<FormControl>
      <FormLabel id="demo-controlled-radio-buttons-group">Courses</FormLabel>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={current}
        onChange={(e)=> setcurrent(e.target.value)}
        

      >
           {Courses && Courses.map((Course) => (
        <FormControlLabel value={Course.courseID} control={<Radio />} label={Course.title}/>
        ))}

      </RadioGroup>
    </FormControl>
    <Button variant="contained" color="success" onClick={pay}>
Choose
</Button>
</div>

)


}
export default Allcourses