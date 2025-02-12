import React, { useState, useEffect } from 'react';
import { Outlet, useNavigation } from 'react-router-dom';
import Navbar from '../shared/Navbar';
import Footer from '../components/Footer';
import Loading from '../components/Loading';

const MainLayout = () => {
    const navigation = useNavigation(); // Track route transitions
    const [isLoading, setIsLoading] = useState(true); // Track initial loading

    // Detect when the initial page is fully loaded
    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 1000); // Simulate loading effect
        return () => clearTimeout(timer); // Cleanup
    }, []);

    if (isLoading || navigation.state === "loading") {
        return <Loading></Loading>
    }

    return (
        <div className='bg-white text-black dark:bg-gray-900 dark:text-white p-4'>
            <Navbar />

            {/* Show spinner if the page is initially loading or navigating */}

            <Outlet />

            <Footer />
        </div>
    );
};

export default MainLayout;