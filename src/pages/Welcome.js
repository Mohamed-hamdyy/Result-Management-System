import * as React from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

function Welcome(){

    const navigate = useNavigate()


    function handleClick1() {
        navigate("/AdminLogin");
      }

      function handleClick2() {
        navigate("/InstructorLogin");
      }

      function handleClick3() {
        navigate("/CorporateLogin");
      }

      function handleClick4() {
        navigate("/IndividualLogin");
      }

      function handleClick5() {
        navigate("/Signup");
      }
    

return(
    <div>
        <h1>
            Welcome!
        </h1>
       <div>
       <Button variant="contained" color="success" onClick={handleClick1}>
        Login As An Admin
        </Button>
       </div>
       <div>
       <Button variant="contained" color="success" onClick={handleClick2}>
        Login As An Instructor
        </Button>
       </div>
       <div>
       <Button variant="contained" color="success" onClick={handleClick3}>
        Login As A Corporate Trainee
        </Button>
       </div>
       <div>
       <Button variant="contained" color="success" onClick={handleClick4}>
       Login As An Individual Trainee
        </Button>
       </div>
       <div>
       <Button variant="contained" color="success" onClick={handleClick5}>
        Signup
        </Button>
       </div>
    </div>
)




}
export default Welcome