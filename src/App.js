import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch, Navigate, useNavigate } from 'react-router-dom';
import SignUp from './components/SignUp';
import SignIn from './components/SingIn';
import Dashbord from './components/Dashbord';
import HomePage from './components/HomePage';
import { Outlet } from 'react-router-dom';
import NavBar from './components/NavBar';


function App() {
  const navigate = useNavigate();

  const themeSelected = localStorage.getItem("theme");
  if(themeSelected){
    document.querySelector("body").setAttribute('data-theme', themeSelected);
  }

  const storedToken = localStorage.getItem('userToken');
   useEffect(() => {
    
    if(storedToken){
      console.log('Auto logged, token:', storedToken);
      navigate('/welcomePage');
    }

   },[]
   );
   

  return (
    <div className="App">
      <NavBar className="NavBar"/>
      <Outlet/>
    </div>
  );
}

export default App;
