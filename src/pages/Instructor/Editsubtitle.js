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

function Editsubtitle () {
  const [Courses, setCourses] = useState('')
  const [current, setcurrent] = useState('')
  const [subtitleID, setsubtitleID] = useState('')
  const [Subtitles, setSubtitles] = useState('')
  const [description, setdescription] = useState('')
  const [videoLink, setvideoLink] = useState('')
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
        setCourses(data)
      })
  }, [])

  const handleSubmit = async (event) => {
    fetch('http://localhost:7000/api/editsubtitle',
      {
        method: 'POST',
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        },

        body: JSON.stringify({
          subtitleID: current,
          videoLink,
          description
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
      <FormControl>
        <FormLabel id='demo-controlled-radio-buttons-group'>Courses</FormLabel>
        <RadioGroup
          aria-labelledby='demo-controlled-radio-buttons-group'
          name='controlled-radio-buttons-group'
          value={Subtitles}
          onChange={(e) => setSubtitles(e.target.value.split(','))}
        >
          {Courses && Courses.map((Course) => (
            <FormControlLabel value={Course.subtitles} control={<Radio />} label={Course.title} />
          ))}

        </RadioGroup>
      </FormControl>
      <p1>
        Subtitles
      </p1>
      <FormControl>
        <FormLabel id='demo-controlled-radio-buttons-group'>Subtitles</FormLabel>
        <RadioGroup
          aria-labelledby='demo-controlled-radio-buttons-group'
          name='controlled-radio-buttons-group'
          value={current}
          onChange={(e) => setcurrent(e.target.value)}
        >
          {console.log(Subtitles)}
          {Subtitles && Subtitles.map((subtitle) => (
            <FormControlLabel value={subtitle} control={<Radio />} label={subtitle} />
          ))}

        </RadioGroup>
      </FormControl>
      <p1>
        Youtube Link
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
          name='preview'
          label='Link'
          type='preview'
          id='[preview]'
          autoComplete='current-password'
          value={videoLink}
          onChange={(e) =>
            setvideoLink(e.target.value)}
        />

      </Box>
      <p1>
        Description
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
          name='preview'
          label='Description'
          type='preview'
          id='[preview]'
          autoComplete='current-password'
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

export default Editsubtitle
