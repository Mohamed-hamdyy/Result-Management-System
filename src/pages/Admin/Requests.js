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
import Label from '@mui/material/FormLabel'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { Await, json, useNavigate } from 'react-router-dom'

function Requests () {
  const [requests, setrequests] = useState('')
  const [current, setcurrent] = useState('')
  const [user, setuser] = useState('')
  const [id, setid] = useState('')
  let x=[]
  
  const navigate = useNavigate()

  function handleClick21 () {
    window.localStorage.clear()
    navigate('/')
  }
  function handleClick22 () {
    if (window.localStorage.getItem('role') === 'individual user') { navigate('/Individualpage') } else if (window.localStorage.getItem('role') === 'admin') { navigate('/adminpage') } else if (window.localStorage.getItem('role') === 'instructor') { navigate('/Instructorpage') } else if (window.localStorage.getItem('role') === 'corporate user') { navigate('/Corporatepage') } else { navigate('/') }
  }

  useEffect(() => {
    fetch('http://localhost:7000/api/getallrequests',
      {
        method: 'POST',
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        },

        body: JSON.stringify({

        })

      })
      .then(res => {
        return res.json()
      })
      .then(data => {
        setrequests(data)
       
      })
  },)

  const handleSubmit1 = async (event) => {
   
    fetch('http://localhost:7000/api/acceptrequest',
      {
        method: 'POST',
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        },

        body: JSON.stringify({
          current:current 
         
        })

      })
      .then(res => {
        return res.json()
      })
  }

  const handleSubmit2 = async (event) => {
    fetch('http://localhost:7000/api/rejectrequest',
      {
        method: 'POST',
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        },

        body: JSON.stringify({

          current:current 
        })

      })
      .then(res => {
        return res.json()
      })
  }

  return (

    <div>

      <FormControl>
        <FormLabel id='demo-controlled-radio-buttons-group'>Requests</FormLabel>
        <RadioGroup
          aria-labelledby='demo-controlled-radio-buttons-group'
          name='controlled-radio-buttons-group'
          value={current}
          onChange={(e) => setcurrent(e.target.value)}
        >
          {requests && requests.map((request) => (
            <FormControlLabel value={request.CourseID + " "+ request.userName} control={<Radio />} label={request.CourseID} />
          ))}
          
          

        </RadioGroup>
      </FormControl>
      <div><Button variant='contained' color='success' onClick={handleSubmit1}>
        Accept
           </Button>
        <Button variant='contained' color='success' onClick={handleSubmit2}>
          Reject
        </Button>
      </div>
    </div>

  )
}
export default Requests
