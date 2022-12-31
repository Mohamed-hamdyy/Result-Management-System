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


function createcourse(){

    const [CourseID, setCourseID] = useState('');
    const [title, settitle] = useState('');
    const [totalHours, settotalHours] = useState('');
    const [price, setprice] = useState('');
    const [subject, setsubject] = useState('');


    const handleSubmit = async(event) => {
  
        
        fetch('http://localhost:7000/api/createCourse',
          {
          method:'POST',
          headers:{
            "Content-type":"application/json; charset=UTF-8"
          },
        
          body: JSON.stringify({
            instructorUsername:"inst1",
            CourseID:CourseID,
            title:title,
            totalHours:totalHours,
            price:price,
            subject:subject
          })
         
            })
            .then(res => {
              return res.json()
            })
        
              };

}