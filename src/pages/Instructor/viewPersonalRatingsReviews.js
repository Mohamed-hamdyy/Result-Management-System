import * as React from 'react';
import Box from '@mui/material/Box';
import Label from '@mui/material/FormLabel';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState } from 'react';
import { useEffect } from 'react';

function ViewPersonalRatingsReviews(){

    const [ratings, setratings] = useState('');
    const [userName, setUserName] = useState('');



    useEffect(() =>{
        fetch('http://localhost:7000/api/viewPersonalRatingsReviews',
          {
          method:'POST',
          headers:{
            "Content-type":"application/json; charset=UTF-8"
          },
        
          body: JSON.stringify({
            instructorUsername:"OMARK",
          })
         
            })
            .then(res => {
              return res.json()
            })
            .then(data => {
              setratings(data)

              
       
            })
        
          },[]);

    return (
      <div>
      <h1>Rating
        <h2></h2>
      <Label>
    {ratings.rating}
  </Label>
  </h1>


      <><Box sx={{ minWidth: 120 }}>
        </Box><TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Ratings</TableCell>
                            <TableCell>Review</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {ratings.reviewarr&&ratings.reviewarr.map((rating) => (
                            <TableRow
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell align="left">{rating.rating}</TableCell>
                                <TableCell align="left">{rating.text}</TableCell>
                                

                            </TableRow>
                        ))}


                    </TableBody>
                </Table>
            </TableContainer></>
   
    </div>
)}

export default ViewPersonalRatingsReviews

// // 22