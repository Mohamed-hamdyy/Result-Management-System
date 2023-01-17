import * as React from 'react'
import ListSubheader from '@mui/material/ListSubheader'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Collapse from '@mui/material/Collapse'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import DraftsIcon from '@mui/icons-material/Drafts'
import SendIcon from '@mui/icons-material/Send'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import StarBorder from '@mui/icons-material/StarBorder'
import AddIcon from '@mui/icons-material/Add'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

export default function NestedList () {
  const [open, setOpen] = React.useState(false)
  const navigate = useNavigate()
  function handleClick100 () {
    navigate('/')
  }
  useEffect(() => {
    fetch('http://localhost:7000/api/adminverify',
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
          handleClick100()
        }
      })
  }, [])

  function handleClick1 () {
    navigate('/')
  }
  function handleClick2 () {
    navigate('/')
  }
  function handleClick3 () {
    navigate('/Requests')
  }
  function handleClick4 () {
    navigate('/Tickets')
  }
  function handleClick5 () {
    navigate('/Promotion')
  }
  function handleClick6 () {
    navigate('/Refund')
  }
  function handleClick7 () {
    navigate('/AddInstructor')
  }
  function handleClick8 () {
    navigate('/AddCorporateTrainees')
  }
  function handleClick9 () {
    navigate('/addadmin')
  }

  const handleClick = () => {
    setOpen(!open)
  }

  return (
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component='nav'
      aria-labelledby='nested-list-subheader'
      subheader={
        <ListSubheader component='div' id='nested-list-subheader'>
          Menu
        </ListSubheader>
      }
    >
      <ListItemButton>
        <ListItemIcon>
          <AddIcon />
        </ListItemIcon>
        <ListItemText primary='Refunds'onClick={handleClick6} />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <AddIcon />
        </ListItemIcon>
        <ListItemText primary='Promotion'onClick={handleClick5} />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <AddIcon />
        </ListItemIcon>
        <ListItemText primary='Tickets'onClick={handleClick4}/>
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <DraftsIcon />
        </ListItemIcon>
        <ListItemText primary='Requests' onClick={handleClick3}/>
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary='Add Users' onClick={handleClick} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout='auto' unmountOnExit>
        <List component='div' disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary='Add Admin' onClick={handleClick9} />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary='Add Corporate Trainee' onClick={handleClick8} />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary='Add Instructor' onClick={handleClick7} />
          </ListItemButton>
        </List>
      </Collapse>
    </List>
  )
}
