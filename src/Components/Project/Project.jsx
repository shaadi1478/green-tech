import React from 'react';
import serves from '../../assets/project.svg';
import logo from '../../assets/gtal-logo-horizontal.svg'

const Project = () => {
    return (
        <div>
            <div className='hero bg-[#F9FCF8] p-6 md:p-10 lg:p-16'>
                <div className="hero-content flex flex-col lg:flex-row-reverse items-center lg:gap-x-72 gap-y-6">

                    <div className="text-center lg:text-left">
                        <h1 className="text-3xl md:text-3xl lg:text-5xl text-[#293842] font-bold">
                            Have a Project                        </h1>
                        <h1 className="text-xl md:text-3xl lg:text-5xl text-[#293842] font-bold">
                            in <span className='text-[#4F9C3A]'>Mind?</span>
                        </h1>
                        <p className="py-4 md:py-6 text-sm md:text-base lg:text-lg">
                            Unleash your project's potential with our expert services. Cutting-edge technology and a skilled team delivering top-quality design and development solutions.
                        </p>
                        <button className='btn bg-[#4F9C3A] text-xl text-white rounded-full hover:bg-[#4F9C3A] hover:shadow-2xl'>I want to Discuss</button>
                    </div>
                    <img
                        src={serves}
                        className="max-w-full lg:max-w-sm rounded-lg"
                        alt="About us"
                    />
                </div>
            </div>
            <div className='m-6 md:m-10 lg:m-20 mx-auto max-w-screen-2xl'>
                <div className='bg-[#ECF6E9] rounded-md'>
                    <div className='border-l-4 border-[#4F9C3A] ml-3 p-4 text-base md:text-lg lg:text-xl'>
                        <p className=''>
                            The income from these projects goes towards Greentech Apps Foundation projects. In other words, these projects help us fuel and stabilize Greentech Apps Foundation projects. Even if there is no project, you can always stay connected with us, share our work, and consider us for donations if possible. Thank you for considering us for your service needs. We look forward to working with you!
                        </p>
                    </div>
                </div>
                <img src={logo} alt="Greentech Apps Foundation Logo" className='h-14 mt-8 mx-auto' />
            </div>

        </div>
    );
};

export default Project;