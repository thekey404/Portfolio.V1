import React from 'react';
import yashimg from '../assets/yash.png';
import { motion } from "framer-motion";
import Button from './socials';

const About = () => {
    return (
        <>
            <div className='text-center '>
                <h2 className="text-white text-3xl sm:text-5xl md:text-6xl font-bold mb-4 mx-10">About</h2>
            </div>

            {/* Main Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 sm:px-10 md:px-20 py-16 text-white items-center">
                {/* Profile Image */}
                <div className="flex justify-center">
                    <img
                        src={yashimg}
                        alt="Yash Valecha"
                        className="w-64 sm:w-80 md:w-96 rounded-3xl shadow-2xl shadow-slate-800"
                    />
                </div>

                {/* Description */}
                <div className="text-center md:text-left">
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Frontend Developer</h3>
                    <p className="text-gray-400 text-base sm:text-lg md:text-xl mt-2 font-normal text-justify mb-10 leading-relaxed">
                        My name is Yash Valecha. I'm a Front-end developer and UI Designer. I develop modern and high-quality interfaces, focusing on performance, animations, responsiveness, and SEO.
                    </p>
                    <div className="flex justify-center md:justify-start">
                        <Button />
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;
