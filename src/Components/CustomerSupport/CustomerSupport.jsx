import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const CustomerSupport = () => {
  // Slide-in animation variants
  const slideInVariants = {
    hidden: {
      opacity: 0,
      x: -100, // Start off to the left
    },
    visible: {
      opacity: 1,
      x: 0, // Slide into position
      transition: {
        duration: 0.5, // Animation duration
      },
    },
  };

  return (
    <motion.div
      className="max-w-6xl mx-auto mt-32 px-4"
      initial="hidden" // Initial state
      animate="visible" // Animate to visible state
      variants={slideInVariants} // Apply the animation variants
    >
      <Helmet>
        <title>Green Tech | Customer Support</title>
      </Helmet>
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Customer Support</h2>

      {/* Support Options */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="text-center p-6 bg-white shadow-lg rounded-lg">
          <FaPhoneAlt className="text-green-500 text-4xl mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Phone Support</h3>
          <p className="text-gray-600">Call us at <span className="font-bold">+880 1956686338</span></p>
          <p className="text-gray-600">Mon-Fri, 9 AM - 6 PM (PST)</p>
        </div>

        <div className="text-center p-6 bg-white shadow-lg rounded-lg">
          <FaEnvelope className="text-blue-500 text-4xl mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Email Support</h3>
          <p className="text-gray-600">Send us an email at</p>
          <p className="font-bold text-gray-800 cursor-pointer">sheikhshaadi137@gmail.com</p>
        </div>

        <div className="text-center p-6 bg-white shadow-lg rounded-lg">
          <FaMapMarkerAlt className="text-red-500 text-4xl mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
          <p className="text-gray-600">1234 Support Ave,</p>
          <p className="text-gray-600">Los Angeles, CA</p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="bg-white p-8 shadow-lg rounded-lg">
        <h3 className="text-2xl font-semibold text-gray-800 mb-6">Contact Us</h3>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              className="input input-bordered input-info w-full p-3 rounded border-gray-300 outline-none"
              placeholder="Your Full Name"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="input input-bordered input-info w-full p-3 rounded border-gray-300 outline-none"
              placeholder="Your Email Address"
              required
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              className="input input-bordered input-info w-full p-3 h-32 rounded border-gray-300 outline-none"
              placeholder="How can we assist you?"
              required
            ></textarea>
          </div>
          <div className="md:col-span-2">
            <button
              type="submit"
              className="bg-[#4F9C3A] text-white font-semibold py-3 px-6 rounded hover:bg-[#3B7A2A] w-full"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </motion.div>
  );
};

export default CustomerSupport;
