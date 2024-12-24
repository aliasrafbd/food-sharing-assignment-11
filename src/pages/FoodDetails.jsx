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

    const { _id, foodName, foodImage, foodQuantity, pickupLocation, additionalNotes, expiredDate, donatorImage, name, userEmail, foodStatus } = food;

    const [text, setText] = useState(additionalNotes || "");

    const [isModalOpen, setIsModalOpen] = useState(false);

    const loggedInUserEmail = user?.email;

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {

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

        console.log(reqFoodData);

        // send data to the server
        fetch('http://localhost:4000/requestedfoods', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reqFoodData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: "Success!",
                        text: "A food item is removed from available foods and send to requested Foods",
                        icon: "success"
                    });
                }
            })

        setIsModalOpen(false);

    };

    return (
        <>
            <div>
                Food Details: {foodName}, {_id}, {foodImage}
            </div>
            <button className="btn" onClick={openModal}>
                Request
            </button>
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