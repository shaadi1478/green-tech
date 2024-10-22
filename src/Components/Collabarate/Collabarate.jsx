import React from 'react';
import collabrate from '../../assets/collaborate-hero-image.svg';
import image1 from '../../assets/image-1.svg'
import image2 from '../../assets/image-2.svg'
import image3 from '../../assets/image-3.svg'
import image4 from '../../assets/image-4.svg'
import Partners from '../Partners/Partners';

const Collabarate = () => {
    return (
        <div>
            <div className='hero bg-white p-6 md:p-10 lg:p-16'>
                <div className="hero-content flex flex-col-reverse lg:flex-row-reverse items-center lg:gap-x-20 gap-y-6">
                    <img
                        src={collabrate}
                        className="max-w-full lg:max-w-md rounded-lg"
                        alt="About us"
                    />
                    <div className="text-center lg:text-left">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl text-[#293842] font-bold">
                            Let’s
                        </h1>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl text-[#4F9C3A] font-bold">
                            Collaborate
                        </h1>
                        <p className="py-4 md:py-6 text-sm md:text-base lg:text-lg max-w-md mx-auto lg:mx-0">
                            At GTAF, we are interested in working with other organisations to benefit the Ummah. We believe in collaboration and avoiding duplication of efforts to save resources.
                        </p>
                    </div>
                </div>
            </div>
            <div className='p-6 md:p-10 lg:p-16 bg-[#F9FCF8]'>
                <p className='text-center mb-6'>
                    We consider some key things while collaborating with other non-profit <br /> organisations, influencers, or personalities. Some of the important ones are-
                </p>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 md:px-36'>
                    <div className='bg-white p-4 rounded-lg shadow-md'>
                        <img src={image1} alt="" className='mb-3' />
                        <h2 className='font-semibold text-lg'>1. Islamic Ethics and Values</h2>
                        <p className='text-sm'>
                            Our collaboration is guided by the principles of Islamic ethics and values, including honesty, integrity, and compassion. We strive to uphold these values in all our interactions, both within the organisation and with external partners.
                        </p>
                    </div>
                    <div className='bg-white p-4 rounded-lg shadow-md'>
                        <img src={image2} alt="" className=' mb-3' />
                        <h2 className='font-semibold text-lg'>2. Shared Vision and Goals</h2>
                        <p className='text-sm'>
                        Collaboration thrives when all parties are aligned around a shared vision and common goals. We seek collaborators who share our commitment to serving the Muslim community and advancing our mission through technology. You can check out our mission, vision and core values here.
                        </p>
                    </div>
                    <div className='bg-white p-4 rounded-lg shadow-md'>
                        <img src={image3} alt="" className=' mb-3' />
                        <h2 className='font-semibold text-lg'>3. Equitable Partnerships</h2>
                        <p className='text-sm'>
                        We believe in building partnerships that are equitable, fair, and mutually beneficial. We strive to create opportunities for all collaborators to contribute their expertise, resources, and insights towards our shared objectives.
                        </p>
                    </div>
                    <div className='bg-white p-4 rounded-lg shadow-md'>
                        <img src={image4} alt="" className='mb-3' />
                        <h2 className='font-semibold text-lg'>4. Continuous Learning and Improvement</h2>
                        <p className='text-sm'>
                        Collaboration provides opportunities for learning and growth. We approach collaboration with a mindset of continuous improvement, seeking feedback, evaluating outcomes, and adapting our approach to enhance effectiveness and efficiency.
                        </p>
                    </div>
                </div>
            </div>
            <Partners />
        </div>
    );
};

export default Collabarate;
