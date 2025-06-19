import React from 'react'
import CardSwap, { Card } from './Skills'
import reactimg from '../assets/reactt.jpg'
import htmlimg from '../assets/html.jpg'
import jsimg from '../assets/js.jpg'
import cssimg from '../assets/css.jpg'
import tailwindimg from '../assets/tailwind.jpg'
import { motion, AnimatePresence } from "framer-motion";

const SkillsCard = () => {
    return (
        <div className='text-white'>

            <motion.a
                whileHover={{ scale: 1.2, rotate: [0, 2, -2, 0] }}
                className="text-lg font-medium relative group"
            >
                <div className='text-7xl text-center mt-52 pb-3'>Skills</div>

                <span className="absolute left-[43%] bottom-0 w-44 pb-1 h-[2px] bg-gradient-to-r from-pink-500 to-violet-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
            </motion.a >
            <div style={{ height: '600px', position: 'relative' }}>
                <CardSwap
                    cardDistance={160}
                    verticalDistance={100}
                    delay={3000}
                    pauseOnHover={false}
                >
                    <Card>
                        <h3 className='text-5xl m-7'>HTML</h3>
                        <img src={htmlimg} alt="" className='h-72' />

                    </Card>
                    <Card>
                        <h3 className='text-5xl m-7'>CSS</h3>
                        <img src={cssimg} alt="" className='h-72' />

                    </Card>
                    <Card>
                        <h3 className='text-5xl m-7'>JavaScript</h3>
                        <img src={jsimg} alt="" className='h-72' />

                    </Card>
                    <Card>
                        <h3 className='text-5xl m-7'>React Js</h3>
                        <img src={reactimg} className='' />
                    </Card>
                    <Card>
                        <h3 className='text-5xl m-7'>Tailwind CSS</h3>
                        <img src={tailwindimg} alt="" className='h-72' />

                    </Card>
                </CardSwap>
            </div>
        </div>
    )
}

export default SkillsCard