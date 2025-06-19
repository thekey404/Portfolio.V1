import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import yashimg from '../../dist/assets/ylogo.png'
const navItems = ["Home", "About", "Projects", "Skills", "Contact"];

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <div className="fixed w-full">
            <div className="relative bg-black overflow-hidden">
                {/* Crazy Animated Background */}

                {/* Navbar */}
                <nav className="z-10 relative flex items-center justify-between px-6 py-4 text-white">
                    <h1 className="text-5xl font-serif text-gray-400 bg-clip-text font-light">
                        <img src={yashimg} className="w-20" />
                    </h1>
                    <div className="hidden md:flex gap-6">
                        {navItems.map((item, i) => (
                            <motion.a
                                key={item}
                                whileHover={{ scale: 1.2, rotate: [0, 2, -2, 0] }}
                                className="text-lg font-medium relative group"
                                href={`#${item.toLowerCase()}`}
                            >
                                {item}
                                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-gradient-to-r from-pink-500 to-violet-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                            </motion.a>
                        ))}
                    </div>
                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={() => setOpen(!open)}
                        className="md:hidden z-20 relative w-8 h-8"
                    >
                        <span
                            className={`absolute h-1 w-full bg-white rounded transition-all duration-300 ${open ? "rotate-45 top-3.5" : "top-1"
                                }`}
                        />
                        <span
                            className={`absolute h-1 w-full bg-white rounded transition-all duration-300 ${open ? "opacity-0" : "top-3.5"
                                }`}
                        />
                        <span
                            className={`absolute h-1 w-full bg-white rounded transition-all duration-300 ${open ? "-rotate-45 bottom-3.5" : "bottom-1"
                                }`}
                        />
                    </button>
                </nav>
            </div>
        </div>
    );
}
