import React from 'react'
import PixelCard from "./PixelCard"
import { motion, AnimatePresence } from "framer-motion";

const CardsView = () => {
    return (
        <div className='text-white mt-40'>
            <motion.a
                whileHover={{ scale: 1.2, rotate: [0, 2, -2, 0] }}
                className="text-lg font-medium relative group"
            >
                <div className='text-7xl text-center pb-6'>Projects</div>
                <span className="absolute left-[40%] bottom-0 pb-1 w-64 h-[2px] bg-gradient-to-r from-pink-500 to-violet-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
            </motion.a >
            <div className="grid grid-cols-3 mx-8 mt-20">
                <div> <PixelCard variant="pink" /><div className='text-white mt-2 text-center text-2xl'>Project1</div></div>
                <div> <PixelCard variant="pink" /><div className='text-white mt-2 text-center text-2xl'>Project2</div></div>
                <div> <PixelCard variant="pink" /><div className='text-white mt-2 text-center text-2xl'>Project3</div></div>
            </div>
        </div>
    )
}

export default CardsView