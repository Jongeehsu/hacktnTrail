import React from 'react'
import { Outlet } from 'react-router-dom';
import SignAndLog from './SignAndLog';

const useAuth =() => {

    const user = {LoggedIn: false};
    return user && user.LoggedIn;
}

const ProtectedRoutes = () => {
    const isAuth = useAuth();
  return (
    isAuth ? <Outlet/> : <SignAndLog/>
  )
}

export default ProtectedRoutes