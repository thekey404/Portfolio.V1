import React from 'react'
import yashimg from '../assets/yash.png'
import { motion, AnimatePresence } from "framer-motion";
import Button from './socials';

const About = () => {
    return (
        <>
            <motion.a
                whileHover={{ scale: 1.2, rotate: [0, 2, -2, 0] }}
                className="text-lg font-medium relative group"
            >
                <div className='text-white text-7xl text-center mb-20 pb-3 cursor-pointer '>About</div>
                <span className="absolute left-[42%] bottom-0 pb-1 w-52 h-[2px] bg-gradient-to-r from-pink-500 to-violet-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
            </motion.a >
            <div className='grid grid-cols-2 mb-20 mx-40 text-white'>
                <div className='bg-yellow-00'>
                    <img src={yashimg} alt="" className='w-96 rounded-4xl shadow-2xl shadow-slate-700' />
                </div>
                <div className='text-white bg-green-00 text-center text-5xl font-bold font-sans'>Frontend Developer.
                    <p className='text-gray-400 text-2xl mt-5 font-normal text-justify mb-20'>My name is yash valecha. I'm a Front-end developer and UI Designer. I develop modern and high quality interfaces, focusing on performance, animations, responsiveness and SEO.</p>
                    <Button />
                </div>
            </div>
        </>
    )
}

export default About