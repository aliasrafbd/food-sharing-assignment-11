import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const FoodCard = ({ food }) => {

    const { _id, foodName, foodImage, foodQuantity, pickupLocation, additionalNotes, expiredDate, donatorImage, foodDonatorName, foodDonatorEmail, foodStatus } = food;
    
    return (
        <div className='border-b-2'>
            <img 
            data-aos="zoom-in"
            className='w-full object-contain rounded-lg mb-2' src={foodImage} alt="" />
            <h1><span className='text-lg font-bold mb-2'>{foodName}</span></h1>
            <h2 className='text-sm text-gray-500 mb-4'>Food ID: {_id}</h2>

            {/* <div className='text-sm space-y-2'>
                <p>• Food Quantity: {foodQuantity}</p>
                <p>• Expired Date: {expiredDate}</p>
                <p>• Donator Name: {foodDonatorName}</p>
                <p>• Food Donator Email: {foodDonatorEmail}</p>
                <p>• Food Status: {foodStatus}</p>
            </div> */}
            <Link className='text-md mb-4 flex transition duration-300 justify-end font-semibold text-red-700 hover:text-blue-700 mt-4' to={`/food/${_id}`}>MORE DETAILS</Link>
        </div>
    );
};

export default FoodCard;