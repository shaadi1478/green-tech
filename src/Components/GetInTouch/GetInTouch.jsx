import React from 'react';
import { motion } from 'framer-motion';

const GetInTouch = () => {
    return (
        <div className='md:p-10 lg:p-16'> {/* Outer container for padding */}
            <div className='text-center md:mb-10 mt-5'> {/* Centered title and description */}
                <h1 className='text-4xl md:text-5xl text-[#293842] font-bold mb-4'>
                    Get in <span className='text-[#4F9C3A]'>Touch</span>
                </h1>
                <p>
                    If you are interested in establishing a partnership or collaboration with us, please <br />
                    complete the form below and share your areas of interest. We are eager to explore <br />
                    potential collaborations and create mutual value together.
                </p>
            </div>
            <div className='md:px-72'> {/* Container for the form with padding */}
                <motion.form
                    action="#"
                    className="p-6 bg-white rounded-lg transition-all duration-300 ease-in-out" // Form container with padding and background color
                    initial={{ opacity: 0, y: 20 }} // Initial animation state
                    animate={{ opacity: 1, y: 0 }} // Final animation state
                    transition={{ duration: 0.5 }} // Animation duration
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4"> {/* Grid for input fields */}
                        <div className="input-box"> {/* Input box for name */}
                            <input
                                type="text"
                                id="name"
                                placeholder="Full Name"
                                autoComplete="off"
                                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#4F9C3A] transition duration-200"
                            />
                        </div>
                        <div className="input-box"> {/* Input box for email */}
                            <input
                                type="email"
                                placeholder="Email Address"
                                autoComplete="off"
                                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#4F9C3A] transition duration-200"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4"> {/* Another grid for additional inputs */}
                        <div className="input-box"> {/* Input box for mobile number */}
                            <input
                                type="number"
                                placeholder="Mobile Number"
                                min="0"
                                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#4F9C3A] transition duration-200"
                            />
                        </div>
                        <div className="input-box"> {/* Input box for subject */}
                            <input
                                type="text"
                                placeholder="Email Subject"
                                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#4F9C3A] transition duration-200"
                            />
                        </div>
                    </div>

                    <div className="mb-4"> {/* Text area for message */}
                        <textarea
                            placeholder="Your Message"
                            rows="4"
                            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#4F9C3A] transition duration-200"
                        ></textarea>
                    </div>

                    <motion.input
                        type="submit"
                        value="Send Message"
                        className="bg-[#4F9C3A] text-white py-2 px-4 rounded hover:bg-[#3a7d28] transition-colors cursor-pointer w-full"
                        whileHover={{ scale: 1.05 }} // Scale effect on hover
                        whileTap={{ scale: 0.95 }} // Scale effect on tap
                    />
                </motion.form>
            </div>
        </div>
    );
};

export default GetInTouch;
