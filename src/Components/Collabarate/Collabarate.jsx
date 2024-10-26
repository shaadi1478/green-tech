import React from 'react';
import collabrate from '../../assets/collaborate-hero-image.svg';
import image1 from '../../assets/image-1.svg';
import image2 from '../../assets/image-2.svg';
import image3 from '../../assets/image-3.svg';
import image4 from '../../assets/image-4.svg';
import Partners from '../Partners/Partners';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

const Collabarate = () => {
    return (
        <div>
            <Helmet>
                <title>Green Tech | Collaboration</title>
            </Helmet>
            <div className='hero bg-white p-6 md:p-10 lg:p-16'>
                <div className="hero-content mt-16 md:mt-16 flex flex-col-reverse lg:flex-row-reverse items-center lg:gap-x-20 gap-y-6">
                    <motion.img
                        src={collabrate}
                        className="max-w-full lg:max-w-md rounded-lg"
                        alt="About us"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                    />
                    <motion.div
                        className="text-center lg:text-left"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-6xl text-[#293842] font-bold">Let’s</h1>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl text-[#4F9C3A] font-bold">Collaborate</h1>
                        <p className="py-4 md:py-6 text-sm md:text-base lg:text-lg max-w-md mx-auto lg:mx-0">
                            At GTAF, we are interested in working with other organizations to benefit the Ummah. We believe in collaboration and avoiding duplication of efforts to save resources.
                        </p>
                    </motion.div>
                </div>
            </div>
            <div className='p-6 md:p-10 lg:p-16 bg-[#F9FCF8]'>
                <p className='text-center mb-6'>
                    We consider some key things while collaborating with other non-profit organizations, influencers, or personalities. Some of the important ones are-
                </p>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 md:px-36'>
                    {[{
                        img: image1,
                        title: "1. Islamic Ethics and Values",
                        text: "Our collaboration is guided by the principles of Islamic ethics and values, including honesty, integrity, and compassion."
                    },
                    {
                        img: image2,
                        title: "2. Shared Vision and Goals",
                        text: "Collaboration thrives when all parties are aligned around a shared vision and common goals."
                    },
                    {
                        img: image3,
                        title: "3. Equitable Partnerships",
                        text: "We believe in building partnerships that are equitable, fair, and mutually beneficial."
                    },
                    {
                        img: image4,
                        title: "4. Continuous Learning and Improvement",
                        text: "Collaboration provides opportunities for learning and growth."
                    }].map((item, index) => (
                        <motion.div
                            key={index}
                            className='bg-white p-4 rounded-lg shadow-md'
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                        >
                            <img src={item.img} alt="" className='mb-3' />
                            <h2 className='font-semibold text-lg'>{item.title}</h2>
                            <p className='text-sm'>{item.text}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
            <Partners />
        </div>
    );
};

export default Collabarate;