import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Predict from './Pages/Predict';
import Navbar from './Pages/Navbar';
import Footer from './Pages/Footer';
import Analytics from './Pages/Analytics';
import Newsletter from './Pages/Newsletter';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';


function App() {
  return (
    <BrowserRouter>
 <ToastContainer/>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/predict' element={<Predict/>}/>
        </Routes>
       
        {/* <Predict/>
        <Login/> */}
        <Footer/>
    </BrowserRouter>
    
    
  );
}

export default App;
