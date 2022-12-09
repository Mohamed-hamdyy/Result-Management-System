import {BrowserRouter , Routes , Route}  from 'react-router-dom'

import SignIn from './pages/SignIn';
import AddAdministrator from './pages/AddAdministrator';
import AddInstructor from './pages/AddInstructor';
import AddCorporateTrainees from './pages/AddCorporateTrainees';
import CreateQuestion from './pages/CreateQuestion';
import Exam from './pages/Exam';
import InstructorExam from './pages/InstructorExam';
import InstructorCourses from './pages/InstructorCourses';
import InstructorCoursesTable from './pages/InstructorCoursesTable';
import InstructorCoursesSearch from './pages/InstructorCoursesSearch';






function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <div className='pages'>
        <Routes>

          <Route path ="/" element ={<SignIn />}/>
          <Route path ="/s" element ={<AddAdministrator />}/>
          <Route path ="/AddInstructor" element ={<AddInstructor />}/>
          <Route path ="/AddCorporateTrainees" element ={<AddCorporateTrainees />}/>
          <Route path ="/CreateQuestion" element ={<CreateQuestion />}/>
          <Route path ="/Exam" element ={<Exam />}/>
          <Route path ="/InstructorExam" element ={<InstructorExam />}/>
          <Route path ="/InstructorCourses" element ={<InstructorCourses />}/>
          <Route path ="/InstructorCoursesTable" element ={<InstructorCoursesTable />}/>
          <Route path ="/InstructorCoursesSearch" element ={<InstructorCoursesSearch />}/>




        </Routes>


      </div>
      
      
      </BrowserRouter>

    </div>
  );
}

export default App;
