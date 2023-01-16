import * as React from 'react'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

function Changepass () {
  const { type } = useParams()
  const { username } = useParams()
  const [Password, setPassword] = useState('')
  const [admin, setadmin] = useState('')
  const [corporate, setcorporate] = useState('')
  const [instructor, setinstructor] = useState('')

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

  useEffect(() => {
    Promise.all([
      fetch('http://localhost:7000/api/adminverify',
        {
          method: 'POST',
          headers: {
            'Content-type': 'application/json; charset=UTF-8'
          },

          body: JSON.stringify({
            token: window.localStorage.getItem('token')
          })

        }),
      fetch('http://localhost:7000/api/corporateuserverify',
        {
          method: 'POST',
          headers: {
            'Content-type': 'application/json; charset=UTF-8'
          },

          body: JSON.stringify({
            token: window.localStorage.getItem('token')
          })

        }),
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
    ])
      .then(([resadmin, rescorporate, resinstructor]) =>
        Promise.all([resadmin.json(), rescorporate.json(), resinstructor.json()])

      )
      .then(([dataadmin, datacorporate, datainstructor]) => {
        setadmin(dataadmin)
        setcorporate(datacorporate)
        setinstructor(datainstructor)
        console.log(admin)
        console.log(corporate)
        console.log(instructor)
        if (admin === 'redirect' && corporate === 'redirect' && instructor === 'redirect') {
          handleClick1()
        }
      })
  }, [])

  const handleSubmit = async (event) => {
    fetch('http://localhost:7000/api/userresetpass',
      {
        method: 'POST',
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        },

        body: JSON.stringify({
          userName: username,
          type,
          password: Password
        })

      })
      .then(res => {
        return res.json()
      })
  }

  return (
    <div>
      <p1>
        Change your Password
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
          value={Password}
          onChange={(e) =>
            setPassword(e.target.value)}
        />

      </Box>
      <Button variant='contained' color='success' onClick={handleSubmit}>
        Update
      </Button>
    </div>
  )
}
export default Changepass
