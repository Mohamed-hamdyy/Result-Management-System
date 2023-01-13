// import * as React from 'react';
// import Radio from '@mui/material/Radio';
// import RadioGroup from '@mui/material/RadioGroup';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import FormControl from '@mui/material/FormControl';
// import FormLabel from '@mui/material/FormLabel';

// export default function ControlledRadioButtonsGroup() {
//   const [value, setValue] = React.useState('female');




// const handleSubmit = async(event) => {
  
        
//             fetch('http://localhost:7000/api/filtercourses',
//               {
//               method:'POST',
//               headers:{
//                 "Content-type":"application/json; charset=UTF-8"
//               },
            
//               body: JSON.stringify({
//                 userName:"inst1",
//                 course:current
//               })
             
//                 })
//                 .then(res => {
//                   return res.json()
//                 })
//                 .then(data => {
//                   setratings(data)
//                 })
            
            
//               };
//   return (
//     <FormControl>
//       <FormLabel id="demo-controlled-radio-buttons-group">Gender</FormLabel>
//       <RadioGroup
//         aria-labelledby="demo-controlled-radio-buttons-group"
//         name="controlled-radio-buttons-group"
//         value={value}
//         onChange={handleChange}
//       >
//         <FormControlLabel value="female" control={<Radio />} label="Female" />
//         <FormControlLabel value="male" control={<Radio />} label="Male" />
//       </RadioGroup>
//     </FormControl>
//   );
// }


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
import InstructorCourses from './InstructorCourses';
import { useEffect , useState} from "react"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


 
 export default function InstructorCoursesSearch() {
  // const [courseID, setCourseID] = useState('');
  // const [title, setTitle] = useState('');
  // const [totalHours, setTotalHours] = useState('');
  // const [price, setPrice] = useState('');
  // const [subject, setSubject] = useState('');
  // const [instructorUsername, setInstructorUsername] = useState('');

  const [Courses, setCourses] = useState('');





  useEffect(() =>{
 fetch('http://localhost:7000/api/filtercoursesubjectinstructor',
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
      //  setTitle(data.title)
      //  setCourseID(data.courseID)
      //  setInstructorUsername(data.instructorUsername)
      //  setPrice(data.price)
      //  setSubject(data.subject)
      //  setTotalHours(data.totalHours)
       setCourses(data)
       console.log(data)
       

     })
 
   },[]);
 
   return (
    <div style={{ height: 400, width: '100%' }}>
    <TextField
               margin="normal"
               id="title"
               label="title"
               name="title"
               autoComplete="title"
               autoFocus
             />
             <h2></h2>
             <TextField
               margin="normal"
               name="subject"
               label="subject"
               type="subject"
               id="subject"
               autoComplete="subject"
             />
                          <h2>

                          </h2>
                          <TextField
               margin="normal"
               name="instructor"
               label="instructor"
               type="instructor"
               autoComplete="instructor"
               />
               <h1></h1>
               <Button
               type="submit"
               variant="contained"
               sx={{ mt: 3, mb: 2 }}
             >
               Search
             </Button>

             <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Course ID</TableCell>
                            <TableCell>Title</TableCell>
                            <TableCell>Total Hours</TableCell>
                            <TableCell>Price</TableCell>
                            <TableCell>Subject</TableCell>
                            <TableCell>Instructor Username</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                       {Courses && Courses.map((title) => (
                            <TableRow
                                key={Courses}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell align="left">{title}</TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>


                          </div>
     
   );
 }


 // api/filtercoursesubjectinstructor