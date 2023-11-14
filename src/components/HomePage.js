import React from 'react';
import { useState } from 'react';
import { BrowserRouter, Route, Switch, Navigate } from 'react-router-dom';
import SignUp from './SignUp';
import SignIn from './SingIn';
import Dashbord from './Dashbord';

const HomePage = (props) => {

    const [token, setToken] = useState();
    const [signIn, setSignIn] = useState(false);
  
    const changeSignUpSignIn = () => {
      setSignIn((signIn) => !signIn);
    };
    //debugger;
    return (
        <React.Fragment>
            {signIn ? <SignIn isSignIn={signIn} changeSignUpSignIn={changeSignUpSignIn}/>: <SignUp isSignIn={signIn} changeSignUpSignIn={changeSignUpSignIn}/>}
        </React.Fragment>
    )
}

export default HomePage;