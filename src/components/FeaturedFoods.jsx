// import React, { useContext, useState } from 'react';
// import { Link, useLoaderData } from 'react-router-dom';
// import { AuthContext } from '../providers/AuthProvider';
// import MovieCard from './MovieCard';

import { Link } from "react-router-dom";
import { motion } from 'motion/react';
import { easeOut } from "framer-motion";

const FeaturedFoods = () => {

    // const loadedAllMovies = useLoaderData();
    // const { allMovies, setAllMovies } = useContext(AuthContext);
    // const [searchMovies, setSearchMovies] = useState("");

    return (
        <>
            <div className="mx-auto max-w-7xl">
                <div className="text-center">
                    <motion.h2
                        animate={
                            { x: 50, }
                        }
                        transition={
                            { duration: 2, delay: 1, ease: easeOut, repeat: Infinity }
                        }

                        className="mb-12 text-3xl font-bold">Featured <motion.span
                            animate={
                                { color: ['#33df33', '#33ffgg', '#ff6133'], }
                            }
                            transition={
                                { duration: 1.5, delay: 1, repeat: Infinity }
                            }

                        >Foods</motion.span> </motion.h2>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-12 mx-auto max-w-7xl'>
                    {/* {
                    FeaturedFoods.map((movie, idx) => <MovieCard key={idx} movie={movie}></MovieCard>)
                } */}
                </div>
                <div>
                    <Link className='btn my-2 mx-auto flex justify-center max-w-[200px] items-center block btn-warning' to={`/availablefoods`}>Show All</Link>
                </div>
            </div>
        </>

    );
};

export default FeaturedFoods;