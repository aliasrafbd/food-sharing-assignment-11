import React, { useContext } from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext/AuthContext';
import Loading from '../components/Loading';

const PrivateRoute = ({children}) => {

    const { user, loading } = useContext(AuthContext);
    // const location = useLocation();

    const pathname = useLocation();

    if(loading) {
        return <Loading></Loading>
        // return <Navigate to = {"/login"}></Navigate>
    }

    if(user && user?.email) {
        return children;
    }

    return <Navigate to = {"/login"}></Navigate>

};

export default PrivateRoute;