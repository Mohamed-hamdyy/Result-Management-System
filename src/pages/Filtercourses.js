
//9
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState } from 'react';
import { useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';





function Filtercourses(){

    const [pricefrom, setpricefrom] = useState('');
    const [subject, setsubject] = useState('');
    const [priceto, setpriceto] = useState('');
    const [courses, setcourses] = useState('');
    const [titles, settitles] = useState('');

          const handleSubmit = async(event) => {
  
        
            fetch('http://localhost:7000/api/filtercourses',
              {
              method:'POST',
              headers:{
                "Content-type":"application/json; charset=UTF-8"
              },
            
              body: JSON.stringify({
                userName:"inst1",
                pricefrom:pricefrom,
                priceto:priceto,
                subject:subject
             
              })
             
                })
                .then(res => {
                  return res.json()
                })
                .then(data => {
                    setcourses(data)
                    console.log(data)
                  })
              
            
                  };


    return (
      <div>      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Titles</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {courses && courses.map((course) => (
              <TableRow
                key={course}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {course}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <p1>
Select Starting Price
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
                 label="min price"
                 type="username"
                 id="username"
                 autoComplete="current-username"
                 value={pricefrom}
                 onChange={(e)=>
                 setpricefrom(e.target.value)}
               />
  
  </Box>
  <p1>
  Select Maximum Price
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
                 label="Max Price"
                 type="usr"
                 id="password"
                 autoComplete="current-password"
                 value={priceto}
                 onChange={(e)=>
                 setpriceto(e.target.value)}
               />
  
  </Box>
  <p1>
  Select Subject
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
                 label="Subject"
                 type="usre"
                 id="password"
                 autoComplete="current-password"
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
export default Filtercourses