import React from 'react';
import PixelCard from "./PixelCard";
import { motion } from "framer-motion";

const CardsView = () => {
    return (
        <div className='text-white mt-32 px-4 sm:px-10 md:px-20'>
            {/* Section Heading */}
            <motion.div
                whileHover={{ scale: 1.05, rotate: [0, 2, -2, 0] }}
                className="text-center relative group"
            >
                <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4">Projects</h2>
                <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 h-[2px] w-36 sm:w-64 bg-gradient-to-r from-pink-500 to-violet-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
            </motion.div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-20 place-items-center">
                <div>
                    <PixelCard variant="pink" />
                    <div className='mt-3 text-center text-xl md:text-2xl'>Project 1</div>
                </div>
                <div>
                    <PixelCard variant="pink" />
                    <div className='mt-3 text-center text-xl md:text-2xl'>Project 2</div>
                </div>
                <div>
                    <PixelCard variant="pink" />
                    <div className='mt-3 text-center text-xl md:text-2xl'>Project 3</div>
                </div>
            </div>
        </div>
    );
};

export default CardsView;
