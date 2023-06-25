import {BrowserRouter , Routes , Route}  from 'react-router-dom'
import Student from './Pages/Student/Student';
import Home from './Pages/Home/Home';
import AdminHome from './Pages/Admin/AdminHome';
import AddCourse from './Pages/Admin/AddCourse';
import AddAdmin from './Pages/Admin/AddAdmin';
import RemoveCourse from './Pages/Admin/RemoveCourse';
import AddGrade from './Pages/Admin/AddGrade';
import QuizNo from './Pages/Admin/QuizNo';
import Quiz from './Pages/Admin/Quiz';
import Exam from './Pages/Admin/Exam';
import Login from './Pages/Login/Login';
import Register from './Pages/Login/Register';
import ExamNo from './Pages/Admin/ExamNo';
import WeightCourse from './Pages/Admin/WeightCourse';
import AddWeight from './Pages/Admin/AddWeight';
import InstructorHome from './Pages/Instructor/InstructorHome';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <div className='pages'>
        <Routes>

            <Route path='/' element={<Home />} />
            <Route path='/student' element={<Student />} />
            <Route path='/adminHome' element={<AdminHome />} />
            <Route path='/InstructorHome' element={<InstructorHome />} />
            <Route path='/admin/addCourse' element={<AddCourse />} />
            <Route path='/admin/addAdmin' element={<AddAdmin />} />
            <Route path='/admin/RemoveCourse' element={<RemoveCourse />} />
            <Route path='/Instructor/AddGrade' element={<AddGrade />} />
            <Route path='/Instructor/AddGrade/QuizNo' element={<QuizNo />} />
            <Route path='/Instructor/AddGrade/ExamNo' element={<ExamNo />} />
            <Route path='/Instructor/AddGrade/Quiz' element={<Quiz />} />
            <Route path='/Instructor/AddGrade/Exam' element={<Exam />} />
            <Route path='/admin/AddWeight' element={<WeightCourse />} />
            <Route path='/admin/AddWeight/Course' element={<AddWeight />} />
            <Route path='/Login' element={<Login />} />
            <Route path='/Register' element={<Register />} />

       

       
        </Routes>


      </div>
      
      
      </BrowserRouter>

    </div>
  );
}

export default App;
