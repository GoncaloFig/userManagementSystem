import React, { useEffect, useState, useRef } from 'react';
import { Container, Typography, Button, Pagination, TextField  } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import { apiAllUsersService } from '../services/apiAllUsersService';
import CircularProgress from '@mui/material/CircularProgress';
import DeleteIcon from '@mui/icons-material/Delete';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import modalStyle from '../style/Modal.module.css';
import commonStyle from '../style/General.module.css';

import 'bootstrap/dist/css/bootstrap.min.css';

const DashbordListUsers = ({setDashAction, setAllUsers, allUsers}) => {
    //debugger;
    const navigate = useNavigate();
    const location = useLocation();
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [totalPages, setTotalPages] = useState(0);
    
    //Refs
    // let idRef = useRef('');
    // let fnameRef = useRef('');
    // let lnameRef = useRef('');
    // let emailRef = useRef('');

    const [userInputs, setUserInputs] = useState({
        id: '',
        firstName: '',
        lastName: '',
        email: '',
    });

    //Modal
    const [openModal, setOpenModal] = useState(false);
    const handleOpenModal = (row) => {
        setOpenModal(true);
        //debugger;
        setUserInputs({
            id: row.id,
            firstName: row.first_name,
            lastName: row.last_name,
            email: row.email,
        })
        
    };
    const handleCloseModal = () => setOpenModal(false);

    useEffect(() => {
        const fetchAllUsers = async () => {
            setLoading(true);
            setTimeout(async () => {
                const response = await apiAllUsersService(currentPage);
                //debugger;
                setAllUsers(response.data);
                console.log('->',response);
                setTotalPages(response.total_pages);
                setLoading(false);
            }, 1000);
        }
        fetchAllUsers();
    },[currentPage]);
    //debugger;
    if(loading){
        return <CircularProgress />
    }
    
    const handlePageChange = (event, value) => {
        setCurrentPage(value);
    };

    const goToNewUserForm = () => {
        const currentPath = location.pathname;
        const newPath = `${currentPath}/newUser`;
        setDashAction('n');
        navigate(newPath);
    }

    const deleteUser = (id) => {
        //debugger;
        const newUsersList = allUsers.filter((user) => user.id !== id);
        setAllUsers(newUsersList);
    }

    const handleUpdateUser = () => {
        //debugger;
        const indexToUpdate = allUsers.findIndex(user => user.id === userInputs.id);
        const updatedUsersList = [...allUsers];

        updatedUsersList[indexToUpdate] = {
            id: userInputs.id,
            first_name: userInputs.firstName,
            last_name: userInputs.lastName,
            email: userInputs.email,
        };

        setAllUsers(updatedUsersList);
        handleCloseModal();
    }
    
    const handleChangeUserInputs = (event, field) => {
        
        setUserInputs({
            ...userInputs,
            [field]: event.target.value,
        })
    };

    return (
        <div className="container mt-4">
            <table className={`table ${commonStyle.dashboardTable}`}>
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>Email</th>
                    <th>Fist Name</th>
                    <th>Last Name</th>
                    <th></th>
                    <th></th>
                    </tr>
                </thead>
                <tbody>
                    {allUsers?.map((row) => (
                    <tr key={row.id}>
                        <td>{row.id}</td>
                        <td>{row.email}</td>
                        <td>{row.first_name}</td>
                        <td>{row.last_name}</td>
                        <td><DeleteIcon style={{color: 'red', cursor: 'pointer'}} onClick={() => deleteUser(row.id)}></DeleteIcon></td>
                        <td><BorderColorIcon style={{color: 'black', cursor: 'pointer'}} onClick={() => handleOpenModal(row)}></BorderColorIcon></td>
                    </tr>
                    ))}
                </tbody>
            </table>
            <Pagination
                className={commonStyle.pagination}
                count={Math.ceil(totalPages)}
                page={currentPage}
                onChange={handlePageChange}
                color="primary"
            />
            {/* <button type="button" className='btn btn-primary' onClick={goToNewUserForm}>New User</button> */}
            <Modal
                align="center"
                open={openModal}
                onClose={handleCloseModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className={modalStyle.modalBox}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Update User
                </Typography>
                <form onSubmit={handleUpdateUser} className='newUserForm'>
                    <TextField fullWidth label="Id" name="id" className={commonStyle.inputFields} value={userInputs.id} margin="normal" disabled/>
                    <TextField fullWidth label="First Name" className={commonStyle.inputFields} name="fname" value={userInputs.firstName} onChange={(e) => handleChangeUserInputs(e, 'firstName')} margin="normal"/>
                    <TextField fullWidth label="Last Name" className={commonStyle.inputFields} name="lname" value={userInputs.lastName} onChange={(e) => handleChangeUserInputs(e, 'lastName')} margin="normal"/>
                    <TextField fullWidth label="Email" className={commonStyle.inputFields} name="email" value={userInputs.email} onChange={(e) => handleChangeUserInputs(e, 'email')} margin="normal"/>
                    <Button type="submit" variant="contained" color="primary" style={{ marginTop: '16px' }}>
                        Update
                    </Button>
                </form>       
                </Box>
            </Modal>
        </div>
    )
}

export default DashbordListUsers;