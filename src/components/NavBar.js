import MaterialUISwitch from '../common/MaterialUISwitch';
import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import Switch,{ SwitchProps } from '@mui/material/Switch';
import commonStyle from '../style/General.module.css';
import { styled } from '@mui/material/styles';
import FormControlLabel from '@mui/material/FormControlLabel';
const label = { inputProps: { 'aria-label': 'Switch demo' } };

const NavBar = (props) => {

  const [token, setToken] = useState(localStorage.getItem('userToken'));
  const [switchSelected, setSwitchSelected] = useState(localStorage.getItem("theme") == "dark" ? true : false);

  //debugger;
  const setToDarkMode = () => {
    document.querySelector("body").setAttribute('data-theme', 'dark');
  }
  const setToLightMode = () => {
    document.querySelector("body").setAttribute('data-theme', 'light');
  }
  
  const toggleThemeChange = (e) => {
    if (e.target.checked) {
      setToDarkMode();
      localStorage.setItem("theme", "dark");
      setSwitchSelected(true);
    }else{
      setToLightMode();
      localStorage.setItem("theme", "light");
      setSwitchSelected(false);
    } 
  }

  return (
    <AppBar position="static" className={`nav ${commonStyle.headerNav}`}>
      <Toolbar>
        <Typography variant="h6" component={Link} to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          User Management System
        </Typography>
          {token && (
            <React.Fragment>
              <Button color="inherit" component={Link} to="/dashboard" style={{ marginLeft: 'auto' }}>
                Dashboard
              </Button>
                
              <Button color="inherit">
                Log Out
              </Button>
              <FormControlLabel className='darkModeSwitch'
                checked={switchSelected}
                // style={{ ...(token ? { marginLeft: '' } : {marginLeft: 'auto'}) }}
                control={<MaterialUISwitch sx={{ m: 1 }} />}
                onChange={toggleThemeChange}
              />
            </React.Fragment>
          )
          }
          {/* <Switch {...label} onChange={toggleThemeChange} color="default" /> */}

      </Toolbar>
    </AppBar>
  )
}

export default NavBar;