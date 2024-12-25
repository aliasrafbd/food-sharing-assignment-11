import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../context/AuthContext/AuthContext';

const MyFoodRequest = () => {

    const [requestedFoods, setRequestedFoods] = useState([]);

    const { user } = useContext(AuthContext);
    console.log(user?.email);

    useEffect(() => {
        // fetch(`http://localhost:4000/availablefoods/:id`)
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data);
        //         setFood(data);
        //     })

        axios.get(`http://localhost:4000/requestedfoods?currEmail=${user?.email}`)
            .then(res => {
                setRequestedFoods(res.data);
            })

    }, [])


    return (
        <>
            <h2 className='text-center max-w-7xl mx-auto text-3xl mb-8 font-extrabold'>
                My Food Request
            </h2>
            <div className="max-w-7xl mx-auto bg-blue-200 py-4">
                <table className="table text-center">
                    {/* head */}
                    <thead className='font-extrabold'>
                        <tr>
                            <th></th>
                            <th>Food Image</th>
                            {/* <th>ID</th> */}
                            <th>Food Name</th>
                            <th>Food Donator Name</th>
                            <th>User Email</th>
                            <th>Expired Date</th>
                            <th>Food Status </th>
                            <th>Pickup Location </th>
                            <th>Requested Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 2 */}

                        {

                            requestedFoods?.map((food, idx) => <>
                                <tr className="hover"></tr>
                                <th>{idx + 1}</th>
                                <td className='flex justify-center items-center'><img className='h-16 w-16 rounded-full' src={food.foodImage} alt="not valid" /></td>
                                {/* <td>{food._id}</td> */}
                                <td>{food.foodName}</td>
                                <td>{food.foodDonatorName}</td>
                                <td>{food.userEmail}</td>
                                <td>{food.expiredDate}</td>
                                <td>{food.foodStatus}</td>
                                <td>{food.pickupLocation}</td>
                                <td>{food.requestedDate}</td>
                            </>)
                        }
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default MyFoodRequest;