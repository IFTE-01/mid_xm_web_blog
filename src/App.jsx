import './App.css';
import Navbar from './nav';
import Home from './Home'
import Dash from './dashboard';
import Login from './Login';
import Signup from './Signup';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Card_info from './Card_info' ;
import "./index.css";
function App() {
    
  return(
    <>
    <BrowserRouter> 
    <Routes>
      {/* Note : 
      basic about path and element : 
      path: tells React Router which page (URL) the user is going to
      element: tells React Router which component (function) to show on that page. */}
      <Route path="/" element ={<section><Navbar/>,<Home/></section>}/>
      <Route path="/Home/:cardId" element ={<><Navbar/><Card_info/></>}/> 
      <Route path="/Login" element={<><Navbar/><Login/></>}/>
      <Route path="/Signup" element={<><Navbar/><Signup/></>}/>
      
    </Routes>
    </BrowserRouter>
    {/* 
    BrowserRouter = eta loading na kore onno page e jete help kore
    routes = sob route ke handle kore... 
    */}
    </>
  )
}

export default App;
