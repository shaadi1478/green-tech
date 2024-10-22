import React from 'react';
import { FaCheck, FaHeart } from 'react-icons/fa';
import Achieved2 from '../Achieved2/Achieved2';

const Donate = () => {
    return (
        <div className='bg-[#FAFAFA] px-4 md:px-44 mt-11'>
            <div className="bg-white p-6 rounded-lg shadow-2xl text-center">
                <h1 className="text-2xl md:text-3xl font-bold text-[#293842] mb-2">
                    Be A Changemaker! Your Generosity Will
                </h1>
                <h2 className="text-xl md:text-2xl font-semibold text-[#4F9C3A] mb-4">
                    Bring People Closer To Allah.
                </h2>
            </div>

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
            <Achieved2 />
        </div>
    );
};

export default Donate;
