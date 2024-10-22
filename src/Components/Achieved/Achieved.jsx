import React from 'react';
import apps from '../../assets/apps.svg';
import calendar from '../../assets/calendar.svg';
import users from '../../assets/users.svg';
import earth from '../../assets/earth.svg';
import Values from '../Values/Values';
import OurTeam from '../OurTeam/OurTeam';

const Achieved = () => {
    return (
        <div>
            <div className='bg-[#F9FCF8] px-6 md:px-40 py-8'>
                <div>
                    {/* Responsive Heading */}
                    <h2 className='text-3xl md:text-5xl text-[#293842] font-bold text-center md:text-start mb-10 md:mb-16'>
                        What We Have Achieved So Far
                    </h2>

                    {/* Responsive Grid Layout */}
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6'>
                        {/* Card 1 */}
                        <div className='bg-white rounded-lg shadow-lg p-6 md:p-14 text-center'>
                            <img src={apps} alt="Apps icon" className='mx-auto mb-4' />
                            <h3 className='text-lg md:text-xl font-semibold'>10+ Apps</h3>
                            <p>Islamic Applications</p>
                        </div>

                        {/* Card 2 */}
                        <div className='bg-white rounded-lg shadow-lg p-6 md:p-14 text-center'>
                            <img src={calendar} alt="Calendar icon" className='mx-auto mb-4' />
                            <h3 className='text-lg md:text-xl font-semibold'>9+ Years</h3>
                            <p>Serving Ummah</p>
                        </div>

                        {/* Card 3 */}
                        <div className='bg-white rounded-lg shadow-lg p-6 md:p-14 text-center'>
                            <img src={users} alt="Users icon" className='mx-auto mb-4' />
                            <h3 className='text-lg md:text-xl font-semibold'>3.5M+ Users</h3>
                            <p>From worldwide & growing</p>
                        </div>

                        {/* Card 4 */}
                        <div className='bg-white rounded-lg shadow-lg p-6 md:p-14 text-center'>
                            <img src={earth} alt="Earth icon" className='mx-auto mb-4' />
                            <h3 className='text-lg md:text-xl font-semibold'>Multilingual</h3>
                            <p>Supports 66 Languages</p>
                        </div>
                    </div>

                    {/* Responsive Paragraph */}
                    <p className='text-center md:text-left mt-10 md:mt-16 max-w-3xl mx-auto'>
                        Alhamdulillah, we now have 10+ apps, millions of users, and more than 20 motivated team members.
                        Alongside our flagship app, <strong>Al Quran (Tafsir & by Word)</strong>, we also offer apps for Hadith Collections, Dua, and Seerah. We're continuously enhancing our apps to help Muslims improve every day.
                    </p>
                </div>
            </div>
            <Values />
            <OurTeam />
        </div>
    );
};

export default Achieved;
