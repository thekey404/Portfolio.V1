import { motion } from "framer-motion";

export default function ContactForm() {
  return (
    <div className="relative w-full min-h-screen bg-black flex items-center justify-center py-28 px-4 overflow-hidden">
      {/* Infinite animated gradient background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          className="absolute w-[200%] h-[200%] -top-1/2 -left-1/2 bg-gradient-to-r bg-gray-600 opacity-10 blur-3xl animate-spin-slow"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 50, ease: "linear" }}
        />
      </div>

      {/* Contact Form Container */}
      <motion.div
        className="z-10 w-full max-w-3xl bg-[#111] bg-opacity-70 border border-white/10 rounded-2xl shadow-xl p-6 sm:p-10 md:p-12 backdrop-blur"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-10 text-center">
          Let's Connect
        </h2>

        <form className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Name */}
          <div className="w-full">
            <label className="text-white block mb-2 text-sm">Your Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-3 rounded-lg bg-[#1c1c1e] text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
              required
            />
          </div>

          {/* Email */}
          <div className="w-full">
            <label className="text-white block mb-2 text-sm">Email Address</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-3 rounded-lg bg-[#1c1c1e] text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
              required
            />
          </div>

          {/* Subject */}
          <div className="sm:col-span-2">
            <label className="text-white block mb-2 text-sm">Subject</label>
            <input
              type="text"
              placeholder="e.g. Freelance Project, Collaboration, Feedback"
              className="w-full px-4 py-3 rounded-lg bg-[#1c1c1e] text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
              required
            />
          </div>

          {/* Message */}
          <div className="sm:col-span-2">
            <label className="text-white block mb-2 text-sm">Message</label>
            <textarea
              rows="5"
              placeholder="Write your message here..."
              className="w-full px-4 py-3 rounded-lg bg-[#1c1c1e] text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="sm:col-span-2 flex justify-center mt-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="bg-gradient-to-r from-pink-500 to-violet-600 text-white font-semibold px-10 py-3 rounded-full transition-all duration-300 hover:brightness-110"
            >
              Send Message
            </motion.button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}
