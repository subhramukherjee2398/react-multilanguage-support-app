
import './App.css';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Header from './components/Header';

function App() {
  return (
     <Router>
        <Header/>
       <Routes>
         <Route exact path='/' element={<Home/>}/>
         <Route exact path='/profile' element={<Profile/>}/>
       </Routes>
     </Router>
  );
}

export default App;
