import React from 'react';
import serves from '../../assets/services.svg';
import Deliver from '../Deliver/Deliver';
import Project from '../Project/Project';
import Attribution from '../Attribution/Attribution';

const Services = () => {
    return (
        <div className=''>
            <div className='hero bg-[#F9FCF8] p-6 md:p-10 lg:p-16'>
                <div className="hero-content flex flex-col-reverse lg:flex-row-reverse items-center lg:gap-x-20 gap-y-6">
                    <img
                        src={serves}
                        className="max-w-full lg:max-w-sm rounded-lg"
                        alt="About us"
                    />
                    <div className="text-center lg:text-left">
                        <h1 className="text-3xl md:text-3xl lg:text-5xl text-[#293842] font-bold">
                            Expert Services,
                        </h1>
                        <h1 className="text-2xl md:text-3xl lg:text-5xl text-[#4F9C3A] font-bold">
                            Limitless Potential
                        </h1>
                        <p className="py-4 md:py-6 text-sm md:text-base lg:text-lg">
                            Unleash your project's potential with our expert services. Cutting-edge technology and a skilled team delivering top-quality design and development solutions.
                        </p>
                    </div>
                </div>
            </div>

            <Deliver />
            <Project />
        </div>
    );
};

export default Services;