import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import FoodDetailsModal from '../components/FoodDetailsModal';
import AuthContext from '../context/AuthContext/AuthContext';
import Swal from 'sweetalert2';

const FoodDetails = () => {

    const { availableFoods, reqFoodData, setReqFoodData, user, setAvailableFoods } = useContext(AuthContext);

    const { id } = useParams();

    const navigate = useNavigate();

    const [food, setFood] = useState({});

    useEffect(() => {
        // fetch(`http://localhost:4000/availablefoods/:id`)
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data);
        //         setFood(data);
        //     })

        axios.get(`http://localhost:4000/availablefoods/${id}`)
            .then(res => {
                setFood(res.data);
            })

    }, [])

    const { _id, foodName, foodImage, foodQuantity, pickupLocation, additionalNotes, expiredDate, donatorImage, foodDonatorName, foodDonatorEmail, foodStatus } = food;

    const [text, setText] = useState(additionalNotes || "");

    const [isModalOpen, setIsModalOpen] = useState(false);

    const loggedInUserEmail = user?.email;

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {

        //send data and get data for deleting from available foods
        fetch(`http://localhost:4000/availablefoods/${_id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {

                    const remaining = availableFoods.filter(food => food._id != _id);
                    setAvailableFoods(remaining);
                    navigate("/availablefoods")
                }
            })

        // console.log("req food data,", reqFoodData);


        setIsModalOpen(false);

    };

    // const { _id, foodName, foodImage, foodQuantity, pickupLocation, additionalNotes, expiredDate, donatorImage, foodDonatorName, foodDonatorEmail, foodStatus } = food;

    return (
        <>
            <div className='grid grid-cols-1 justify-center items-center md:grid-cols-2 gap-8 max-w-7xl mx-auto'>
                <div>
                    <img className='w-full h-[400px]' src={foodImage} alt="" />
                </div>

                <div className="md:col-span-1">
                    <h2 className="text-2xl font-bold mb-2">{foodName}</h2>
                    <p className="text-gray-600 mb-4">Food Id: {_id}</p>

                    <div className="mb-4">
                        <span className="text-2xl font-semibold text-gray-800">Food Quantity: {foodQuantity}</span>
                    </div>

                    <h3 className="text-xl font-semibold mt-8 mb-4">Food Details</h3>
                    <ul className="list-disc ml-4">
                        <li>Food Quantity: {foodQuantity}</li>
                        <li>Expired Date: {expiredDate}</li>
                        <li>Donator Name: {foodDonatorName}</li>
                        <li>Food Donator Email: {foodDonatorEmail}</li>
                        <li>Food Status: {foodStatus}</li>
                    </ul>
                    <button className="btn my-4" onClick={openModal}>
                        Request
                    </button>
                </div>

            </div>

            <FoodDetailsModal
                foodDetails={food}
                userEmail={loggedInUserEmail}
                isOpen={isModalOpen}
                onClose={closeModal}
                text={text}
                setText={setText}
            />
        </>
    );
};

export default FoodDetails;