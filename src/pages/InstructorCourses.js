import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from '@mui/material/Button';
import { useState } from "react";
import { useEffect } from "react";





function InstructorCourses(){

  const [courses, setcourses] = useState('');



 useEffect(() =>{
  fetch('http://localhost:7000/api/instructorCourses',
    {
    method:'POST',
    headers:{
      "Content-type":"application/json; charset=UTF-8"
    },
  
    body: JSON.stringify({
      userName:"inst1",
    })
   
      })
      .then(res => {
        return res.json()
      })
      .then(data => {
        setcourses(data)

      })
  
    },[]);
    return(

      <div>
          <Button variant="outlined" color="error">
        Decline
      </Button>
      </div>
    )
  
  







}


// const styles = theme => ({
//     root: {
//       width: "100%",
//       // maxWidth: 360,
//       overflow: "auto",
//       // maxHeight: 500,
//       backgroundColor: theme.palette.background.paper
//     }
//   });

//   class InstructorCourses extends React.Component {
//     state = {
//       checked: 0
//     };
  
//     handleToggle = value => () => {
//       this.setState({ checked: value });
//     };
  
//     render() {
//       const { classes } = this.props;

//       return (
//         <div>
          
//           <Button
//                  type="submit"
//                  variant="contained"
//                  sx={{ mt: 3, mb: 2 }}
//                >
//                  View My Courses
//                </Button>
//                <h1></h1>
//                <Button
//                  type="submit"
//                  variant="contained"
//                  sx={{ mt: 3, mb: 2 }}
//                >
//                  Search My Courses
//                </Button>
//         </div>
//       );
//     }
//   }

//   InstructorCourses.propTypes = {
//     classes: PropTypes.object.isRequired
//   };
  
//   export default withStyles(styles)(InstructorCourses);
  