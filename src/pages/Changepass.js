import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function Changepass() {
    return (
<div>
<p1>
Change your Password
</p1>
<Box
component="form"
sx={{
'& > :not(style)': { m: 1, width: '50ch' },
}}
noValidate
autoComplete="off"
>
<TextField id="outlined-basic" label="New Password" variant="outlined" />
</Box>
<p1>
Confirm your Password
</p1>
<Box
component="form"
sx={{
'& > :not(style)': { m: 1, width: '50ch' },
}}
noValidate
autoComplete="off"
>
<TextField id="outlined-basic" label="Confirm New Password" variant="outlined" />
</Box>
<Button variant="contained" color="success">
Update
</Button>
  </div>
    );
}
export default Changepass