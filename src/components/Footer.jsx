import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
    return (
        <footer className="relative bg-black text-white overflow-hidden pt-16 pb-10 px-6">
            {/* Animated Gradient Glow */}
            <motion.div
                className="absolute -top-40 left-1/2 transform -translate-x-1/2 w-[120%] h-[200px] bg-gradient-to-r from-pink-500 via-purple-600 to-violet-700 blur-3xl opacity-20 animate-spin-slow"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
            />

            {/* Wave SVG Divider */}
            <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
                <svg
                    className="relative block w-[calc(150%+1.3px)] h-[100px]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M985.66,17.13c-41.78,10.5-80.15,27.53-123.09,39.82C771,79.73,709.42,89.62,648.87,88.47c-60.79-1.16-119.2-13.42-179-18.22C404,64.59,342,68,283.39,83.87,223.87,99.91,168,127.36,107.45,130.39c-30.53,1.53-59.64-2.89-87.42-13.27V0H1200V27.35C1135.8,3.72,1067.44-2.9,985.66,17.13Z"
                        className="fill-black"
                    ></path>
                </svg>
            </div>

            {/* Footer Content */}
            <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center md:text-left">
                {/* Contact Info */}
                <div>
                    <h3 className="text-xl font-bold mb-3 text-pink-500">Contact</h3>
                    <p className="text-gray-400">yashvalecha133.com</p>
                    <p className="text-gray-400">+91 6359393635</p>
                    <p className="text-gray-400">Ahmedabad, India</p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-xl font-bold mb-3 text-purple-400">Quick Links</h3>
                    <ul className="space-y-2">
                        {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => (
                            <li key={item}>
                                <a
                                    href={`#${item.toLowerCase()}`}
                                    className="hover:text-pink-500 transition-colors duration-300"
                                >
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Socials */}
                <div>
                    <h3 className="text-xl font-bold mb-3 text-violet-400">Follow Me</h3>
                    <div className="flex justify-center md:justify-start gap-4 text-xl">
                        <motion.a
                            href="#"
                            whileHover={{ scale: 1.2 }}
                            className="hover:text-blue-400 transition"
                        >
                            <FontAwesomeIcon icon={faTwitter} />
                        </motion.a>
                        <motion.a
                            href="#"
                            whileHover={{ scale: 1.2 }}
                            className="hover:text-pink-500 transition"
                        >
                            <i className="fab fa-instagram"></i>
                        </motion.a>
                        <motion.a
                            href="#"
                            whileHover={{ scale: 1.2 }}
                            className="hover:text-blue-600 transition"
                        >
                            <i className="fab fa-linkedin"></i>
                        </motion.a>
                        <motion.a
                            href="#"
                            whileHover={{ scale: 1.2 }}
                            className="hover:text-gray-100 transition"
                        >
                            <i className="fab fa-github"></i>
                        </motion.a>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <p className="mt-12 text-center text-sm text-gray-600 z-10 relative">
                &copy; {new Date().getFullYear()} Yash Valecha. All rights reserved.
            </p>
        </footer>
    );
}
