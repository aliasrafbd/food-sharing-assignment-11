import React from 'react';
import { FaFacebook, FaInstagramSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import logo from "../../src/assets/share-food-logo.png"

const Footer = () => {
    return (
        <div className=''>
            <footer className="footer text-base-content p-2 lg:w-10/12 w-10/12 md:w-full mt-28 mb-16 mx-auto">
                <aside data-aos="zoom-in" className=' lg:w-full mx-auto flex flex-col gap-3 justify-center items-center'>
                    <img className='h-36 w-36' src={logo} alt="" />
                </aside>
                <nav className='mx-0 md:mx-5 lg:mx-0'>
                    <h6 className="footer-title">Activity</h6>
                    <a className="link link-hover">Register</a>
                    <a className="link link-hover">Home</a>
                    <a className="link link-hover">User Profile</a>
                    <a className="link link-hover">Update Profile</a>
                </nav>
                <nav className='mr-5'>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                </nav>
                <nav className=''>
                    <h6 className="footer-title">Social</h6>
                    <div className='flex flex-row gap-4'>
                        <a href='https://www.facebook.com/aliasraf15' className="link text-3xl link-hover"><FaFacebook></FaFacebook></a>
                        <a href='https://x.com/asrafali_bd' className="link text-3xl link-hover"><FaXTwitter />
                        </a>
                        <a href='https://www.instagram.com/asraf_ali24/' className="link text-3xl link-hover"><FaInstagramSquare />
                        </a>
                    </div>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;