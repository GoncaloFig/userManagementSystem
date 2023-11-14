import React, {useState} from 'react';
import { Container, Typography, Button } from '@mui/material';
import DashbordListUsers from './DashboardListUsers';
import DashboardNewUser from './DashboardNewUser';
import { BrowserRouter, Route, Switch, Navigate, useNavigate } from 'react-router-dom';

const Dashbord = (props) => {
    //debugger;
    const [allUsers, setAllUsers] = useState(null);

    const [dashAction, setDashAction] = useState(props.dashAction);
    let optionElement ;

    switch(dashAction){
      case 'd':
        optionElement = <DashbordListUsers setDashAction={setDashAction}/>
      break;
      case 'n':
        optionElement = <DashboardNewUser setDashAction={setDashAction}/>
      break;
      default:
        optionElement = <DashbordListUsers setDashAction={setDashAction}/>
    }
    
    return (
      <Container maxWidth="sm" style={{ marginTop: '50px' }}>
        <Typography variant="h2" align="center" gutterBottom>
          Dashbord
        </Typography>
        <DashbordListUsers setAllUsers={setAllUsers} allUsers={allUsers}/>
        <DashboardNewUser setAllUsers={setAllUsers} allUsers={allUsers}/>
      </Container>
    )
}

export default Dashbord;