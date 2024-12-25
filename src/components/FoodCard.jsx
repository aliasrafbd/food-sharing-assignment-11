import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import React, { useContext, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import AuthContext from '../context/AuthContext/AuthContext';

const FoodCard = ({ food }) => {

    const {user} = useContext(AuthContext);

    const { _id, foodName, foodImage, foodQuantity, pickupLocation, additionalNotes, expiredDate, donatorImage, foodDonatorName, foodDonatorEmail, foodStatus } = food;

    return (
        <div className='border-b-2'>
            <img 
            data-aos="zoom-in"
            className='w-full object-contain rounded-lg mb-2' src={foodImage} alt="" />
            <h1><span className='text-lg font-bold mb-2'>{foodName}</span></h1>
            <h2 className='text-sm text-gray-500'>Food ID: {_id}</h2>
            <h2 className='text-sm text-gray-500 mb-4'>Expired Date: {expiredDate}</h2>
            
            <h2 className='text-sm text-gray-500 mb-4'>Food Quantity: <span className='font-bold'>{foodQuantity}</span></h2>

            <Link className='text-md mb-4 flex transition duration-300 justify-end font-semibold text-red-700 hover:text-blue-700 mt-4' to={user ? `/food/${_id}` : "/login" }>MORE DETAILS</Link>
        </div>
    );
};

export default FoodCard;