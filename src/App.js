import {BrowserRouter , Routes , Route}  from 'react-router-dom'

import SignIn from './pages/SignIn';
import AddAdministrator from './pages/AddAdministrator';
import AddInstructor from './pages/AddInstructor';
import AddCorporateTrainees from './pages/AddCorporateTrainees';
import TraineeHome from'./pages/Trainees/TraineeHome';
import AllCourses from './pages/Trainees/AllCourses'
import TraineeCourse from './pages/Trainees/TraineeCourse';
import SearchCourses from './pages/Trainees/SearchCourses';
import CourseDetails from './pages/Course/CourseDetails';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <div className='pages'>
        <Routes>

          <Route path ="/" element ={<SignIn />}/>
          <Route path ="/AddAdministrator" element ={<AddAdministrator />}/>
          <Route path ="/AddInstructor" element ={<AddInstructor />}/>
          <Route path ="/AddCorporateTrainees" element ={<AddCorporateTrainees />}/>
          <Route path ="/TraineeHome" element ={<TraineeHome />}/>
          <Route path ="/Trainee/AllCourses" element ={<AllCourses/>}/>
          <Route path ="/TraineeCourse" element ={<TraineeCourse/>}/>
          <Route path ="/SearchCourses" element ={<SearchCourses/>}/>
          <Route path ="/Filter" element ={<CourseDetails/>}/>
          
          



        </Routes>


      </div>
      
      
      </BrowserRouter>

    </div>
  );
}

export default App;
