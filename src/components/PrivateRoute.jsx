import React from 'react'
import { Outlet, Navigate } from 'react-router-dom';
import { SIGN_IN_PATH } from '../constants';
import {useAuthStatus} from '../hooks/useAuthStatus';
import Spinner from '../components/Spinner';

export default function PrivateRoute() {
  const { isLoggedIn, loading } = useAuthStatus();

  if (loading) {
    return <Spinner />;
  }

  return isLoggedIn ? <Outlet /> : <Navigate to={SIGN_IN_PATH} />;
}
