import { format } from 'date-fns';
import React, { useContext, useState } from 'react';
import AuthContext from '../context/AuthContext/AuthContext';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateFood = () => {

    const [selectedDate, setSelectedDate] = useState(null);
    // const [food, setFood] = useState({});
    const currentDate = new Date().toLocaleString();

    const loadedData = useLoaderData();

    const navigate = useNavigate();

    const { _id, foodName, foodImage, foodQuantity, pickupLocation, additionalNotes, expiredDate, foodDonatorEmail, donatorImage, foodDonatorName, foodStatus } = loadedData;

    const handleUpdateFood = e => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const updatedFoodData = Object.fromEntries(formData.entries());

        updatedFoodData.donatorImage = donatorImage;
        updatedFoodData.foodStatus = foodStatus;

        fetch(`http://localhost:4000/availablefoods/${_id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedFoodData),
        })

            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: "Success!",
                        text: "Food Data Updated Successfully",
                        icon: "success",
                        confirmButtonText: "Close",
                    });
                    navigate("/managemyfoods");
                }
            });



    }


    return (
        <>

            <form onSubmit={handleUpdateFood} className="card-body">

                {/* Food Name  */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Food Name</span>
                    </label>
                    <input type="text" defaultValue={foodName} name='foodName' placeholder="Food Name" className="input input-bordered" required />
                </div>

                {/* Food Image  */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Food Image</span>
                    </label>
                    <input type="url" defaultValue={foodImage} name='foodImage' placeholder="Food Image" className="input input-bordered" required />
                </div>

                {/* Food Donator Email  */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Food Donator Email</span>
                    </label>
                    <input type="text" defaultValue={loadedData.foodDonatorEmail} name='foodDonatorEmail' placeholder="Food Donator Email" className="input input-bordered" required />
                </div>

                {/* Food Donator Name  */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Food Donator Name</span>
                    </label>
                    <input type="text" defaultValue={foodDonatorName} name='foodDonatorName' placeholder="Food Donator Name" className="input input-bordered" required />
                </div>

                {/* Pickup Location */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Pickup Location</span>
                    </label>
                    <input type="text" defaultValue={pickupLocation} name='pickupLocation' placeholder="Pickup Location" className="input input-bordered" required />
                </div>

                {/* Expired Date */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Expired Date</span>
                    </label>
                    <input type="date" defaultValue={expiredDate} name='expiredDate' placeholder="Expired Date" className="input input-bordered" required />
                </div>

                {/* Additional Notes */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Additional Notes</span>
                    </label>
                    <input type="text"

                        name='additionalNotes' defaultValue={additionalNotes} placeholder="Additional Notes" className="input input-bordered" required />
                </div>

                <input type="submit" className='btn' value="Update" />
            </form>
        </>
    );


};

export default UpdateFood;