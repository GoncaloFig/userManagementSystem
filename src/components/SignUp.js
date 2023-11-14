import React, {useState} from 'react';
import { Container, TextField, Button, Typography } from '@mui/material';
import { useNavigate  } from 'react-router-dom';
import { apiSignUpService } from '../services/apiSignUpService';
import signCss from '../style/Sign.module.css';

const SignUp = (props) => {

    const navigate = useNavigate();

    let email = '';
    let password = '';
    let confirmPassword = '';

    const [formError, setFormError] = useState({
        email: "",
        password: "",
        confirmPassword: "",
    });

    const validateSignUp = (event) => {
        //debugger;
        email = event.target.email.value;
        password = event.target.password.value;
        confirmPassword = event.target.confirmPassword.value;

        event.preventDefault();
        let inputError = {
          email: "",
          password: "",
          confirmPassword: "",
        }
        //debugger;
        if (password !== confirmPassword) {
          setFormError({
            ...inputError,
            confirmPassword: "Password and confirm password should be same",
          });
          return;
        }else{
            handleSignUp(email,password);
        }
        
    };

    const handleSignUp = async (event) => {
        
        const resData = await apiSignUpService(email, password);
        
  
        navigate('/welcomePage');
        console.log(resData);
        return resData.token;
    }

    return (
        <React.Fragment>
            <Container maxWidth="xs" style={{ marginTop: '2%' }}>
                <Typography variant="h4" align="center" gutterBottom>
                    Sign Up
                </Typography>
                <form onSubmit={validateSignUp}>
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

                    <TextField
                    fullWidth
                    label="Confirm Password"
                    type="password"
                    name="confirmPassword"
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
                    Sign Up
                    </Button>

                    <Button
                    type="button"
                    variant="contained"
                    color="secondary"
                    fullWidth
                    style={{ marginTop: '16px' }}
                    onClick={props.changeSignUpSignIn}
                    >
                    Go to Sign In
                    </Button>
                </form>
                <p className={`${signCss.password_error}`}>{formError.confirmPassword}</p>
            </Container>
        </React.Fragment>

    )
}

export default SignUp;