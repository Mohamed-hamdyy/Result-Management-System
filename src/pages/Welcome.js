import * as React from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';




import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';

export default function NestedList() {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Nested List Items
        </ListSubheader>
      }
    >
      <ListItemButton>
        <ListItemIcon>
          <SendIcon />
        </ListItemIcon>
        <ListItemText primary="Sent mail" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <DraftsIcon />
        </ListItemIcon>
        <ListItemText primary="Drafts" />
      </ListItemButton>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Inbox" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Starred" />
          </ListItemButton>
        </List>
      </Collapse>
    </List>
  );
}











// function Welcome(){

//     const navigate = useNavigate()


//     function handleClick1() {
//         navigate("/AdminLogin");
//       }

//       function handleClick2() {
//         navigate("/InstructorLogin");
//       }

//       function handleClick3() {
//         navigate("/CorporateLogin");
//       }

//       function handleClick4() {
//         navigate("/IndividualLogin");
//       }

//       function handleClick5() {
//         navigate("/Signup");
//       }
    

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