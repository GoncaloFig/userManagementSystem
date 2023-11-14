import React, { useState, useRef } from 'react';
import { Container, TextField, Button, Typography } from '@mui/material';
import { apiNewUserService } from '../services/apiNewUserService';
import { BrowserRouter, Route, Switch, Navigate,useNavigate  } from 'react-router-dom';
import commonStyle from '../style/General.module.css';

const DashboardNewUser = ({setAllUsers, allUsers}) => {

    const navigate = useNavigate();
    
    const [combinedUsers, setCombinedUsers] = useState(allUsers);

    const fnameRef = useRef(null);
    const lnameRef = useRef(null);
    const jobRef = useRef(null);
    const emailRef = useRef(null);

    const handleSubmitNewUser = async(event) => {
        event.preventDefault();
        const userInput = {
            fname: fnameRef.current.value,
            lname: lnameRef.current.value,
            job: jobRef.current.value,
            email: emailRef.current.value,
        }
        console.log('allUsers-> ', allUsers.data);
        //debugger;
        const response = await apiNewUserService(userInput);
        
        const newUserObj = {id: response.id, email: userInput.email, first_name: userInput.fname, last_name: userInput.lname, avatar: 'example'}
        setAllUsers(prevDataList => [...prevDataList, newUserObj])

        fnameRef.current.value = '';
        lnameRef.current.value = '';
        jobRef.current.value = '';
        emailRef.current.value = '';
        
    };

    return (
        <Container maxWidth="sm" style={{ marginTop: '50px', marginBottom: '50px' }}>
            <Typography variant="h4" align="center" gutterBottom>
                Create new user
            </Typography>
            <form onSubmit={handleSubmitNewUser}>
                <TextField
                    fullWidth
                    label="First Name"
                    name="fname"
                    inputRef={fnameRef}
                    className={commonStyle.inputFields}
                    // value={formData.name}
                    // onChange={handleChange}
                    margin="normal"
                    required
                />
                <TextField
                    fullWidth
                    label="Last Name"
                    name="lname"
                    inputRef={lnameRef}
                    className={commonStyle.inputFields}
                    // value={formData.name}
                    // onChange={handleChange}
                    margin="normal"
                    required
                />
                <TextField
                    fullWidth
                    label="Job"
                    name="job"
                    inputRef={jobRef}
                    className={commonStyle.inputFields}
                    // value={formData.name}
                    // onChange={handleChange}
                    margin="normal"
                    required
                />
                <TextField
                    fullWidth
                    label="Email"
                    name="email"
                    inputRef={emailRef}
                    className={commonStyle.inputFields}
                    // value={formData.name}
                    // onChange={handleChange}
                    margin="normal"
                    required
                />
                <Button type="submit" variant="contained" color="primary" style={{ marginTop: '16px' }}>
                    Create
                </Button>
            </form>
        </Container>
    )
}

export default DashboardNewUser;