import React from 'react';
import { Container, TextField, Button, Typography } from '@mui/material';
import { BrowserRouter, Route, Switch, Navigate,useNavigate  } from 'react-router-dom';
import { apiSignInService } from '../services/apiSignInService';

const SignIn = (props) => {

    const navigate = useNavigate();

    const handleSignIn = async (event) => {
        event.preventDefault();

        const email = event.target.email.value;
        const password = event.target.password.value;
        
       // try{
            const resData = await apiSignInService(email, password);
            navigate('/dashboard');
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
                    required
                    />

                    <TextField
                    fullWidth
                    label="Password"
                    type="password"
                    name="password"
                    margin="normal"
                    variant="outlined"
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