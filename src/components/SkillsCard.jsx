import React from 'react';
import CardSwap, { Card } from './Skills';
import reactimg from '../assets/reactt.jpg';
import htmlimg from '../assets/html.jpg';
import jsimg from '../assets/js.jpg';
import cssimg from '../assets/css.jpg';
import tailwindimg from '../assets/tailwind.jpg';
import { motion } from 'framer-motion';

const SkillsCard = () => {
    return (
        <div className="text-white w-full pb-20 px-4 pt-36 overflow-hidden">
            <motion.a
                whileHover={{ scale: 1.2, rotate: [0, 2, -2, 0] }}
                className="text-lg font-medium relative group block text-center"
            >
                <div className="text-5xl sm:text-6xl md:text-7xl pb-4 mb-20">Skills</div>
                <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-44 h-[2px] bg-gradient-to-r from-pink-500 to-violet-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
            </motion.a>

            <div className="w-full mt-10 flex justify-center">
                <CardSwap
                    cardDistance={120}
                    verticalDistance={80}
                    delay={5000}
                    pauseOnHover={true}
                >
                    <Card>
                        <h3 className="text-3xl font-semibold m-4">HTML</h3>
                        <div className="w-full h-64 px-4 pb-4">
                            <img
                                src={htmlimg}
                                alt="HTML"
                                className="w-full h-full object-contain rounded-b-xl"
                            />
                        </div>
                    </Card>
                    <Card>
                        <h3 className="text-3xl font-semibold m-4">CSS</h3>
                        <div className="w-full h-64 px-4 pb-4">
                            <img
                                src={cssimg}
                                alt="CSS"
                                className="w-full h-full object-contain rounded-b-xl"
                            />
                        </div>
                    </Card>
                    <Card>
                        <h3 className="text-3xl font-semibold m-4">JavaScript</h3>
                        <div className="w-full h-64 px-4 pb-4">
                            <img
                                src={jsimg}
                                alt="JavaScript"
                                className="w-full h-full object-contain rounded-b-xl"
                            />
                        </div>
                    </Card>
                    <Card>
                        <h3 className="text-3xl font-semibold m-4">React Js</h3>
                        <div className="w-full h-64 px-4 pb-4">
                            <img
                                src={reactimg}
                                alt="React"
                                className="w-full h-full object-contain rounded-b-xl"
                            />
                        </div>
                    </Card>
                    <Card>
                        <h3 className="text-3xl font-semibold m-4">Tailwind CSS</h3>
                        <div className="w-full h-64 px-4 pb-4">
                            <img
                                src={tailwindimg}
                                alt="Tailwind"
                                className="w-full h-full object-contain rounded-b-xl"
                            />
                        </div>
                    </Card>
                </CardSwap>
            </div>
        </div>
    );
};

export default SkillsCard;
