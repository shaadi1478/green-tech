import React from 'react';
import { FaFacebook, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { TbWorld } from 'react-icons/tb';

const Attribution = () => {
    return (
        <div className='bg-[#F9FCF8] p-6 md:p-10 lg:p-16'>
            <div className='text-center mb-10'>
                <h1 className='text-3xl md:text-5xl text-[#293842] font-bold mb-4'>
                    Personal <span className='text-[#4F9C3A]'>Attribution</span>
                </h1>
            </div>

            {/* Grid for attributions */}
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 md:px-36'>
                {[
                    { name: 'Naveed Ahmad', icon: <FaLinkedin className='text-white' /> },
                    { name: 'Ahmed El-Helw', icon: <FaFacebook className='text-white' /> },
                    { name: 'Nur Ahmad Furlong', icon: <FaFacebook className='text-white' /> },
                    { name: 'Sharif Ahmed', icon: <FaFacebook className='text-white' /> },
                    { name: 'Mustafa', icon: <FaXTwitter className='text-white' /> },
                    { name: 'Anas Amer Quevedo', icon: <FaFacebook className='text-white' /> },
                    { name: 'Mustafizur Rahman', icon: <TbWorld className='text-white' /> },
                    { name: 'Bdz Brahim', icon: <TbWorld className='text-white' /> },
                    { name: 'Goran Gharib', icon: <TbWorld className='text-white' /> },
                ].map((person, index) => (
                    <div key={index} className='bg-white p-6 rounded-lg shadow-lg flex flex-col items-center justify-center text-center space-y-3'>
                        
                        <h2 className='text-lg font-semibold'>{person.name}</h2>
                        <div className='bg-[#4F9C3A] p-1 rounded-md'>
                            <div className='text-xl'>{person.icon}</div>
                        </div>
                    </div>
                ))}
            </div>
            <p className='md:px-36 text-center mt-11'>Many other organisations and individual brothers and sisters have also helped us <br /> by sharing feedback, preparing content, translating app UI, and reporting bugs. May <br /> Allah reward them all, Ameen.</p>
        </div>
    );
};

export default Attribution;
