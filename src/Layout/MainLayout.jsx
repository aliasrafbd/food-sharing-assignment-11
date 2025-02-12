import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../shared/Navbar';
import Footer from '../components/Footer';

const MainLayout = () => {
    return (
        <div className='bg-white text-black dark:bg-gray-900 dark:text-white p-4'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;