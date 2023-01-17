// 15
import * as React from 'react'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'

function Contract () {
  const navigate = useNavigate()
  const [instructor, setinstructor] = useState('')
 
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
      <p>
        Creators should only upload videos that they have created themselves or that they have the appropriate rights to use.
        This means that they should not upload videos that they did not create themselves or use material in the videos that is copyrighted by someone else - e.g. B. Music tracks, excerpts from copyrighted programs or videos created by other users.
      </p>
      <Stack direction='row' spacing={2}>
        <Button variant='contained' color='success'>
          Accept
        </Button>
        <Button variant='outlined' color='error' onClick={handleClick1}>
          Decline
        </Button>
      </Stack>
    </div>

  )
}
export default Contract

// 15
