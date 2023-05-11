import React from 'react';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';

const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    if(loading){
        return <progress className="progress w-56"></progress>
    }
    if(user?.email){
        return children
    }
    return <Navigate to="/login" replace></Navigate>;
};

export default PrivateRoutes;