import React from 'react'
import { Outlet, Navigate } from 'react-router-dom';
import { SIGN_IN_PATH } from '../constants';
import {useAuthStatus} from '../hooks/useAuthStatus';

export default function PrivateRoute() {
  const { isLoggedIn, loading } = useAuthStatus();

  if (loading) {
    return <div>Loading...</div>;
  }

  return isLoggedIn ? <Outlet /> : <Navigate to={SIGN_IN_PATH} />;
}
