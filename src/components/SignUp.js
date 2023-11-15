import React, {useState, useEffect, useContext} from 'react';
import { Container, TextField, Button, Typography } from '@mui/material';
import { useNavigate  } from 'react-router-dom';
import { apiSignUpService } from '../services/apiSignUpService';
import { useOutletContext } from "react-router-dom";
import signStyle from '../style/Sign.module.css';
import commonStyle from '../style/General.module.scss';

import {AuthContext} from '../App';

const SignUp = (props) => {

    const [isAuthenticated, setIsAuthenticated] = useContext(AuthContext);
    const [showError, setShowError] = useState(false);

    const storedToken = localStorage.getItem('userToken');
    useEffect(() => {
     
    if(storedToken){
       console.log('Auto logged, token:', storedToken);
       navigate('/welcomePage');
     }
 
    },[]
    );

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
            setShowError(true);
            setFormError({
                ...inputError,
                confirmPassword: "Password and confirm password should be equal",
            });
            return;
        }else{
            handleSignUp(email,password);
        }
        
    };

    const handleSignUp = async (event) => {
        
        const resData = await apiSignUpService(email, password);
        
        setIsAuthenticated(true);
        navigate('/welcomePage');
        console.log(resData);
        return resData.token;
    }

    const handlePasswordFocus = () => {
        setShowError(false);
    };

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
                    className={commonStyle.inputFields}
                    data-emailfield="email"
                    required
                    InputProps={{
                        inputProps: {
                            maxLength: 60,
                        },
                    }}
                    />

                    <TextField
                    fullWidth
                    label="Password"
                    type="password"
                    name="password"
                    margin="normal"
                    variant="outlined"
                    className={`${commonStyle.inputFields}`}
                    data-passwordfield="passwordfield"
                    onFocus={handlePasswordFocus}
                    InputProps={{
                        inputProps: {
                            maxLength: 100,
                        },
                    }}
                    required
                    />

                    <TextField
                    fullWidth
                    label="Confirm Password"
                    type="password"
                    name="confirmPassword"
                    margin="normal"
                    variant="outlined"
                    className={`${commonStyle.inputFields}`}
                    data-confpasswordfield="confpasswordfield"
                    onFocus={handlePasswordFocus}
                    required
                    InputProps={{
                        inputProps: {
                            maxLength: 100,
                        },
                    }}
                    />
                    {showError && <p className={`${signStyle.password_error}`}>{formError.confirmPassword}</p>}

                    <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    style={{ marginTop: '16px' }}
                    data-signupbtn="signupbtn"
                    className='signupbtn'
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
                    data-gotosignin="goToSignIn"
                    >
                    Go to Sign In
                    </Button>
                </form>
            </Container>
        </React.Fragment>

    )
}

export default SignUp;