import React, { useContext } from 'react';
import AuthContext from '../context/AuthContext/AuthContext';
import { Link } from 'react-router-dom';

const BlogsCard = ({ blog }) => {


    const {user} = useContext(AuthContext);

    const { _id, newsHeadline, newsAuthor, newsImage, publishedDate } = blog

    return (
        <div>
            <img 
            data-aos="zoom-in"
            className='w-full' src={newsImage} alt="" />
            <div className='flex justify-between my-2'>
                <span>{publishedDate}</span>
                <span>Written By: <span className='font-bold text-gray-400'>{newsAuthor}</span></span>
            </div>
            <h1 className='text-xl font-extrabold'>
                {newsHeadline}
            </h1>
            <div className='mt-6'>
            <Link className='bg-slate-700 text-white px-4 py-2 mt-4 hover:font-bold' to={user ? `/blogdetails/${_id}` : "/login" }>READ DETAILS</Link>
            </div>
        </div>
    );
};

export default BlogsCard;