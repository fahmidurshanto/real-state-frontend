import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <>
           <div>
           <Navbar></Navbar>
           <Outlet></Outlet>
           </div>
        </>
    );
};

export default Layout;