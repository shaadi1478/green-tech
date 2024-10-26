import React from 'react';
import about from '../../assets/about.svg';
import vision from '../../assets/vision.svg';
import mission from '../../assets/mountain.svg';
import Achieved from '../Achieved/Achieved';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <div className="bg-[#FFFFFF] px-4 py-14">
            <Helmet>
                <title>Green Tech | About Us</title>
            </Helmet>
            {/* Hero Section */}
            <motion.div 
                className="hero"
                initial={{ opacity: 0, x: -50 }} // Start off-screen
                animate={{ opacity: 1, x: 0 }} // Slide in
                transition={{ duration: 0.5 }} // Animation duration
            >
                <div className="hero-content flex flex-col-reverse lg:flex-row-reverse items-center lg:gap-x-20 gap-y-6">
                    <img
                        src={about}
                        className="max-w-full lg:max-w-sm rounded-lg"
                        alt="About us"
                    />
                    <div className="text-center lg:text-left">
                        <h1 className="text-3xl lg:text-5xl text-[#293842] font-bold">Bring People</h1>
                        <h1 className="text-3xl lg:text-5xl text-[#4F9C3A] font-bold">Closer To Allah</h1>
                        <p className="py-6 text-sm lg:text-base">
                            Greentech Apps Foundation (GTAF) is a UK-based charity with a vision to “Bring people closer to Allah”. We aim to help Muslims better understand Islam. Since 2015, we have been focused on building user-friendly mobile applications to serve this purpose.
                        </p>
                    </div>
                </div>
            </motion.div>

            {/* Vision and Mission Section */}
            <motion.div 
                className="text-center lg:text-left text-[#293842] px-4 lg:px-40 py-8"
                initial={{ opacity: 0 }} // Start invisible
                animate={{ opacity: 1 }} // Fade in
                transition={{ duration: 0.5, delay: 0.2 }} // Animation duration and delay
            >
                <h1 className="text-4xl lg:text-5xl font-bold mb-8">Our Vision and Mission</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Vision Card */}
                    <motion.div
                        className="bg-[#4F9C3A] text-white rounded-lg shadow-lg p-6 flex flex-col-reverse md:flex-row items-center md:items-start gap-6"
                        initial={{ opacity: 0, y: 20 }} // Start slightly below
                        animate={{ opacity: 1, y: 0 }} // Slide up
                        transition={{ duration: 0.5, delay: 0.4 }} // Animation duration and delay
                    >
                        <div className="md:w-2/3">
                            <h2 className="text-xl lg:text-2xl font-bold mb-2">Our Vision</h2>
                            <p className="text-sm lg:text-base">To bring people closer to Allah</p>
                        </div>
                        <div className="md:w-1/3">
                            <img src={vision} alt="Vision" className="h-[67px] w-[67px] rounded-lg" />
                        </div>
                    </motion.div>

                    {/* Mission Card */}
                    <motion.div
                        className="bg-[#4F9C3A] text-white rounded-lg shadow-lg p-6 flex flex-col-reverse md:flex-row items-center md:items-start gap-6"
                        initial={{ opacity: 0, y: 20 }} // Start slightly below
                        animate={{ opacity: 1, y: 0 }} // Slide up
                        transition={{ duration: 0.5, delay: 0.5 }} // Animation duration and delay
                    >
                        <div className="md:w-2/3">
                            <h2 className="text-xl lg:text-2xl font-bold mb-2">Our Mission</h2>
                            <p className="text-sm lg:text-base">To help Muslims better understand Islam</p>
                        </div>
                        <div className="md:w-1/3">
                            <img src={mission} alt="Mission" className="h-[67px] w-[67px] rounded-lg" />
                        </div>
                    </motion.div>
                </div>
            </motion.div>

            <Achieved />
        </div>
    );
};

export default About;
