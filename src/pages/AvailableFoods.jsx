import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData, useLocation } from 'react-router-dom';
import FoodCard from '../components/FoodCard';
import AuthContext from '../context/AuthContext/AuthContext';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Loading from '../components/Loading';
import { BsGrid } from "react-icons/bs";
import { TfiLayoutGrid3 } from "react-icons/tfi";


const AvailableFoods = () => {

    const { availableFoods, setAvailableFoods } = useContext(AuthContext);

    const loadedData = useLoaderData();

    console.log(loadedData);

    setAvailableFoods(loadedData)

    const [searchFoods, setSearchFoods] = useState("");

    const pathname = useLocation();

    console.log(pathname);

    const [isThreeColumn, setIsThreeColumn] = useState(true);

    const [search, setSearch] = useState("")

    const toggleGrid = () => {
        setIsThreeColumn((prev) => !prev);
    };

    const availFoods = useLoaderData();
    setAvailableFoods(availFoods);

    useEffect(() => {
        axios.get(`http://localhost:4000/foods/availablefoods?searchParams=${search}`)
            .then(res => {
                setSearchFoods(res.data);
            })

    }, [search])

    const { data, isLoading } = useQuery({
        queryKey: ['allAvailJobs'],
        queryFn: async () => {
            const { data } = await axios.get("http://localhost:4000/foods/availablefoods", {withCredentials:true})
            return data;
        }
    })

    if (isLoading) {
        return <Loading></Loading>
    }

    setAvailableFoods(data);
    console.log(data);
    console.log(isLoading);


    return (
        <>
            <div className='mx-auto max-w-7xl'>
                <div className='flex items-center justify-end'>
                    <div className='w-[400px] text-right mt-6 mb-4'>
                        <input
                            onChange={(e) => setSearch(e.target.value)}
                            type="text"
                            name='search'
                            placeholder='search foods by food name'
                            className='input input-bordered w-full'
                            required
                        />
                    </div>
                </div>

                <div className={`grid gap-8 mx-auto max-w-7xl ${isThreeColumn ? "grid-cols-3" : "grid-cols-2"
                    }`}>
                    {
                        search ? (searchFoods?.map((food, idx) => <FoodCard key={idx} food={food}></FoodCard>)) : (availableFoods?.map((food, idx) => <FoodCard key={idx} food={food}></FoodCard>))
                    }
                </div>
                <div className='mx-auto max-w-7xl '>
                    <button
                        onClick={toggleGrid}
                        className={`absolute top-[100px] right-28 text-3xl mb-4 px-4 py-2`}
                    >
                        {
                            isThreeColumn ? <TfiLayoutGrid3></TfiLayoutGrid3>
                            : <BsGrid></BsGrid>
                        }
                    </button>
                </div>
            </div>
        </>
    );
};

export default AvailableFoods;