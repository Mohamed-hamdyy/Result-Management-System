
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';

function Editbio(){

  const [miniBio, setminiBio] = useState('');
  const [email, setemail] = useState('');


 const handleSubmit = async(event) => {
  
        
        fetch('http://localhost:7000/api/editemailbio',
          {
          method:'POST',
          headers:{
            "Content-type":"application/json; charset=UTF-8"
          },
        
          body: JSON.stringify({
            instructorUsername:"inst1",
            miniBio:miniBio,
            email:email
          })
         
            })
            .then(res => {
              return res.json()
            })
        
              };

return (
  
  <div>

  <p1>
   Enter your New E-mail
    </p1>
    <Box
    component="form"
    sx={{
    '& > :not(style)': { m: 1, width: '50ch' },
    }}
    noValidate
    autoComplete="off"
    >
    <TextField
                   margin="normal"
                   required
                   fullWidth
                   name="username"
                   label="E-mail"
                   type="username"
                   id="username"
                   autoComplete="current-username"
                   value={email}
                   onChange={(e)=>
                   setemail(e.target.value)}
                 />
    
    </Box>
    <p1>
    Change your miniBio
    </p1>
    <Box
    component="form"
    sx={{
    '& > :not(style)': { m: 1, width: '50ch' },
    }}
    noValidate
    autoComplete="off"
    >
    <TextField
                   margin="normal"
                   required
                   fullWidth
                   name="password"
                   label="Mini Bio"
                   type="mnmn"
                   id="password"
                   autoComplete="current-password"
                   value={miniBio}
                   onChange={(e)=>
                   setminiBio(e.target.value)}
                 />
    
    </Box>
    
    <Button variant="contained" color="success" onClick={handleSubmit}>
    Update
    </Button>
      </div>
        );


}


export default Editbio



















