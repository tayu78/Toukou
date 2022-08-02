import React from 'react';
import { Navigate,Outlet } from 'react-router-dom';

const PrivateRoute = ({ user, children }) => {
    
    if (!user) {
        return <Navigate to="/signUp" />
    }
    
    return children ? children : <Outlet />
}

export default PrivateRoute