import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";


import "swiper/css";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";

import slider_one from "../assets/slider-01.jpg";
import slider_two from "../assets/slider-02.jpg";
import slider_three from "../assets/slider-03.jpg";


const Slider = ({ ecoAdventures }) => {

    return (
        <>
            <h3 data-aos="fade-left" className="md:text-4xl text-2xl font-bold text-center mt-8 mt-20 mb-12">Our Activities</h3>
            <div data-aos="zoom-in" className="max-w-7xl mx-auto my-6">
                <Swiper
                
                    modules={[Navigation, Autoplay]} 
                    autoplay={{
                        delay: 3000, 
                        disableOnInteraction: false, 
                    }}
                    spaceBetween={30}
                    breakpoints={{
                        // When the viewport is >= 640px
                        640: {
                          slidesPerView: 1, // Show 2 slides
                        },
                      }}
                      slidesPerView={2} // Default for smaller screens

                      className="mySwiper"
                    
                >
                    <SwiperSlide>
                        <div className="flex items-center justify-center h-[150px] md:h-[600px] text-white text-xl font-bold md:rounded-lg">
                            <img className="w-[85%] h-full md:rounded-3xl lg:w-full" src={slider_one} alt="" />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="flex items-center justify-center h-[150px] md:h-[600px] text-white text-xl font-bold md:rounded-lg">
                            <img className="w-[85%] h-full md:rounded-3xl lg:w-full" src={slider_two} alt="" />
                        </div>
                    </SwiperSlide>
                    
                    <SwiperSlide>
                        <div className="flex items-center justify-center h-[150px] md:h-[600px] text-white text-xl font-bold md:rounded-lg">
                            <img className="w-[85%] h-full md:rounded-3xl lg:w-full" src={slider_three} alt="" />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    );
};

export default Slider;