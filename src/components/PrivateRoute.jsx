import React from 'react'
import { Outlet, Navigate } from 'react-router-dom';
import { SIGN_IN_PATH } from '../constants';

export default function PrivateRoute() {
    const isLoggedIn = false; // Replace with actual authentication logic
  return isLoggedIn ? <Outlet /> : <Navigate to={SIGN_IN_PATH} />;
}
