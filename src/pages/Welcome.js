import * as React from 'react'
import Button from '@mui/material/Button'
import { useNavigate } from 'react-router-dom'
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

export default function Welcome () {
  const [open, setOpen] = React.useState(false)
  const navigate = useNavigate()

  function handleClick1 () {
    navigate('/AdminLogin')
  }

  function handleClick2 () {
    navigate('/InstructorLogin')
  }

  function handleClick3 () {
    navigate('/CorporateLogin')
  }

  function handleClick4 () {
    navigate('/IndividualLogin')
  }

  function handleClick5 () {
    navigate('/Signup')
  }
  function handleClick6 () {
    navigate('/forgetpass')
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
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary='Login As' />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout='auto' unmountOnExit>
        <List component='div' disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary='Admin' onClick={handleClick1} />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary='Instructor' onClick={handleClick2} />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary='Corporate Trainee' onClick={handleClick3} />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary='Individual Trainee' onClick={handleClick4} />
          </ListItemButton>
        </List>
      </Collapse>
      <ListItemButton>
        <ListItemIcon>
          <SendIcon />
        </ListItemIcon>
        <ListItemText primary='Sign Up' onClick={handleClick5} />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <SendIcon />
        </ListItemIcon>
        <ListItemText primary='Reset Password' onClick={handleClick6} />
      </ListItemButton>
    </List>
  )
}

// function Welcome(){

// return(
//     <div>
//         <h1>
//             Welcome!
//         </h1>
//        <div>
//        <Button variant="contained" color="success" onClick={handleClick1}>
//         Login As An Admin
//         </Button>
//        </div>
//        <div>
//        <Button variant="contained" color="success" onClick={handleClick2}>
//         Login As An Instructor
//         </Button>
//        </div>
//        <div>
//        <Button variant="contained" color="success" onClick={handleClick3}>
//         Login As A Corporate Trainee
//         </Button>
//        </div>
//        <div>
//        <Button variant="contained" color="success" onClick={handleClick4}>
//        Login As An Individual Trainee
//         </Button>
//        </div>
//        <div>
//        <Button variant="contained" color="success" onClick={handleClick5}>
//         Signup
//         </Button>
//        </div>
//     </div>
// )

// }
// export default Welcome
