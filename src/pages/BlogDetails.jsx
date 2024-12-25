import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import FoodDetailsModal from '../components/FoodDetailsModal';
import AuthContext from '../context/AuthContext/AuthContext';
import Swal from 'sweetalert2';

const BlogDetails = () => {

    const { id } = useParams();

    // const navigate = useNavigate();

    const [blog, setBlog] = useState({});

    useEffect(() => {

        axios.get(`http://localhost:4000/blogs/${id}`)
            .then(res => {
                setBlog(res.data);
            })

    }, [])

    console.log(blog);


    const { newsHeadline, newsAuthor, newsImage, newsContent, publishedDate } = blog

    // const { _id, foodName, foodImage, foodQuantity, pickupLocation, additionalNotes, expiredDate, donatorImage, foodDonatorName, foodDonatorEmail, foodStatus } = food;

    return (
        <>
            <div className='max-w-7xl mx-auto'>
                <h2 className='text-2xl text-center my-8 font-extrabold'>{newsHeadline}</h2>
                <div>
                    <img 
                    className='w-full object-contain h-[400px]' src={newsImage} alt="" />
                    <div className='mt-28 mb-8'>
                        <p>Published Date: {publishedDate}</p>
                        <span>Written By: <span className='font-bold text-gray-400'>{newsAuthor}</span></span>
                    </div>
                </div>

                <p className='text-gray-600 text-justify'>
                    {newsContent}
                </p>

            </div>

        </>
    );
};

export default BlogDetails;