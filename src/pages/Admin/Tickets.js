import * as React from 'react'
import Button from '@mui/material/Button'
import Radio from '@mui/material/Radio'
import { useState, useEffect } from 'react'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import { useNavigate } from 'react-router-dom'

function Tickets () {
  const [tickets, settickets] = useState('')
  const [current, setcurrent] = useState('')
  const navigate = useNavigate()

  function handleClick21 () {
    window.localStorage.clear()
    navigate('/')
  }
  function handleClick22 () {
    if (window.localStorage.getItem('role') === 'individual user') { navigate('/Individualpage') } else if (window.localStorage.getItem('role') === 'admin') { navigate('/adminpage') } else if (window.localStorage.getItem('role') === 'instructor') { navigate('/Instructorpage') } else if (window.localStorage.getItem('role') === 'corporate user') { navigate('/Corporatepage') } else { navigate('/') }
  }

  useEffect(() => {
    fetch('http://localhost:7000/api/getalltickets',
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
        settickets(data)
        console.log(data)
      })
  },)

  const handleSubmit1 = async (event) => {
    fetch('http://localhost:7000/api/markaspending',
      {
        method: 'POST',
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        },

        body: JSON.stringify({
          ticketID:current
        })

      })
     
  }

  const handleSubmit2 = async (event) => {
    fetch('http://localhost:7000/api/markasresolved',
      {
        method: 'POST',
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        },

        body: JSON.stringify({

          ticketID:current
        })

      })
     
  }
  const handleSubmit3 = async (event) => {
    fetch('http://localhost:7000/api/deleteresolved',
      {
        method: 'POST',
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        },

        body: JSON.stringify({

          ticketID:current
        })

      })
 
  }

  return (

    <div>

      <FormControl>
        <FormLabel id='demo-controlled-radio-buttons-group'>Problem , Status ,Type</FormLabel>
        <RadioGroup
          aria-labelledby='demo-controlled-radio-buttons-group'
          name='controlled-radio-buttons-group'
          value={current}

          onChange={(e) => setcurrent(e.target.value)}
        >
          {tickets && tickets.map((ticket) => (
            <FormControlLabel value={ticket.ticketID} control={<Radio />} label={ticket.ticketText + " Status: " + ticket.ticketStatus + " Type: "+ ticket.ticketType} />
          ))}

        </RadioGroup>
      </FormControl>
      <div><Button variant='contained' color='success' onClick={handleSubmit1}>
        Mark as Pending
           </Button>
        <Button variant='contained' color='success' onClick={handleSubmit2}>
          Mark as Resolved
        </Button>
        <Button variant='contained' color='success' onClick={handleSubmit3}>
          Delete Problem
        </Button>
      </div>
    </div>

  )
}
export default Tickets
