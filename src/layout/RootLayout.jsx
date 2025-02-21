import React from 'react'
import UserContextProvider from "../context/UserContext";
import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';

const RootLayout = () => {
    return (
        <UserContextProvider>
            <NavBar />
            <Outlet />
        </UserContextProvider>
    );
}

export default RootLayout