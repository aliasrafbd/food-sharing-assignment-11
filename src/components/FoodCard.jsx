import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const FoodCard = ({ food }) => {

    const { _id, foodName, foodImage, foodQuantity, pickupLocation, additionalNotes, expiredDate, donatorImage, foodDonatorName, foodDonatorEmail, foodStatus } = food;

    return (
        <div className='border-b-2'>
            <img className='w-full object-contain rounded-lg mb-2' src={foodImage} alt="" />
            <h1><span className='text-lg font-bold mb-2'>{foodName}</span></h1>
            <h2 className='text-sm text-gray-500 mb-4'>Food ID: {_id}</h2>

            {/* <div className='text-sm space-y-2'>
                <p>• Food Quantity: {foodQuantity}</p>
                <p>• Expired Date: {expiredDate}</p>
                <p>• Donator Name: {foodDonatorName}</p>
                <p>• Food Donator Email: {foodDonatorEmail}</p>
                <p>• Food Status: {foodStatus}</p>
            </div> */}
            <Link className='text-md mb-4 flex justify-end font-semibold text-red-600 mt-4' to={`/food/${_id}`}>View Details...</Link>
        </div>
    );
};

export default FoodCard;