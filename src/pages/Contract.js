import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

function Contract() {
  const navigate = useNavigate();
  
  const navigateToSignin = () => {
    navigate('/');
  };



  return (
    <div>
      <p>      
      Creators should only upload videos that they have created themselves or that they have the appropriate rights to use.
      This means that they should not upload videos that they did not create themselves or use material in the videos that is copyrighted by someone else - e.g. B. Music tracks, excerpts from copyrighted programs or videos created by other users.           
      </p>
  <Stack direction="row" spacing={2}>
      <Button variant="contained" color="success">
        Accept
      </Button>
      <Button variant="outlined" color="error" onClick={navigateToSignin}>
        Decline
      </Button>
    </Stack>
    </div>
  
  );
}
export default Contract

// 15