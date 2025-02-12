import React from 'react';
import Slider from '../../components/Slider';
import FeaturedFoods from '../../components/FeaturedFoods';
import { useLoaderData } from 'react-router-dom';
import AboutUs from '../../components/AboutUs';
import OurBlogs from '../../components/OurBlogs';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../components/Loading';

const fetchFeaturedFoods = async () => {
    const res = await fetch("https://food-sharing-server-phi.vercel.app/foods/featured");
    if (!res.ok) throw new Error("Failed to fetch data"); // Handle errors
    return res.json();
};

const fetchOurAllBlogs = async () => {
    const res = await fetch("https://food-sharing-server-phi.vercel.app/blogs");
    if (!res.ok) throw new Error("Failed to fetch data"); // Handle errors
    return res.json();
};


const Home = () => {


    // const { ourAllBlogs } = useLoaderData();

    const awardsWon = 20;
    const servedPeopleInTotal = 130550;
    const servedFamily = Math.ceil(servedPeopleInTotal / 4);
    const totalDivision = 6;
    const totalDistrict = 55;
    const totalUnion = 4110;
    const totalVillage = 12000;
    

    const servedInTotal = { awardsWon, servedPeopleInTotal, servedFamily, totalDivision, totalDistrict, totalUnion, totalVillage }

    // Fetch data using React Query
    const { data: featuredFoods, isLoading, isError } = useQuery({
        queryKey: ["featuredFoods"],
        queryFn: fetchFeaturedFoods,
    });

    // Fetch data using React Query
    const { data: ourAllBlogs, isLoading:isBlogFileLoading, isError:isBlogLoadError } = useQuery({
        queryKey: ["ourAllBlogs"],
        queryFn: fetchOurAllBlogs,
    });

    if (isLoading) {
        return <Loading></Loading>
    }

    if (isBlogFileLoading) {
        return <Loading></Loading>
    }
    

    return (
        <div className='max-w-7xl mx-auto'>
            <Slider></Slider>
            <FeaturedFoods featuredFoods={featuredFoods}></FeaturedFoods>
            <AboutUs servedInTotal={servedInTotal}></AboutUs>
            <OurBlogs ourAllBlogs={ourAllBlogs}></OurBlogs>
        </div>
    );
};

export default Home;