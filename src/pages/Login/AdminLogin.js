import * as React from 'react'
import Avatar from '@mui/material/Avatar'
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

function AdminLogin () {
  const [password, setpassword] = useState('')
  const [username, setusername] = useState('')
  const [data, setdata] = useState('')
  let token = ''
  let role = ''
  const navigate = useNavigate()

  function handleClick1 () {
    navigate('/')
  }

  function handleClick21 () {
    window.localStorage.clear()
    navigate('/')
  }
  function handleClick22 () {
    if (window.localStorage.getItem('role') === 'individual user') { navigate('/Individualpage') } else if (window.localStorage.getItem('role') === 'admin') { navigate('/adminpage') } else if (window.localStorage.getItem('role') === 'instructor') { navigate('/Instructorpage') } else if (window.localStorage.getItem('role') === 'corporate user') { navigate('/Corporatepage') } else { navigate('/') }
  }

  const handleSubmit = async (event) => {
    fetch('http://localhost:7000/api/adminlogin',
      {
        method: 'POST',
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        },

        body: JSON.stringify({
          userName: username,
          password
        })

      })
      .then(res => {
        return res.json()
      })
      .then(data => {
        setdata(data)
        token = data.token
        role = data.role
        if (data.message === 'Success') {
          window.localStorage.setItem('token', token)
          window.localStorage.setItem('role', role)
          window.localStorage.setItem('id', 'null')
          handleClick1()
        }
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
      <div>
        <br />
        <p1>
          Enter Username
        </p1>
      </div>
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
          label='username'
          type='username'
          id='username'
          autoComplete='current-username'
          value={username}
          onChange={(e) =>
            setusername(e.target.value)}
        />

      </Box>
      <p1>
        Enter Password
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
          label='Password'
          type='password'
          id='password'
          autoComplete='current-password'
          value={password}
          onChange={(e) =>
            setpassword(e.target.value)}
        />

      </Box>

      <Button variant='contained' color='success' onClick={handleSubmit}>
        Login
      </Button>
    </div>
  )
}
export default AdminLogin
