import MaterialUISwitch from '../common/MaterialUISwitch';
import React, { useEffect, useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import Switch,{ SwitchProps } from '@mui/material/Switch';
import commonStyle from '../style/General.module.css';
import { Navigate,useNavigate  } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import FormControlLabel from '@mui/material/FormControlLabel';
const label = { inputProps: { 'aria-label': 'Switch demo' } };

const NavBar = ({isAuthenticated, setIsAuthenticated}) => {

  const navigate = useNavigate();

  const [token, setToken] = useState(localStorage.getItem('userToken'));
  const [switchSelected, setSwitchSelected] = useState(localStorage.getItem("theme") == "dark" ? true : false);

  //debugger;
  const setToDarkMode = () => {
    document.querySelector("body").setAttribute('data-theme', 'dark');
    //document.querySelector(".nav").setAttribute('data-themenav', 'dark');

  }
  const setToLightMode = () => {
    document.querySelector("body").setAttribute('data-theme', 'light');
    //document.querySelector(".nav").setAttribute('data-themenav', 'light');
  }

  const [navColor, setNavColor] = useState({
    backgroundColor: '#1976D2',
  });

  useEffect(() => {
    if(localStorage.getItem("theme") == "dark"){
      setNavColor({
        backgroundColor: 'black',
        color: 'white',
      });
    }else{
      setNavColor({
        backgroundColor: '#1976D2',
      });
    }
  },[])

  
  const toggleThemeChange = (e) => {
    if (e.target.checked) {
      setSwitchSelected(true);
      setToDarkMode();
      localStorage.setItem("theme", "dark");
      setNavColor({
        backgroundColor: 'black',
        color: 'white',
      });
      
    }else{
      setSwitchSelected(false);
      setToLightMode();
      localStorage.setItem("theme", "light");
      setNavColor({
        backgroundColor: '#1976D2',

      });
    } 
  }

  const handleLogOut = () => {
    localStorage.clear();
    setIsAuthenticated(false);
    navigate('/');
  }

  return (
    <AppBar position="static" className={commonStyle.nav} style={navColor} id="navigationBar">
      {/* <div className={commonStyle} style={{width: '100px', height: '100px', background: 'black'}}></div> */}
      <Toolbar>
        <Typography variant="h6" component={Link} to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          User Management System
        </Typography>
          {isAuthenticated && (
            <div style={{ marginLeft: 'auto' }}>
              <Button color="inherit" component={Link} to="/welcomePage" >
                Welcome Page
              </Button>
              <Button color="inherit" component={Link} to="/dashboard" >
                Dashboard
              </Button>
                
              <Button color="inherit" onClick={handleLogOut}>
                Log Out
              </Button>
              <FormControlLabel className='darkModeSwitch' data-switch="darkModeSwitch"
                checked={switchSelected}
                // style={{ ...(token ? { marginLeft: '' } : {marginLeft: 'auto'}) }}
                control={<MaterialUISwitch sx={{ m: 1 }} />}
                onChange={toggleThemeChange}
              />
            </div>
          )
          }
          {/* <Switch {...label} onChange={toggleThemeChange} color="default" /> */}

      </Toolbar>
    </AppBar>
  )
}

export default NavBar;