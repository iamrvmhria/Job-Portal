// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Components/Home';
import Form from './Components/Form';
import SuccessPopUp from './Components/SuccessPopUp';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/form' element={<Form />} />
        <Route path='/success' element={<SuccessPopUp />} />
      </Routes>
    </Router>
  );
}

export default App;
