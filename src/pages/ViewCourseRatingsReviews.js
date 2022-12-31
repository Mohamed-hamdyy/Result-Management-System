
function ViewCourseRatingsReviews(){


    const [Courses, setCourses] = useState('');
    const [CourseID, setCourseID] = useState('');
    const [ratings, setratings] = useState('');



    useEffect(() =>{
   fetch('http://localhost:7000/api/filtercoursesubjectinstructor',
     {
     method:'POST',
     headers:{
       "Content-type":"application/json; charset=UTF-8"
     },
   
     body: JSON.stringify({
       instructoruUsername:"inst1",
     })
    
       })
       .then(res => {
         return res.json()
       })
       .then(data => {
         setCourses(data)
         console.log(data)
         
  
       })
   
     },[]);


     const handleSubmit = async(event) => {
  
        
        fetch('http://localhost:7000/api/viewCourseRatingsReviews',
          {
          method:'POST',
          headers:{
            "Content-type":"application/json; charset=UTF-8"
          },
        
          body: JSON.stringify({
            userName:"inst1",
            courseID:courseID
          })
         
            })
            .then(res => {
              return res.json()
            })
            .then(data => {
                setdata(data)
                console.log(data)
              })
          
        
              };
   





}




































// import * as React from 'react';
// import Box from '@mui/material/Box';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';

// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

// function Ratingsandreviews() {
//     const [age, setAge] = React.useState('');

//     const handleChange = (event) => {
//       setAge(event.target.value);
//     };
  
//     return (
//       <><Box sx={{ minWidth: 120 }}>
//             <FormControl fullWidth>
//                 <InputLabel id="demo-simple-select-label">Age</InputLabel>
//                 <Select
//                     labelId="demo-simple-select-label"
//                     id="demo-simple-select"
//                     value={age}
//                     label="Age"
//                     onChange={handleChange}
//                 >
//                     <MenuItem value={10}>Ten</MenuItem>
//                     <MenuItem value={20}>Twenty</MenuItem>
//                     <MenuItem value={30}>Thirty</MenuItem>
//                 </Select>
//             </FormControl>
//         </Box><TableContainer component={Paper}>
//                 <Table sx={{ minWidth: 650 }} aria-label="simple table">
//                     <TableHead>
//                         <TableRow>
//                             <TableCell>Dessert (100g serving)</TableCell>
//                             <TableCell align="right">Calories</TableCell>
//                             <TableCell align="right">Fat&nbsp;(g)</TableCell>
//                             <TableCell align="right">Carbs&nbsp;(g)</TableCell>
//                             <TableCell align="right">Protein&nbsp;(g)</TableCell>
//                         </TableRow>
//                     </TableHead>
//                     <TableBody>
//                         {rows.map((row) => (
//                             <TableRow
//                                 key={row.name}
//                                 sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//                             >
//                                 <TableCell component="th" scope="row">
//                                     {row.name}
//                                 </TableCell>
//                                 <TableCell align="right">{row.calories}</TableCell>
//                                 <TableCell align="right">{row.fat}</TableCell>
//                                 <TableCell align="right">{row.carbs}</TableCell>
//                                 <TableCell align="right">{row.protein}</TableCell>
//                             </TableRow>
//                         ))}
//                     </TableBody>
//                 </Table>
//             </TableContainer></>
//     );
// }
// export default Ratingsandreviews

// // 17
