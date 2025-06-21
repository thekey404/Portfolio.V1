// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import yashimg from '../assets/ylogo.png'
// const navItems = ["Home", "About", "Projects", "Skills", "Contact"];

// export default function Navbar() {
//     const [open, setOpen] = useState(false);

//     return (
//         <div className="fixed w-full">
//             <div className="relative bg-black overflow-hidden">
//                 {/* Crazy Animated Background */}

//                 {/* Navbar */}
//                 <nav className="z-10 relative flex items-center justify-between px-6 py-4 text-white">
//                     <h1 className="text-5xl font-serif text-gray-400 bg-clip-text font-light">
//                         <img src={yashimg} className="w-20" />
//                     </h1>
//                     <div className="hidden md:flex gap-6">
//                         {navItems.map((item, i) => (
//                             <motion.a
//                                 key={item}
//                                 whileHover={{ scale: 1.2, rotate: [0, 2, -2, 0] }}
//                                 className="text-lg font-medium relative group"
//                                 href={`#${item.toLowerCase()}`}
//                             >
//                                 {item}
//                                 <span className="absolute left-0 bottom-0 w-full h-[2px] bg-gradient-to-r from-pink-500 to-violet-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
//                             </motion.a>
//                         ))}
//                     </div>
//                     {/* Mobile Menu Toggle */}
//                     <button
//                         onClick={() => setOpen(!open)}
//                         className="md:hidden z-20 relative w-8 h-8"
//                     >
//                         <span
//                             className={`absolute h-1 w-full bg-white rounded transition-all duration-300 ${open ? "rotate-45 top-3.5" : "top-1"
//                                 }`}
//                         />
//                         <span
//                             className={`absolute h-1 w-full bg-white rounded transition-all duration-300 ${open ? "opacity-0" : "top-3.5"
//                                 }`}
//                         />
//                         <span
//                             className={`absolute h-1 w-full bg-white rounded transition-all duration-300 ${open ? "-rotate-45 bottom-3.5" : "bottom-1"
//                                 }`}
//                         />
//                     </button>
//                 </nav>
//             </div>
//         </div>
//     );
// }






















// src/components/Navbar.jsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-scroll";
import yashimg from "../assets/ylogo.png";

const navItems = ["Home", "About", "Projects", "Skills", "Contact"];

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <div className="fixed w-full z-50">
            <div className="relative bg-black shadow-md">
                <nav className="z-10 relative flex items-center justify-between px-6 py-4 text-white">
                    <Link to="home" smooth={true} duration={500} className="flex items-center cursor-pointer">
                        <img src={yashimg} alt="Logo" className="w-14 sm:w-16 md:w-20" />
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex gap-6">
                        {navItems.map((item) => (
                            <Link
                                key={item}
                                to={item.toLowerCase()}
                                smooth={true}
                                duration={5}
                                spy={true}
                                offset={-60}
                                className="text-lg font-medium relative group cursor-pointer"
                            >
                                <motion.span
                                    whileHover={{ scale: 1.2, rotate: [0, 2, -2, 0] }}
                                    className="block"
                                >
                                    {item}
                                </motion.span>
                                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-gradient-to-r from-pink-500 to-violet-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={() => setOpen(!open)}
                        className="md:hidden z-20 relative w-8 h-8"
                    >
                        <span className={`absolute h-1 w-full bg-white rounded transition-all duration-300 ${open ? "rotate-45 top-3.5" : "top-1"}`} />
                        <span className={`absolute h-1 w-full bg-white rounded transition-all duration-300 ${open ? "opacity-0" : "top-3.5"}`} />
                        <span className={`absolute h-1 w-full bg-white rounded transition-all duration-300 ${open ? "-rotate-45 bottom-3.5" : "bottom-1"}`} />
                    </button>
                </nav>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {open && (
                        <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: "auto" }}
                            exit={{ height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="md:hidden bg-black overflow-hidden flex flex-col items-start px-6 py-4 gap-4"
                        >
                            {navItems.map((item) => (
                                <Link
                                    key={item}
                                    to={item.toLowerCase()}
                                    smooth={true}
                                    duration={5}
                                    offset={-60}
                                    onClick={() => setOpen(false)}
                                    className="text-white text-xl font-semibold w-full py-1 border-b border-gray-700 cursor-pointer"
                                >
                                    {item}
                                </Link>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
