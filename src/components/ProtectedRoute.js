import React, {useState} from 'react';
import { Outlet, Navigate } from 'react-router-dom'

const ProtectedRoute = ({element}) => {
    let auth = {'token': false}
    const [authenticated, setAuthenticated] = useState(localStorage.getItem('userToken') ? true : false);
    //debugger
    return(
        authenticated ? element : <Navigate to="/"/>
    )
}

export default ProtectedRoute
