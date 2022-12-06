import {BrowserRouter , Routes , Route}  from 'react-router-dom'

import SignIn from './pages/SignIn';
import AddAdministrator from './pages/AddAdministrator';
import AddInstructor from './pages/AddInstructor';
import AddCorporateTrainees from './pages/AddCorporateTrainees';




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




        </Routes>


      </div>
      
      
      </BrowserRouter>

    </div>
  );
}

export default App;
