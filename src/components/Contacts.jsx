// src/components/Contact.jsx
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_3h12l83',
      'template_uyy8s7q',
      form.current,
      '0gp4eC1zgclX6gqA9'
    ).then(
      (result) => {
        console.log(result.text);
        alert("✅ Message sent successfully!");
        form.current.reset();
      },
      (error) => {
        console.log(error.text);
        alert("❌ Failed to send the message.");
      }
    );
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-gradient-to-br mt-20 text-white py-20 px-6 flex items-center justify-center"
    >
      <motion.div
        className="backdrop-blur-lg bg-white/10 shadow-2xl rounded-3xl p-10 w-full max-w-3xl"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
      >
        <h2 className="text-4xl font-bold mb-6 text-pink-400 tracking-wide text-center">
          Let's Connect
        </h2>
        <p className="text-gray-300 mb-10 text-center text-lg">
          I’d love to hear from you. Drop a message and I’ll get back to you shortly.
        </p>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="grid grid-cols-1 gap-6"
        >
          <div className="flex gap-4 flex-col sm:flex-row">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="flex-1 p-4 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="flex-1 p-4 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            required
            className="p-4 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            required
            rows="6"
            className="p-4 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400"
          ></textarea>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full py-4 rounded-lg bg-pink-600 hover:bg-pink-700 font-semibold text-white tracking-wide transition-all duration-300"
          >
            🚀 Send Message
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
}
