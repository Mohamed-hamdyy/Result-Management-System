
function CoursePreview(){

    const [Courses, setCourses] = useState('');
    const [CourseID, setCourseID] = useState('');
    const [preview, setrasetpreviewtings] = useState('');



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
  
        
        fetch('http://localhost:7000/api/editpreview',
          {
          method:'POST',
          headers:{
            "Content-type":"application/json; charset=UTF-8"
          },
        
          body: JSON.stringify({
            courseID:courseID,
            preview:preview
          })
         
            })
            .then(res => {
              return res.json()
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
// import TextField from '@mui/material/TextField';

// function CoursePreview(){
//     const [age, setAge] = React.useState('');

//     const handleChange = (event) => {
//       setAge(event.target.value);
//     };

// return (
//     <div>
// <Box sx={{ minWidth: 120 }}>
   
//     <FormControl fullWidth>
//                 <InputLabel id="demo-simple-select-label">Please choose the Course. </InputLabel>
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
//         </Box>
//         <TextField id="outlined-basic" label="Link" variant="outlined" />
//     </div>
     
//         )}
//     export default CoursePreview
//     //19