// import * as React from 'react'
// import Avatar from '@mui/material/Avatar'
// import Button from '@mui/material/Button'
// import CssBaseline from '@mui/material/CssBaseline'
// import TextField from '@mui/material/TextField'
// import Radio from '@mui/material/Radio'
// import Checkbox from '@mui/material/Checkbox'
// import Link from '@mui/material/Link'
// import Grid from '@mui/material/Grid'
// import Box from '@mui/material/Box'
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
// import Typography from '@mui/material/Typography'
// import Container from '@mui/material/Container'
// import { createTheme, ThemeProvider } from '@mui/material/styles'
// import { useState, useEffect } from 'react'

// import RadioGroup from '@mui/material/RadioGroup'
// import FormControlLabel from '@mui/material/FormControlLabel'
// import FormControl from '@mui/material/FormControl'
// import FormLabel from '@mui/material/FormLabel'
// import { useNavigate } from 'react-router-dom'

// function Allecourses () {
//   const [Courses, setCourses] = useState('')
//   const [current, setcurrent] = useState('')
//   const [ind, setind] = useState('')
//   const navigate = useNavigate()

//   function handleClick1 () {
//     navigate('/')
//   }

//   function handleClick21 () {
//     window.localStorage.clear()
//     navigate('/')
//   }
//   function handleClick22 () {
//     if (window.localStorage.getItem('role') === 'individual user') { navigate('/Individualpage') } else if (window.localStorage.getItem('role') === 'admin') { navigate('/adminpage') } else if (window.localStorage.getItem('role') === 'instructor') { navigate('/Instructorpage') } else if (window.localStorage.getItem('role') === 'corporate user') { navigate('/Corporatepage') } else { navigate('/') }
//   }

//   useEffect(() => {
//     fetch('http://localhost:7000/api/getcoursesembeddedall',
//       {
//         method: 'POST',
//         headers: {
//           'Content-type': 'application/json; charset=UTF-8'
//         },

//         body: JSON.stringify({
        
//         })

//       })
//       .then(res => {
//         return res.json()
//       })
//       .then(data => {
        
//         console.log(data)
//         console.log(window.localStorage.getItem('userName'))
//       })
//   }, [])
//   useEffect(() => {
//     Promise.all([
//       fetch('http://localhost:7000/api/individualuserverify',
//         {
//           method: 'POST',
//           headers: {
//             'Content-type': 'application/json; charset=UTF-8'
//           },

//           body: JSON.stringify({
//             token: window.localStorage.getItem('token')
//           })

//         })
//     ,
      
//         fetch('http://localhost:7000/api/getcoursesembeddedall',
//         {
//           method: 'POST',
//           headers: {
//             'Content-type': 'application/json; charset=UTF-8'
//           },
  
//           body: JSON.stringify({
          
//           })
  
//         })

//     ])
//       .then(([resind , rescourses]) =>
//         Promise.all([resind.json(), rescorporate.json(), resinstructor.json(),rescourses.json()])

//       )
//       .then(([dataind,datacourses]) => {
//         setind(dataind)
//         setCourses(datacourses)
//         if (ind === 'redirect') {
//           handleClick1()
//         }
//       })
//   }, [])

//   const handleSubmit1 = async (event) => {
//     fetch('http://localhost:7000/api/pay',
//       {
//         method: 'POST',
//         headers: {
//           'Content-type': 'application/json; charset=UTF-8'
//         },

//         body: JSON.stringify({
        
//         })

//       })
//       .then(res => {
//         return res.json()
//       })
//   }


//   return (

//   <div>
//       <div>
//       <FormControl>
//         <FormLabel id='demo-controlled-radio-buttons-group'>Courses</FormLabel>
//         <RadioGroup
//           aria-labelledby='demo-controlled-radio-buttons-group'
//           name='controlled-radio-buttons-group'
//           value={current}
//           onChange={(e) => setcurrent(e.target.value)}
//         >
//           {Courses && Courses.map((Course) => (
//             <FormControlLabel value={Course.courseID} control={<Radio />} label={Course.title + " Price is " + Course.price } />
            
//           ))}

//         </RadioGroup>
//       </FormControl>
//     </div>
    
//     <div>
//       <Box
//         component='form'
//         sx={{
//           '& > :not(style)': { m: 1, width: '50ch' }
//         }}
//         noValidate
//         autoComplete='off'
//       >
//         <TextField
//           margin='normal'
//           required
//           fullWidth
//           name='username'
//           label='Card Number'
//           type='username'
//           id='username'
//           autoComplete='current-username'
//         />

//       </Box>
//       <Box
//         component='form'
//         sx={{
//           '& > :not(style)': { m: 1, width: '50ch' }
//         }}
//         noValidate
//         autoComplete='off'
//       >
//         <TextField
//           margin='normal'
//           required
//           fullWidth
//           name='username'
//           label='Expiry Date'
//           type='username'
//           id='username'
//           autoComplete='current-username'
//         />

//       </Box>
//       <Box
//         component='form'
//         sx={{
//           '& > :not(style)': { m: 1, width: '50ch' }
//         }}
//         noValidate
//         autoComplete='off'
//       >
//         <TextField
//           margin='normal'
//           required
//           fullWidth
//           name='username'
//           label='CVC'
//           type='username'
//           id='username'
//           autoComplete='current-username'
//         />

//       </Box>
//       <Button variant='contained' color='success' onClick={handleSubmit1}>
//         Pay
//       </Button>
//     </div>
//   </div>
    

//   )
// }
// export default Allecourses
