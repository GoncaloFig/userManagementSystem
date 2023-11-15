import React, {useEffect, useState} from 'react';
import { Container, Typography, Button } from '@mui/material';
import DashbordListUsers from './DashboardListUsers';
import DashboardNewUser from './DashboardNewUser';
import { useNavigate } from 'react-router-dom';
import { apiAllUsersServiceCombinedPages } from '../services/apiAllUsersService';

const WelcomePage = (props) => {
     const navigate = useNavigate();
     const [actualUser, setActualUser] = useState();

    const getAllUsersApi = async() =>{
        const userId = localStorage.getItem('userId');

        const response = await apiAllUsersServiceCombinedPages();
        const user = response.find(user => user.id == userId);
        setActualUser(user);
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
        <Typography variant="h2" align="center" data-testWelcomeTitle="welcome-title" gutterBottom>
          Welcome {actualUser ? actualUser.first_name : 'Guest'}
        </Typography>
        <Button type="button" variant="contained" color="primary" onClick={goToDashboard} data-btnDashboard="goToDashboard" style={{ marginTop: '16px' }}>
            Go to Dashboard
        </Button>
      </Container>
    )
}
export default WelcomePage;