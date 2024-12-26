import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../context/AuthContext/AuthContext';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useQuery } from '@tanstack/react-query';

const ManageMyFoods = () => {

    const [availFoods, setAvailFoods] = useState([]);

    const { user } = useContext(AuthContext);
    // console.log(user?.email);

    // const [currentUserEmail, setcurrentUserEmail] = useState(user?.email);

    const navigate = useNavigate();

    useEffect(() => {
        // fetch(`http://localhost:4000/availablefoods/:id`)
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data);
        //         setFood(data);
        //     })

        axios.get(`http://localhost:4000/availablefoods?currEmail=${user?.email}`, { withCredentials: true })
            .then(res => {
                setAvailFoods(res.data)
            })

    }, [])



    const handleDeleteFood = (id) => {
        console.log("Delete a food");

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:4000/availablefoods/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "A food item is deleted.",
                                icon: "success"
                            });
                            const remaining = availFoods?.filter(food => food._id !== id);
                            setAvailFoods(remaining);
                            // navigate("/availablefoods")
                        }
                    })
            }
        });
    }

    // const { _id, foodName, foodImage, foodQuantity, pickupLocation, additionalNotes, expiredDate, donatorImage, name, userEmail, foodStatus } = food;

    return (
        <>

            <h2 className='text-center w-[95%] ml-4 max-w-7xl mx-auto text-3xl mb-8 font-extrabold'>
                My Foods
            </h2>
            <div className="max-w-7xl mx-auto px-6 flex flex-col justify-center w-[95%] overflow-x-auto lg:overflow-x-hidden bg-red-200 py-4">
                <table className="table text-center">
                    {/* head */}
                    <thead className='font-extrabold hover:text-red-400'>
                        <tr>
                            <th></th>
                            <th>Food Image</th>
                            {/* <th>ID</th> */}
                            <th>Food Name</th>
                            <th>Food Donator Name</th>
                            <th>Food Donator Email</th>
                            <th>Food Quantity</th>
                            <th>Expired Date</th>
                            <th>Food Status </th>
                            <th>Pickup Location </th>
                            <th>Additional Notes</th>
                            <th> Action </th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 2 */}

                        {

                            availFoods?.map((food, idx) => <>
                                <tr className="hover"></tr>
                                <th>{idx + 1}</th>
                                <td className='flex justify-center items-center'><img className='h-16 w-16 rounded-full' src={food.foodImage} alt="not valid" /></td>
                                {/* <td>{food._id}</td> */}
                                <td>{food.foodName}</td>
                                <td>{food.foodDonatorName}</td>
                                <td>{food.foodDonatorEmail}</td>
                                <td>{food.foodQuantity}</td>
                                <td>{food.expiredDate}</td>
                                <td>{food.foodStatus}</td>
                                <td>{food.pickupLocation}</td>
                                <td>{food.additionalNotes}</td>
                                <td className='flex gap-4'>
                                    <Link className='btn my-2 btn-secondary' to={`/updateFood/${food._id}`}>Update</Link>
                                    <button className='btn my-2 btn-error' onClick={() => handleDeleteFood(food._id)}>X</button>
                                </td>
                            </>)
                        }
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default ManageMyFoods;