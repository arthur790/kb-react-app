import React from 'react'
import UserContextProvider from "../context/UserContext";
import { Outlet } from 'react-router-dom';

const RootLayout = () => {
    return (
        <UserContextProvider>
            <Outlet />
        </UserContextProvider>
    );
}

export default RootLayout