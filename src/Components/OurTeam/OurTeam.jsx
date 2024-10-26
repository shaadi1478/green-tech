import React from 'react';
import priota from '../../assets/Priota-Islam.png';
import { FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { motion } from 'framer-motion'; // Import Framer Motion

// Team members data
const teamMembers = [
    {
        name: 'Imran Ali',
        title: 'Founder',
        image: priota,
        linkedin: 'https://www.linkedin.com/',
        twitter: 'https://twitter.com/',
        bio: 'Nabil is passionate about creating meaningful solutions. He focuses on constant growth, improvement, and delivering value to users.',
    },
    {
        name: 'Person 2',
        title: 'Product Manager',
        image: priota,
        linkedin: 'https://www.linkedin.com/',
        twitter: 'https://twitter.com/',
        bio: 'Person 2 has a background in product development and focuses on aligning the team with continuous innovation.',
    },
    {
        name: 'Person 3',
        title: 'Designer',
        image: priota,
        linkedin: 'https://www.linkedin.com/',
        twitter: 'https://twitter.com/',
        bio: 'Person 3 is responsible for creating designs that resonate with users across platforms.',
    },
    {
        name: 'Person 4',
        title: 'Designer',
        image: priota,
        linkedin: 'https://www.linkedin.com/',
        twitter: 'https://twitter.com/',
        bio: 'Person 4 is responsible for creating designs that resonate with users across platforms.',
    },
    // Add more members as needed
];

const OurTeam = () => {
    const slideInVariants = {
        hidden: { y: 50, opacity: 0 }, // Start off-screen below
        visible: { y: 0, opacity: 1 }, // Slide into view
    };
    return (
        <div>
            <div className='bg-white px-4 md:px-40 py-8'>
                {/* Heading */}
                <h2 className='text-3xl md:text-5xl text-[#293842] font-bold text-start mb-10 md:mb-16'>
                    Meet the People Behind
                </h2>

                {/* Team Grid */}
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8'>
                    {/* Mapping through team members */}
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={index}
                            className='bg-white rounded-lg shadow-lg p-6 flex flex-col md:flex-row items-start md:items-center'
                            initial={{ opacity: 0, x: 20 }} // Start from below and invisible
                            whileInView={{ opacity: 1, x: 0 }} // Animate to visible
                            transition={{ duration: 0.5, delay: index * 0.1 }} // Duration and stagger delay
                        >
                            {/* Profile Image */}
                            <img src={member.image} alt={member.name} className='rounded-full w-32 h-32 mb-4 md:mb-0 md:mr-6' />

                            {/* Content */}
                            <div className='flex-1'>
                                <h3 className='text-lg md:text-xl font-semibold'>{member.name}</h3>
                                <p className='text-sm text-gray-500 mb-4'>{member.title}</p>

                                {/* Social Media Icons */}
                                <div className='flex space-x-4 mb-4'>
                                    <a href={member.linkedin} target='_blank' rel='noopener noreferrer'>
                                        <FaLinkedinIn className='text-[#4F9C3A] text-xl' />
                                    </a>
                                    <a href={member.twitter} target='_blank' rel='noopener noreferrer'>
                                        <FaTwitter className='text-[#4F9C3A] text-xl' />
                                    </a>
                                </div>

                                {/* Bio */}
                                <p className='text-sm'>
                                    {member.bio}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <motion.div
            className='bg-[#F9FCF8] px-6 md:px-40 py-8 text-center'
            variants={slideInVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5 }} // Duration of the animation
        >
            <div className='space-y-5'>
                {/* Heading */}
                <h1 className='text-[#293842] text-5xl font-bold mt-11'>Stay Up To Date</h1>
                <p>Don't miss our latest updates & releases</p>

                {/* Input field and button */}
                <div className='flex justify-center items-center'>
                    {/* Input field */}
                    <input
                        type='text'
                        placeholder='Enter your email'
                        className='rounded-l-lg border outline-none border-gray-300 px-4 py-[10px] w-full md:w-64'
                    />

                    {/* Subscribe button */}
                    <button className='bg-[#E66437] text-white px-6 py-[10px] rounded-r-lg'>
                        Subscribe
                    </button>
                </div>
            </div>
        </motion.div>
        </div>
    );
};

export default OurTeam;
