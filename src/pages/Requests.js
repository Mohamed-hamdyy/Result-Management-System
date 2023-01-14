import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
import { useEffect } from 'react';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useNavigate } from 'react-router-dom';

function Requests(){

    const [requests, setrequests] = useState('');
    const [current, setcurrent] = useState('');
    const navigate = useNavigate();
    
    function handleClick1() {
      window.localStorage.clear();
        navigate("/");
      }

    useEffect(() =>{
      fetch('http://localhost:7000/api/getallrequests',
        {
        method:'POST',
        headers:{
          "Content-type":"application/json; charset=UTF-8"
        },
      
        body: JSON.stringify({
       
        })
       
          })
          .then(res => {
            return res.json()
          })
          .then(data => {
            setrequests(data)
            console.log(data)
            
     
          })
      
        },[]);

        const handleSubmit1 = async(event) => {
  
        
          fetch('http://localhost:7000/api/acceptrequest',
            {
            method:'POST',
            headers:{
              "Content-type":"application/json; charset=UTF-8"
            },
          
            body: JSON.stringify({
              userName:current.userName,
              courseID:current.courseID
            })
           
              })
              .then(res => {
                return res.json()
              })
          
                };


  const handleSubmit2 = async(event) => {
  
        
    fetch('http://localhost:7000/api/rejectrequest',
      {
      method:'POST',
      headers:{
        "Content-type":"application/json; charset=UTF-8"
      },
    
      body: JSON.stringify({
       
        userName:current.userName,
        courseID:current.courseID
      })
     
        })
        .then(res => {
          return res.json()
        })
    
              };


    return(

        <div>

        <FormControl>
              <FormLabel id="demo-controlled-radio-buttons-group">Requests</FormLabel>
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={current}
                
                onChange={(e)=> setcurrent(e.target.value)}
                
        
              >
                   {requests && requests.map((request) => (
                <FormControlLabel value={request} control={<Radio />} label={request.userName}/>
                ))}
        
              </RadioGroup>
            </FormControl>
            <div><Button variant="contained" color="success" onClick={handleSubmit1}>
        Accept
        </Button>
        <Button variant="contained" color="success" onClick={handleSubmit2}>
        Reject
        </Button></div>
        </div>
        
        )
        




}
export default Requests