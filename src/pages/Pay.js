import * as React from 'react';
import {useLocation} from 'react-router-dom';

function Pay(){

    const location = useLocation();


    return (

<div>
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
                   label="Card Number"
                   type="username"
                   id="username"
                   autoComplete="current-username"
                 />
    
    </Box>
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
                   label="Expiry Date"
                   type="username"
                   id="username"
                   autoComplete="current-username"
                 />
    
    </Box>
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
                   label="CVC"
                   type="username"
                   id="username"
                   autoComplete="current-username"
                 />
    
    </Box>
    <Button variant="contained" color="success" onClick={handleSubmit}>
  Pay
  </Button>
</div>
    )
}



export default Pay