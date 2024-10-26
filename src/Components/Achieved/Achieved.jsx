import React from 'react';
import apps from '../../assets/apps.svg';
import calendar from '../../assets/calendar.svg';
import users from '../../assets/users.svg';
import earth from '../../assets/earth.svg';
import Values from '../Values/Values';
import OurTeam from '../OurTeam/OurTeam';
import { motion } from 'framer-motion';

const Achieved = () => {
    return (
        <div>
            <div className='bg-[#F9FCF8] px-6 md:px-40 py-8'>
                <div>
                    {/* Responsive Heading */}
                    <motion.h2 
                        className='text-3xl md:text-5xl text-[#293842] font-bold text-center md:text-start mb-10 md:mb-16'
                        initial={{ opacity: 0 }} // Start invisible
                        animate={{ opacity: 1 }} // Fade in
                        transition={{ duration: 0.5 }} // Animation duration
                    >
                        What We Have Achieved So Far
                    </motion.h2>

                    {/* Responsive Grid Layout */}
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6'>
                        {/* Card 1 */}
                        <motion.div
                            className='bg-white rounded-lg shadow-lg p-6 md:p-14 text-center'
                            initial={{ opacity: 0, y: 20 }} // Start slightly below
                            animate={{ opacity: 1, y: 0 }} // Slide up
                            transition={{ duration: 0.5, delay: 0.1 }} // Animation duration and delay
                        >
                            <img src={apps} alt="Apps icon" className='mx-auto mb-4' />
                            <h3 className='text-lg md:text-xl font-semibold'>10+ Apps</h3>
                            <p>Islamic Applications</p>
                        </motion.div>

                        {/* Card 2 */}
                        <motion.div
                            className='bg-white rounded-lg shadow-lg p-6 md:p-14 text-center'
                            initial={{ opacity: 0, y: 20 }} // Start slightly below
                            animate={{ opacity: 1, y: 0 }} // Slide up
                            transition={{ duration: 0.5, delay: 0.2 }} // Animation duration and delay
                        >
                            <img src={calendar} alt="Calendar icon" className='mx-auto mb-4' />
                            <h3 className='text-lg md:text-xl font-semibold'>9+ Years</h3>
                            <p>Serving Ummah</p>
                        </motion.div>

                        {/* Card 3 */}
                        <motion.div
                            className='bg-white rounded-lg shadow-lg p-6 md:p-14 text-center'
                            initial={{ opacity: 0, y: 20 }} // Start slightly below
                            animate={{ opacity: 1, y: 0 }} // Slide up
                            transition={{ duration: 0.5, delay: 0.3 }} // Animation duration and delay
                        >
                            <img src={users} alt="Users icon" className='mx-auto mb-4' />
                            <h3 className='text-lg md:text-xl font-semibold'>3.5M+ Users</h3>
                            <p>From worldwide & growing</p>
                        </motion.div>

                        {/* Card 4 */}
                        <motion.div
                            className='bg-white rounded-lg shadow-lg p-6 md:p-14 text-center'
                            initial={{ opacity: 0, y: 20 }} // Start slightly below
                            animate={{ opacity: 1, y: 0 }} // Slide up
                            transition={{ duration: 0.5, delay: 0.4 }} // Animation duration and delay
                        >
                            <img src={earth} alt="Earth icon" className='mx-auto mb-4' />
                            <h3 className='text-lg md:text-xl font-semibold'>Multilingual</h3>
                            <p>Supports 66 Languages</p>
                        </motion.div>
                    </div>

                    {/* Responsive Paragraph */}
                    <motion.p 
                        className='text-center md:text-left mt-10 md:mt-16 max-w-3xl mx-auto'
                        initial={{ opacity: 0 }} // Start invisible
                        animate={{ opacity: 1 }} // Fade in
                        transition={{ duration: 0.5, delay: 0.5 }} // Animation duration and delay
                    >
                        Alhamdulillah, we now have 10+ apps, millions of users, and more than 20 motivated team members.
                        Alongside our flagship app, <strong>Al Quran (Tafsir & by Word)</strong>, we also offer apps for Hadith Collections, Dua, and Seerah. We're continuously enhancing our apps to help Muslims improve every day.
                    </motion.p>
                </div>
            </div>
            <Values />
            <OurTeam />
        </div>
    );
};

export default Achieved;
