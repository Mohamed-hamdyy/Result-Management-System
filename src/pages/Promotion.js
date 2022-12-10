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


function CoursePreview(){
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
      setAge(event.target.value);
    };
}

function Promotion() {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
      setAge(event.target.value);
    };
  return (
    <div>
        <p1>
            Choose the course you want to apply the promotion to.
        </p1>
        <Box sx={{ minWidth: 25 }}>
   
   <FormControl fullWidth>
               <InputLabel id="demo-simple-select-label">Please choose the Course. </InputLabel>
               <Select
                   labelId="demo-simple-select-label"
                   id="demo-simple-select"
                   value={age}
                   label="Age"
                   onChange={handleChange}
               >
                   <MenuItem value={10}>Ten</MenuItem>
                   <MenuItem value={20}>Twenty</MenuItem>
                   <MenuItem value={30}>Thirty</MenuItem>
               </Select>
           </FormControl>
       </Box>
        <p1>
                Promotion % !!
        </p1>
        <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="sale %" variant="outlined" />
    </Box>

    
    <p1>
                 Till when will this Promotion apply?
        </p1>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '50ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Valid till" variant="outlined" />
    </Box>

    <Button variant="contained" color="success">
        Update
      </Button>
    </div>

  );
}

export default Promotion

//23