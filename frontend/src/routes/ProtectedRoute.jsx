import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom';

const ProtectedRoute = ({ requiredRole}) => {

  // Later Implement 
  return <Outlet />;
};

export default ProtectedRoute;