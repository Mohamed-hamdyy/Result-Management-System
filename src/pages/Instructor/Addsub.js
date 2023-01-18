import * as React from 'react'
import Button from '@mui/material/Button'

import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Link from '@mui/material/Link'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

function Addsub () {
  const [courseID, setCourseID] = useState('')
  const [subtitleID, setsubtitleid] = useState('')
  const [Hours, setHours] = useState('')
  const [title, settitle] = useState('')
  const [videolink, setvideolink] = useState('')
  const [description, setdescription] = useState('')
  const navigate = useNavigate()
  function handleClick21 () {
    window.localStorage.clear()
    navigate('/')
  }
  function handleClick22 () {
    if (window.localStorage.getItem('role') === 'individual user') { navigate('/Individualpage') } else if (window.localStorage.getItem('role') === 'admin') { navigate('/adminpage') } else if (window.localStorage.getItem('role') === 'instructor') { navigate('/Instructorpage') } else if (window.localStorage.getItem('role') === 'corporate user') { navigate('/Corporatepage') } else { navigate('/') }
  }
  function handleClick1 () {
    navigate('/')
  }
  useEffect(() => {
    fetch('http://localhost:7000/api/instructorverify',
      {
        method: 'POST',
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        },

        body: JSON.stringify({
          token: window.localStorage.getItem('token')
        })

      })
      .then(res => {
        return res.json()
      })
      .then(data => {
        if (data === 'redirect') {
          handleClick1()
        }
      })
  }, [])

  const handleSubmit = async (event) => {
    fetch('http://localhost:7000/api/createsubtitle',
      {
        method: 'POST',
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        },

        body: JSON.stringify({
          courseID: courseID,
          title:title,
          hours:Hours,
          videoLink:videolink,
          description:description,
          subtitleID:subtitleID
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

      <p1>
        Enter SubtitleID
      </p1>
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
          label='SubtitleID'
          type='username'
          id='username'
          autoComplete='current-username'
          value={subtitleID}
          onChange={(e) =>
            setsubtitleid(e.target.value)}
        />

      </Box>
      <p1>
        Enter Title
      </p1>
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
          name='password'
          label='Title'
          type='mn,'
          id='password'
          autoComplete='current-password'
          value={title}
          onChange={(e) =>
            settitle(e.target.value)}
        />

      </Box>
      <p1>
        Enter Hours
      </p1>
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
          label='Hours'
          type='username'
          id='username'
          autoComplete='current-username'
          value={Hours}
          onChange={(e) =>
            setHours(e.target.value)}
        />

      </Box>
      <p1>
        Enter CourseID
      </p1>
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
          name='password'
          label='CourseID'
          type='mnnbm'
          id='Price'
          autoComplete='current-password'
          value={courseID}
          onChange={(e) =>
            setCourseID(e.target.value)}
        />

      </Box>
      <p1>
        Enter VideoLink
      </p1>
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
          label='VideoLink'
          type='username'
          id='username'
          autoComplete='current-username'
          value={videolink}
          onChange={(e) =>
            setvideolink(e.target.value)}
        />

      </Box>
      <p1>
        Enter Description
      </p1>
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
          label='Description'
          type='username'
          id='username'
          autoComplete='current-username'
          value={description}
          onChange={(e) =>
            setdescription(e.target.value)}
        />

      </Box>

      <Button variant='contained' color='success' onClick={handleSubmit}>
        Update
      </Button>
    </div>
  )
}

export default Addsub
