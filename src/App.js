import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch, Navigate, useNavigate } from 'react-router-dom';
import SignUp from './components/SignUp';
import SignIn from './components/SingIn';
import React from 'react';
import Dashbord from './components/Dashbord';
import HomePage from './components/HomePage';
import { Outlet } from 'react-router-dom';
import NavBar from './components/NavBar';
import ProtectedRoute from './components/ProtectedRoute';

export const AuthContext = React.createContext()

function App() {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAdmin, setIsAdmin] = useState(localStorage.getItem('userToken') == 'adminToken12345');
  const [userToken, setUserToken] = useState(localStorage.getItem('userToken'));
//debugger
  const themeSelected = localStorage.getItem("theme");
  if(themeSelected){
    document.querySelector("body").setAttribute('data-theme', themeSelected);
    //document.querySelector("AppBar").setAttribute('data-theme', themeSelected);
  }

  useEffect(() => {
    const storedToken = localStorage.getItem('userToken');
    if(storedToken){
      console.log('Auto logged, token:', storedToken);
      setIsAuthenticated(true);
    }
    //debugger
   },[]
  );
   

  return (
    <div className="App">
      <NavBar isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} isAdmin={isAdmin} setIsAdmin={setIsAdmin}/>
      <AuthContext.Provider value={[isAuthenticated, setIsAuthenticated, isAdmin, setIsAdmin, userToken]}>
        <Outlet/>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
