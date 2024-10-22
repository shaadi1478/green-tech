import React from 'react';

const GetInTouch = () => {
    return (
        <div className=' md:p-10  lg:p-16 '>
            <div className='text-center md:mb-10 mt-5'>
                <h1 className='text-4xl md:text-5xl text-[#293842] font-bold mb-4'>
                    Get in <span className='text-[#4F9C3A]'>Touch</span>
                    
                </h1>
                <p>If you are interested in establishing a partnership or collaboration with us, please <br /> complete the form below and share your areas of interest. We are eager to explore <br /> potential collaborations and create mutual value together.</p>
            </div>
            <div className='md:px-72 '>
            <form action="#" className="p-6 bg-white rounded-lg transition-all duration-300 ease-in-out">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div className="input-box">
                        <input
                            type="text"
                            id="name"
                            placeholder="Full Name"
                            autoComplete="off"
                            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#4F9C3A] transition duration-200"
                        />
                    </div>
                    <div className="input-box">
                        <input
                            type="email"
                            placeholder="Email Address"
                            autoComplete="off"
                            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#4F9C3A] transition duration-200"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div className="input-box">
                        <input
                            type="number"
                            placeholder="Mobile Number"
                            min="0"
                            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#4F9C3A] transition duration-200"
                        />
                    </div>
                    <div className="input-box">
                        <input
                            type="text"
                            placeholder="Email Subject"
                            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#4F9C3A] transition duration-200"
                        />
                    </div>
                </div>

                <div className="mb-4">
                    <textarea
                        placeholder="Your Message"
                        rows="4"
                        className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#4F9C3A] transition duration-200"
                    ></textarea>
                </div>

                <input
                    type="submit"
                    value="Send Message"
                    className="bg-[#4F9C3A] text-white py-2 px-4 rounded hover:bg-[#3a7d28] transition-colors cursor-pointer w-full"
                />
            </form>
            </div>

        </div>
    );
};

export default GetInTouch;