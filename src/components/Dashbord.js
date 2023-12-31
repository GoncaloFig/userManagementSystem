import React, {useState,useContext, useEffect} from 'react';
import { Container, Typography, Button } from '@mui/material';
import DashbordListUsers from './DashboardListUsers';
import DashboardNewUser from './DashboardNewUser';
import { BrowserRouter, Route, Switch, Navigate, useNavigate } from 'react-router-dom';
import {AuthContext} from '../App';


const Dashbord = (props) => {
    //debugger;
    const [isAuthenticated, setIsAuthenticated, isAdmin, setIsAdmin] = useContext(AuthContext);

    const [allUsers, setAllUsers] = useState([]);
    const [displayedUsers, setDisplayedUsers] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
      if (!isAdmin) {
        navigate('/welcomePage');
      }
    }, [isAdmin, navigate]);

    const [dashAction, setDashAction] = useState(props.dashAction);
    let optionElement ;

    // switch(dashAction){
    //   case 'd':
    //     optionElement = <DashbordListUsers setDashAction={setDashAction}/>
    //   break;
    //   case 'n':
    //     optionElement = <DashboardNewUser setDashAction={setDashAction}/>
    //   break;
    //   default:
    //     optionElement = <DashbordListUsers setDashAction={setDashAction}/>
    // }
    
    return (
      <Container maxWidth="sm" style={{ marginTop: '50px' }}>
        <Typography variant="h3" align="center" gutterBottom data-testDashTitle="dashboard-title">
          Dashboard
        </Typography>
        <DashbordListUsers setAllUsers={setAllUsers} allUsers={allUsers} displayedUsers={displayedUsers} setDisplayedUsers={setDisplayedUsers} totalPages={totalPages} setTotalPages={setTotalPages}/>
        <DashboardNewUser setAllUsers={setAllUsers} allUsers={allUsers} displayedUsers={displayedUsers} setDisplayedUsers={setDisplayedUsers} totalPages={totalPages} setTotalPages={setTotalPages}/>
      </Container>
    )
}

export default Dashbord;