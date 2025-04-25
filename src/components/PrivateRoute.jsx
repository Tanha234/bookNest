// src/components/PrivateRoute.js
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { getAuth } from 'firebase/auth'; // Import Firebase auth

const PrivateRoute = ({ element }) => {
  const user = getAuth().currentUser; // Check if the user is authenticated
  const location = useLocation(); // Get the current location (for redirect)

  // If the user is not authenticated, redirect to the login page and save the current location
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  // If authenticated, return the element (the component for the route)
  return element;
};

export default PrivateRoute;
