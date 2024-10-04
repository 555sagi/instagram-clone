
import './App.css';

import Login from './Components/Registration/Login';
import Signup from './Components/Registration/Signup';
import {Routes,Route} from 'react-router-dom';
import PasswordRecovery from './Components/Registration/PasswordRecovery';

function App() {
  return (
    <div className="App">
      
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/recover' element={<PasswordRecovery />} />
   </Routes> 
     

    </div>
  );
}

export default App;
