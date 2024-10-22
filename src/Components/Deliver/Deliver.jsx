import React from 'react';
import daimond from '../../assets/diamond.svg';
import mobile from '../../assets/mobile.svg';
import web from '../../assets/web.svg';

const Deliver = () => {
    return (
        <div className='bg-white px-6 md:px-40 py-8 mt-11'>
            {/* Responsive Heading */}
            <h2 className='text-3xl md:text-5xl text-[#293842] font-bold text-center mb-10 md:mb-16'>
            What We <span className='text-[#4F9C3A]'>Deliver</span>
            </h2>

            {/* Responsive Grid Layout */}
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
                {/* Card 1 */}
                <div className='bg-white rounded-lg shadow-lg p-6 flex flex-col items-center'>
                    <img src={daimond} alt="UI-UX Design" className='mb-4 w-16 h-16' />
                    <h3 className='text-lg md:text-xl font-semibold'>UI-UX Design</h3>
                    <p className='text-sm md:text-base text-center'>
                        A good design is essential for building an engaging and scalable product. We apply a multidisciplinary approach to craft a delightful User Experience for your digital product.
                    </p>
                </div>

                {/* Card 2 */}
                <div className='bg-white rounded-lg shadow-lg p-6 flex flex-col items-center'>
                    <img src={mobile} alt="Mobile App Development" className='mb-4 w-16 h-16' />
                    <h3 className='text-lg md:text-xl font-semibold'>Mobile App Development</h3>
                    <p className='text-sm md:text-base text-center'>
                        We help to get your business level up by building mobile applications which are both performant and user-friendly. We build both native and cross-platform applications covering both Android and iOS devices.
                    </p>
                </div>

                {/* Card 3 */}
                <div className='bg-white rounded-lg shadow-lg p-6 flex flex-col items-center'>
                    <img src={web} alt="Web App Development" className='mb-4 w-16 h-16' />
                    <h3 className='text-lg md:text-xl font-semibold'>Web App Development</h3>
                    <p className='text-sm md:text-base text-center'>
                        We build fast, efficient and user-friendly web applications using the latest technologies.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Deliver;