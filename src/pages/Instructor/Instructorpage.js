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

export default function Instructorpage () {
  const [open, setOpen] = React.useState(false)
  const [open2, setOpen2] = React.useState(false)
  const [open3, setOpen3] = React.useState(false)
  const navigate = useNavigate()
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
          handleClick100()
        }
      })
  }, [])
  function handleClick100 () {
    navigate('/')
  }

  function handleClick1 () {
    navigate('/CoursesTitles')
  }
  function handleClick2 () {
    navigate('/filtercourses')
  }
  function handleClick3 () {
    navigate('/Filtercoursesubjectinstructor')
  }
  function handleClick4 () {
    navigate('/contract')
  }
  function handleClick5 () {
    navigate('/ViewPersonalRatingsReviews')
  }
  function handleClick6 () {
    navigate('/ViewCourseRatingsReviews')
  }
  function handleClick7 () {
    navigate('/coursepreview')
  }
  function handleClick8 () {
    navigate('/Editsubtitle')
  }
  function handleClick9 () {
    navigate('/editbio')
  }
  function handleClick10 () {
    navigate('/promotion')
  }
  function handleClick14 () {
    navigate('/mostviewed')
  }
  const handleClick = () => {
    setOpen(!open)
  }
  const handleClick13 = () => {
    setOpen3(!open3)
  }
  const handleClick12 = () => {
    setOpen2(!open2)
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
        <ListItemText primary='Courses Titles' onClick={handleClick1} />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <DraftsIcon />
        </ListItemIcon>
        <ListItemText primary='Filter Courses' onClick={handleClick} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout='auto' unmountOnExit>
        <List component='div' disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary='Based on Subject or Price' onClick={handleClick2} />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary='Based on Course title, Subject or Instructor' onClick={handleClick3} />
          </ListItemButton>
        </List>
      </Collapse>
      <ListItemButton>
        <ListItemIcon>
          <AddIcon />
        </ListItemIcon>
        <ListItemText primary='Contract' onClick={handleClick4} />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <DraftsIcon />
        </ListItemIcon>
        <ListItemText primary='Reviews' onClick={handleClick12} />
        {open2 ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open2} timeout='auto' unmountOnExit>
        <List component='div' disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary='Personal Reviews' onClick={handleClick5} />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Course's reviews" onClick={handleClick6} />
          </ListItemButton>
        </List>
      </Collapse>
      <ListItemButton>
        <ListItemIcon>
          <DraftsIcon />
        </ListItemIcon>
        <ListItemText primary='Upload a Youtube video link' onClick={handleClick13} />
        {open3 ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open3} timeout='auto' unmountOnExit>
        <List component='div' disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary='As a preview to the couurse' onClick={handleClick7} />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary='For each subtitle and add discription' onClick={handleClick8} />
          </ListItemButton>
        </List>
      </Collapse>
      <ListItemButton>
        <ListItemIcon>
          <AddIcon />
        </ListItemIcon>
        <ListItemText primary='Edit your Bio or Email' onClick={handleClick9} />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <AddIcon />
        </ListItemIcon>
        <ListItemText primary='Define a Promotion for a Course' onClick={handleClick10} />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <AddIcon />
        </ListItemIcon>
        <ListItemText primary='Most Viewed Courses' onClick={handleClick14} />
      </ListItemButton>
    </List>
  )
}
