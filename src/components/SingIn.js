import React , {useEffect, useContext} from 'react';
import { Container, TextField, Button, Typography } from '@mui/material';
import { BrowserRouter, Route, Switch, Navigate,useNavigate  } from 'react-router-dom';
import { apiSignInService } from '../services/apiSignInService';
import commonStyle from '../style/General.module.css';

import {AuthContext} from '../App';

const SignIn = (props) => {

    const [isAuthenticated, setIsAuthenticated] = useContext(AuthContext);
    const navigate = useNavigate();

    const storedToken = localStorage.getItem('userToken');
    useEffect(() => {
     
     if(storedToken){
       console.log('Auto logged, token:', storedToken);
       navigate('/welcomePage');
     }
 
    },[]
    );

    const handleSignIn = async (event) => {
        event.preventDefault();

        const email = event.target.email.value;
        const password = event.target.password.value;
        
       // try{
            const resData = await apiSignInService(email, password);
            setIsAuthenticated(true);
            navigate('/welcomePage');
            console.log(resData);
            return resData.token;
      //  }
        // catch(error){
        //     alert(error);
        // }

    }

    return (
        <React.Fragment>
            <Container maxWidth="xs" style={{ marginTop: '2%' }}>
                <Typography variant="h4" align="center" gutterBottom>
                    Sign In
                </Typography>
                <form onSubmit={handleSignIn}>
                    <TextField
                    fullWidth
                    label="Email"
                    type="email"
                    name="email"
                    margin="normal"
                    variant="outlined"
                    className={commonStyle.inputFields}
                    required
                    />

                    <TextField
                    fullWidth
                    label="Password"
                    type="password"
                    name="password"
                    margin="normal"
                    variant="outlined"
                    className={commonStyle.inputFields}
                    required
                    />

                    <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    style={{ marginTop: '16px' }}
                    >
                    Sign In
                    </Button>

                    <Button
                    type="button"
                    variant="contained"
                    color="secondary"
                    fullWidth
                    style={{ marginTop: '16px' }}
                    onClick={props.changeSignUpSignIn}
                    >
                    Go to Sign Up
                    </Button>
                </form>
            </Container>
        </React.Fragment>
    )
}

export default SignIn;