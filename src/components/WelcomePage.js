import React, {useEffect, useState, useContext} from 'react';
import { Container, Typography, Button } from '@mui/material';
import DashbordListUsers from './DashboardListUsers';
import DashboardNewUser from './DashboardNewUser';
import { useNavigate } from 'react-router-dom';
import { apiAllUsersServiceCombinedPages } from '../services/apiAllUsersService';
import {AuthContext} from '../App';

const WelcomePage = (props) => {
  const navigate = useNavigate();
  const [actualUser, setActualUser] = useState();
  const [userName, setUserName] = useState();

  const [isAuthenticated, setIsAuthenticated, isAdmin, setIsAdmin] = useContext(AuthContext);
  //debugger;
  const getAllUsersApi = async() =>{
      const userId = localStorage.getItem('userId');
      //debugger
      const response = await apiAllUsersServiceCombinedPages();
      const user = response.find(user => user.id == userId);
      setUserName(user ? user.first_name : null);
      setActualUser(userId ? true : false);
      if(userName){
        setIsAdmin(false);
      }
      // console.log('user->', user);
  }

  useEffect(() => {
      getAllUsersApi();
  }, [navigate]);
  

  const goToDashboard = () => {
      navigate('/dashboard');
  }
    
  return (
    <Container maxWidth="sm" style={{ marginTop: '50px' }}>
      {/* <Typography variant="h2" align="center" data-testWelcomeTitle="welcome-title" gutterBottom>
        Welcome {actualUser || !isAdmin ? actualUser.first_name : 'Admin'}
        {!actualUser || !isAdmin ? actualUser.first_name : 'Guest'}
      </Typography> */}
      { isAdmin &&
        <Typography variant="h2" align="center" data-testWelcomeTitle="welcome-title" gutterBottom>
          Welcome Admin
        </Typography>
      }
      { (!isAdmin && actualUser) &&
        <Typography variant="h2" align="center" data-testWelcomeTitle="welcome-title" gutterBottom>
          Welcome {userName}
        </Typography>
      }
      { (!isAdmin && !actualUser) &&
        <Typography variant="h2" align="center" data-testWelcomeTitle="welcome-title" gutterBottom>
          Welcome Guest
        </Typography>
      }

      {(!actualUser && isAdmin) &&
      <Button type="button" variant="contained" color="primary" onClick={goToDashboard} data-btndashboard="goToDashboard" style={{ marginTop: '16px' }}>
          Go to Dashboard
      </Button>
      }
    </Container>
  )
}
export default WelcomePage;