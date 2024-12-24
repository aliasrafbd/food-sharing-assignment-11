import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const FoodCard = ({ food }) => {

    const { _id, foodName, foodImage, foodQuantity, pickupLocation, additionalNotes, expiredDate, donatorImage, name, userEmail, foodStatus } = food;

    return (
        <div className='border border-red-500 p-4'>
            <h1><span className='text-2xl font-bold'>{foodName}</span></h1>
            <h2>Food ID: {_id}</h2>
            <br />
            {expiredDate}
            <Link className='border-b-2 mt-6 w-28 flex justify-center text-blue-600 hover:border-b-red-600 mx-auto text-center' to={`/food/${_id}`}>View Details...</Link>
        </div>
    );
};

export default FoodCard;