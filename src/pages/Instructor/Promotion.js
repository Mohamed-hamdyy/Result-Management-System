import * as React from 'react'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import Radio from '@mui/material/Radio'
import Checkbox from '@mui/material/Checkbox'
import Link from '@mui/material/Link'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { useState, useEffect } from 'react'

import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import { useNavigate } from 'react-router-dom'
function Promotion () {
  const [courses, setcourses] = useState('')
  const [courseID, setcourseID] = useState('')
  const [country, setcountry] = useState('')
  const [percentage, setpercentage] = useState('')
  const [date, setdate] = useState('')

  const navigate = useNavigate()
  function handleClick21 () {
    window.localStorage.clear()
    navigate('/')
  }
  function handleClick22 () {
    if (window.localStorage.getItem('role') === 'individual user') { navigate('/Individualpage') } else if (window.localStorage.getItem('role') === 'admin') { navigate('/adminpage') } else if (window.localStorage.getItem('role') === 'instructor') { navigate('/Instructorpage') } else if (window.localStorage.getItem('role') === 'corporate user') { navigate('/Corporatepage') } else { navigate('/') }
  }

  useEffect(() => {
    fetch('http://localhost:7000/api/instructorCourses',
      {
        method: 'POST',
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        },

        body: JSON.stringify({
          userName: window.localStorage.getItem('userName')
        })

      })
      .then(res => {
        return res.json()
      })
      .then(data => {
        setcourses(data)
      })
  }, [])

  const handleSubmit = async (event) => {
    fetch('http://localhost:7000/api/createDiscount',
      {
        method: 'POST',
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        },

        body: JSON.stringify({
          courseID,
          country,
          percentage,
          date

        })

      })
      .then(res => {
        return res.json()
      })
  }

  return (
    <div>
      <div>
        <Button variant='contained' style={{ float: 'right' }} color='primary' className='float-right' onClick={handleClick21}>
          Log Out
        </Button>
        <Button variant='contained' style={{ float: 'left' }} color='primary' className='float-right' onClick={handleClick22}>
          Home
        </Button>
      </div>
      <br />
      <box>
        <FormControl>
          <FormLabel id='demo-controlled-radio-buttons-group'>Courses</FormLabel>
          <RadioGroup
            aria-labelledby='demo-controlled-radio-buttons-group'
            name='controlled-radio-buttons-group'
            value={courseID}
            onChange={(e) => setcourseID(e.target.value)}
          >
            {courses && courses.map((course) => (
              <FormControlLabel value={course.courseID} control={<Radio />} label={course.title} />
            ))}

          </RadioGroup>
        </FormControl>
      </box>
      <Box
        component='form'
        sx={{
          '& > :not(style)': { m: 1, width: '50ch' }
        }}
        noValidate
        autoComplete='off'
      >
        <TextField
          margin='normal'
          required
          fullWidth
          name='username'
          label='Country'
          type='username'
          id='username'
          autoComplete='current-username'
          value={country}
          onChange={(e) =>
            setcountry(e.target.value)}
        />

      </Box>
      <Box
        component='form'
        sx={{
          '& > :not(style)': { m: 1, width: '50ch' }
        }}
        noValidate
        autoComplete='off'
      >
        <TextField
          margin='normal'
          required
          fullWidth
          name='username'
          label='Percentage'
          type='username'
          id='username'
          autoComplete='current-username'
          value={percentage}
          onChange={(e) =>
            setpercentage(e.target.value)}
        />

      </Box>
      <Box
        component='form'
        sx={{
          '& > :not(style)': { m: 1, width: '50ch' }
        }}
        noValidate
        autoComplete='off'
      >
        <TextField
          margin='normal'
          required
          fullWidth
          name='username'
          label='Date'
          type='username'
          id='username'
          autoComplete='current-username'
          value={date}
          onChange={(e) =>
            setdate(e.target.value)}
        />

      </Box>
      <Button variant='contained' color='success' onClick={handleSubmit}>
        Update
      </Button>
    </div>
  )
}
export default Promotion

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
// import Button from '@mui/material/Button';

// function CoursePreview(){
//     const [age, setAge] = React.useState('');

//     const handleChange = (event) => {
//       setAge(event.target.value);
//     };
// }

// function Promotion() {
//     const [age, setAge] = React.useState('');

//     const handleChange = (event) => {
//       setAge(event.target.value);
//     };
//   return (
//     <div>
//         <p1>
//             Choose the course you want to apply the promotion to.
//         </p1>
//         <Box sx={{ minWidth: 25 }}>

//    <FormControl fullWidth>
//                <InputLabel id="demo-simple-select-label">Please choose the Course. </InputLabel>
//                <Select
//                    labelId="demo-simple-select-label"
//                    id="demo-simple-select"
//                    value={age}
//                    label="Age"
//                    onChange={handleChange}
//                >
//                    <MenuItem value={10}>Ten</MenuItem>
//                    <MenuItem value={20}>Twenty</MenuItem>
//                    <MenuItem value={30}>Thirty</MenuItem>
//                </Select>
//            </FormControl>
//        </Box>
//         <p1>
//                 Promotion % !!
//         </p1>
//         <Box
//       component="form"
//       sx={{
//         '& > :not(style)': { m: 1, width: '25ch' },
//       }}
//       noValidate
//       autoComplete="off"
//     >
//       <TextField id="outlined-basic" label="sale %" variant="outlined" />
//     </Box>

//     <p1>
//                  Till when will this Promotion apply?
//         </p1>
//     <Box
//       component="form"
//       sx={{
//         '& > :not(style)': { m: 1, width: '50ch' },
//       }}
//       noValidate
//       autoComplete="off"
//     >
//       <TextField id="outlined-basic" label="Valid till" variant="outlined" />
//     </Box>

//     <Button variant="contained" color="success">
//         Update
//       </Button>
//     </div>

//   );
// }

// export default Promotion

// //23
