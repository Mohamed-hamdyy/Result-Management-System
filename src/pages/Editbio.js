import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function Editbio() {
  return (
    <div>
        <p1>
                 Enter your new Biography.
        </p1>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '100ch' },
      }}
      noValidate
      autoComplete="off"
    >
       <TextField
          id="outlined-multiline-static"
          label="Multiline"
          multiline
          rows={4}
          defaultValue="Biography"
        />
    </Box>
    
    <p1>
                 Enter your new Email.
        </p1>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '50ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Email" variant="outlined" />
    </Box>

    <Button variant="contained" color="success">
        Update
      </Button>
    </div>

  );
}

export default Editbio

//23