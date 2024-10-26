import React from 'react';
import serves from '../../assets/services.svg';
import Deliver from '../Deliver/Deliver';
import Project from '../Project/Project';
import Attribution from '../Attribution/Attribution';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

const Services = () => {
    const headingVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0 },
    };
    
    const paragraphVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };
    
    return (
        <div>
            <div className='hero bg-[#F9FCF8] p-6 md:p-10 lg:p-16'>
                <Helmet>
                    <title>Green Tech | Our Services</title>
                </Helmet>
                <div className="hero-content mt-16 md:mt-3 flex flex-col-reverse lg:flex-row-reverse items-center lg:gap-x-20 gap-y-6">
                    <motion.img
                        variants={headingVariants}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 0.5 }}
                        src={serves}
                        className="max-w-full lg:max-w-sm rounded-lg"
                        alt="About us"
                    />
                    <div className="text-center lg:text-left">
                        <motion.h1
                            className="text-3xl md:text-3xl lg:text-5xl text-[#293842] font-bold"
                            variants={headingVariants}
                            initial="hidden"
                            animate="visible"
                            transition={{ duration: 0.5 }}
                        >
                            Expert Services,
                        </motion.h1>
                        <motion.h1
                            className="text-2xl md:text-3xl lg:text-5xl text-[#4F9C3A] font-bold"
                            variants={headingVariants}
                            initial="hidden"
                            animate="visible"
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            Limitless Potential
                        </motion.h1>
                        <motion.p
                            className="py-4 md:py-6 text-sm md:text-base lg:text-lg"
                            variants={paragraphVariants}
                            initial="hidden"
                            animate="visible"
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            Unleash your project's potential with our expert services. Cutting-edge technology and a skilled team delivering top-quality design and development solutions.
                        </motion.p>
                    </div>
                </div>
            </div>

            <Deliver />
            <Project />
        </div>
    );
};

export default Services;
