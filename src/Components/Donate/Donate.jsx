import React from 'react';
import { FaCheck, FaHeart } from 'react-icons/fa';
import Achieved2 from '../Achieved2/Achieved2';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

const Donate = () => {
    // Slide-in animation variants
    const slideInVariants = {
        hidden: {
            opacity: 0,
            x: 50, // Start below
        },
        visible: {
            opacity: 1,
            x: 0, // Slide into position
            transition: {
                duration: 0.5, // Animation duration
                type: 'spring', // Optional: change to 'tween' or 'spring' for different effects
                stiffness: 100, // Optional: controls the spring effect
            },
        },
    };

    return (
        <motion.div
            className='bg-[#FAFAFA] px-4 md:px-44 py-28'
            initial="hidden" // Initial state
            animate="visible" // Animate to visible state
            variants={slideInVariants} // Apply the animation variants
        >
            <Helmet>
                <title>Green Tech | Donate</title>
            </Helmet>
            <div className="bg-white p-6 rounded-lg shadow-2xl text-center">
                <h1 className="text-2xl md:text-3xl font-bold text-[#293842] mb-2">
                    Be A Changemaker! Your Generosity Will
                </h1>
                <h2 className="text-xl md:text-2xl font-semibold text-[#4F9C3A] mb-4">
                    Bring People Closer To Allah.
                </h2>
            </div>

            <div className='md:flex gap-2'>
                <div className="bg-white p-6 rounded-lg shadow-2xl mt-11 max-w-7xl mx-auto">
                    <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">Choose Amount</h2>
                    <hr className="mb-6" />

                    <div className='flex flex-col md:flex-row items-center gap-5 mb-6'>
                        <button className="bg-[#4F9C3A] text-white font-semibold py-2 px-4 rounded hover:bg-[#3B7A2A] w-full md:w-auto">
                            One-time
                        </button>
                        <button className="bg-gray-200 text-gray-700 font-semibold py-2 px-4 rounded hover:bg-gray-300 flex items-center gap-2 w-full md:w-auto">
                            <FaHeart /> Monthly
                        </button>
                    </div>

                    <p className="text-gray-600 mb-6">You can log in to edit your recurring donation any time.</p>

                    <select id="country" className="select select-info w-full mb-9 outline-none" aria-label="Select Country">
                        <option value="" disabled selected>United States - USD</option>
                        <option value="us">United States - USD</option>
                        <option value="uk">United Kingdom - GBP</option>
                        <option value="jp">Japan - JPY</option>
                        <option value="it">Italy - EUR</option>
                        <option value="ca">Canada - CAD</option>
                    </select>

                    <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mb-6'>
                        <input
                            type="text"
                            placeholder="Amount 1"
                            className="input input-bordered input-info w-full outline-none"
                        />
                        <input
                            type="text"
                            placeholder="Amount 2"
                            className="input input-bordered input-info w-full"
                        />
                        <input
                            type="text"
                            placeholder="Amount 3"
                            className="input input-bordered input-info w-full"
                        />
                    </div>

                    <input
                        type="text"
                        placeholder="Other amount"
                        className="input input-bordered input-info w-full mt-4 mb-9"
                    />

                    <p className="text-gray-600 mb-4">
                        Boost your donations by 25% at no cost to you!
                    </p>

                    <div className="flex items-start mb-4">
                        <input type="checkbox" id="giftAid" className="mt-1 mr-2" />
                        <label htmlFor="giftAid" className="text-gray-600">
                            Yes, I am a UK taxpayer and I would like Greentech Apps Foundation to reclaim the tax on all qualifying donations I have made, as well as any future donations, until I notify them otherwise.
                        </label>
                    </div>

                    <p className="text-sm text-gray-500 mb-6">
                        I understand that if I pay less Income Tax and/or Capital Gains Tax than the amount of Gift Aid claimed on all my donations in that tax year, it is my responsibility to pay any difference.
                    </p>

                    <button className="bg-[#4F9C3A] text-white font-semibold py-2 px-4 rounded w-full hover:bg-[#3B7A2A] mb-4">
                        Next
                    </button>

                    <p className="text-gray-500 text-center mb-6 underline cursor-pointer">Powered by Donorbox</p>

                    <div className='grid grid-cols-1 md:grid-cols-3 gap-4 text-gray-600'>
                        <div className='flex items-center gap-2'><FaCheck className='text-green-600' /><p>Quarterly & Annual transparency reports</p></div>
                        <div className='flex items-center gap-2'><FaCheck className='text-green-600' /><p>Quarterly & Annual transparency reports</p></div>
                        <div className='flex items-center gap-2'><FaCheck className='text-green-600' /><p>Quarterly & Annual transparency reports</p></div>
                    </div>
                </div>
                <div className='mt-11 bg-white rounded-lg shadow-2xl md:w-[310px] h-auto'>
                    <h2 className='p-2'>Questions?</h2>
                    <div className="collapse collapse-arrow">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-sm font-medium">I don’t have online Card Payment options. How do I donate?</div>
                        <div className="collapse-content">
                            <p>To support from Bangladesh, you can find the details here. For other countries, please mail us at contact@gtaf.org so we can figure out a suitable way for you to contribute.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-sm font-medium">Do you accept Zakat?</div>
                        <div className="collapse-content">
                            <p>We do not accept Zakat. Islamic Sharia Council and IFAC confirm that we are not eligible for zakat. Therefore, we only accept Sadaqah.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-sm font-medium">Why should I become a monthly donor?</div>
                        <div className="collapse-content">
                            <p>Your regular donation will help us focus more on improving our apps. It will earn you ongoing rewards in the form of Sadaqah Jariyah. As stated in a Hadith, Allah values regular good deeds, no matter how small.

                                And you will get important quarterly and yearly updates, a chance to share direct feedback and early access to upcoming resources.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-sm font-medium">How is the donation money used?</div>
                        <div className="collapse-content">
                            <p>We utilise all donations to improve our Islamic apps, including Quran, Hadith, Dua, Seerah, All-in-One App Sadiq and other apps respectively. And reach those apps to Muslims worldwide.

                                We have multiple dedicated teams to develop, maintain, design, and promote our apps.Our team comprises 25 staff members, including 10 in engineering, 3 in design, 3 in marketing, 3 in product development, 1 in administration, and 5 others. You can learn more here.

                                Your donation is Amanah to us. We update our supporters through email and app notifications about donations on different occasions and periods, especially quarterly and annually. You can subscribe to our newsletter to receive the updates.

                                You can also check our annual reports.

                                GTAF Annual Report 2023.
                                GTAF Annual Report 2022.
                                GTAF Annual Report 2021.
                                GTAF Annual Report 2020.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-sm font-medium">I accidentally chose the monthly donation option. How can I fix it?</div>
                        <div className="collapse-content">
                            <p>Firstly, JazakAllahu khairan for your support. May Allah accept it as Sadaqah Jariyah.

                                Kindly visit donorbox user page to edit your donation type. All our donors are automatically signed up to this platform to customize their recurring donation plan.

                                The following link contains the instructions for editing the recurring donations: How do I edit my recurring donation amount

                                If you need further assistance, kindly share with us the email address you used for the donation or your full name at gtaf.org/contact.

                                Keep us in your Duas.</p>
                        </div>
                    </div>
                </div>
            </div>
            <Achieved2 />
        </motion.div>
    );
};

export default Donate;
