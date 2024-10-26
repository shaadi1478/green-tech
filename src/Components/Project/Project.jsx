import React from 'react';
import serves from '../../assets/project.svg';
import logo from '../../assets/gtal-logo-horizontal.svg';
import { motion } from 'framer-motion';

const Project = () => {
    const titleVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0 },
    };
    
    const buttonVariants = {
        hidden: { scale: 0.8 },
        visible: { scale: 1 },
    };
    
    return (
        <div>
            <div className='hero bg-[#F9FCF8] p-6 md:p-10 lg:p-16'>
                <div className="hero-content flex flex-col lg:flex-row-reverse items-center lg:gap-x-72 gap-y-6">

                    <div className="text-center lg:text-left">
                        <motion.h1
                            className="text-3xl md:text-3xl lg:text-5xl text-[#293842] font-bold"
                            variants={titleVariants}
                            initial="hidden"
                            animate="visible"
                            transition={{ duration: 0.5 }}
                        >
                            Have a Project
                        </motion.h1>

                        <motion.h1
                            className="text-xl md:text-3xl lg:text-5xl text-[#293842] font-bold"
                            variants={titleVariants}
                            initial="hidden"
                            animate="visible"
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            in <span className='text-[#4F9C3A]'>Mind?</span>
                        </motion.h1>

                        <motion.p
                            className="py-4 md:py-6 text-sm md:text-base lg:text-lg"
                            variants={titleVariants}
                            initial="hidden"
                            animate="visible"
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            Unleash your project's potential with our expert services. Cutting-edge technology and a skilled team delivering top-quality design and development solutions.
                        </motion.p>

                        <motion.button
                            className='btn bg-[#4F9C3A] text-xl text-white rounded-full hover:bg-[#4F9C3A] hover:shadow-2xl'
                            variants={buttonVariants}
                            initial="hidden"
                            animate="visible"
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            I want to Discuss
                        </motion.button>
                    </div>
                    
                    <motion.img
                        src={serves}
                        className="max-w-full lg:max-w-sm rounded-lg"
                        alt="About us"
                        variants={titleVariants}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 0.5, delay: 0.2 }}
                    />
                </div>
            </div>

            <motion.div
             variants={titleVariants}
             initial="hidden"
             animate="visible"
             transition={{ duration: 0.5, delay: 0.2 }}
              className='m-6 md:m-10 lg:m-20 mx-auto max-w-screen-2xl'>
                <div className='bg-[#ECF6E9] rounded-md'>
                    <div className='border-l-4 border-[#4F9C3A] ml-3 p-4 text-base md:text-lg lg:text-xl'>
                        <p>
                            The income from these projects goes towards Greentech Apps Foundation projects. In other words, these projects help us fuel and stabilize Greentech Apps Foundation projects. Even if there is no project, you can always stay connected with us, share our work, and consider us for donations if possible. Thank you for considering us for your service needs. We look forward to working with you!
                        </p>
                    </div>
                </div>
                
                <img src={logo} alt="Greentech Apps Foundation Logo" className='h-14 mt-8 mx-auto' />
            </motion.div>
        </div>
    );
};

export default Project;
