
import './App.css';
import Home from './screens/Home';
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom';
import Login from './screens/Login';

import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import SignUp from './screens/Signup.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route  path="/" element={<Home/>}/>
        <Route path='/login' element ={<Login/>}/>
        <Route path='/createuser' element ={<SignUp/>}/>
      </Routes>
    </Router>
    
  );
}
 
export default App;
