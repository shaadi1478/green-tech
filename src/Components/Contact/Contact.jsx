import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { Helmet } from "react-helmet-async";
import { motion } from 'framer-motion';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        subject: '',
        message: ''
    });

    const [successPopup, setSuccessPopup] = useState(false); // State for popup visibility

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.send(
            'service_ip0sknq', // Replace with your EmailJS service ID
            'template_g2etle8', // Replace with your EmailJS template ID
            formData,           // Send form data
            '7S2i47m4OEFlsG1Ze' // Replace with your EmailJS user ID
        )
        .then((result) => {
            setSuccessPopup(true); // Show the popup on success
            console.log(result.text);
        })
        .catch((error) => {
            alert('Failed to send the message, please try again.');
            console.log(error.text);
        });

        // Clear the form after submission
        setFormData({
            name: '',
            email: '',
            mobile: '',
            subject: '',
            message: ''
        });

        // Hide the popup after 3 seconds
        setTimeout(() => setSuccessPopup(false), 3000);
    };

    // Variants for animation
    const containerVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0 }
    };

    const popupVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1 }
    };

    return (
        <div>
            <Helmet>
                <title>Green Tech | Contacts</title>
            </Helmet>
            <motion.div
                className='md:p-10 lg:p-16'
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                transition={{ duration: 0.5 }}
            >
                <div className='text-center md:mb-10 mt-24'>
                    <h1 className='text-4xl md:text-5xl text-[#293842] font-bold mb-4'>
                        Get in <span className='text-[#4F9C3A]'>Touch</span>
                    </h1>
                    <p>
                        If you are interested in establishing a partnership or collaboration with us, please <br />
                        complete the form below and share your areas of interest.
                    </p>
                </div>

                {/* Success Popup */}
                {successPopup && (
                    <motion.div
                        className="fixed inset-0 flex items-center justify-center z-50 p-4"
                        variants={popupVariants}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 0.3 }}
                    >
                        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                            <h2 className="text-2xl font-semibold text-green-600 mb-2">Success!</h2>
                            <p>Your message has been sent successfully.</p>
                        </div>
                    </motion.div>
                )}

                <div className='md:px-72 px-4'> {/* Added px-4 for mobile screens */}
                    <form onSubmit={handleSubmit} className="p-6 bg-white rounded-lg">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <div className="input-box">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Full Name"
                                    autoComplete="off"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#4F9C3A]"
                                    required
                                />
                            </div>
                            <div className="input-box">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email Address"
                                    autoComplete="off"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#4F9C3A]"
                                    required
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <div className="input-box">
                                <input
                                    type="number"
                                    name="mobile"
                                    placeholder="Mobile Number"
                                    min="0"
                                    value={formData.mobile}
                                    onChange={handleChange}
                                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#4F9C3A]"
                                    required
                                />
                            </div>
                            <div className="input-box">
                                <input
                                    type="text"
                                    name="subject"
                                    placeholder="Email Subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#4F9C3A]"
                                    required
                                />
                            </div>
                        </div>

                        <div className="mb-4">
                            <textarea
                                name="message"
                                placeholder="Your Message"
                                rows="4"
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#4F9C3A]"
                                required
                            ></textarea>
                        </div>

                        <input
                            type="submit"
                            value="Send Message"
                            className="bg-[#4F9C3A] text-white py-2 px-4 rounded hover:bg-[#3a7d28] cursor-pointer w-full"
                        />
                    </form>
                </div>
            </motion.div>
        </div>
    );
};

export default Contact;
