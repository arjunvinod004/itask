import './App.css';
import Home from './components/Home';
import Signin from './components/Signin';
import Signup from './components/Signup';
import {BrowserRouter,Route,Routes} from 'react-router-dom'

function App() {
  return (
    <div className="App">
    
    <BrowserRouter>
<Routes>
  <Route path='/' element={<Signup/>}/>
  <Route path='/signin' element={<Signin/>}/>
  <Route path='/home' element={<Home/>}/>
</Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
