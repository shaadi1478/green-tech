import React from 'react';

const Values = () => {
    return (
        <div className='bg-[#F9FCF8] mt-11 px-6 md:px-40 py-8'>
            <div className=''>
                <div>
                    {/* Responsive Heading */}
                    <h2 className='text-3xl md:text-5xl text-[#293842] font-bold text-start md:text-start mb-10 md:mb-16'>
                        Our Values
                    </h2>

                    {/* Responsive Grid Layout with Gap */}
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                        {/* Card 1 */}
                        <div className='bg-white rounded-lg shadow-lg p-6 text-start hover:shadow-xl hover:scale-105 transition duration-300 ease-in-out'>
                            <h3 className='text-lg md:text-xl font-semibold'>Keep Growing ✨♻️</h3>
                            <p>We aim to be the best at what we do and constantly learn and get better. We don't settle for the status quo. We are focused on growth and continuous improvement. We simplify the steps and maintain consistency.</p>
                        </div>

                        {/* Card 2 */}
                        <div className='bg-white rounded-lg shadow-lg p-6 text-start hover:shadow-xl hover:scale-105 transition duration-300 ease-in-out'>
                            <h3 className='text-lg md:text-xl font-semibold'>Make the Team Win 💬 🙌</h3>
                            <p>We are not afraid to share ideas and concerns with others. We prioritize team success over individual accomplishments. We collaborate and share knowledge with the team. We support each other in achieving both team and personal goals.</p>
                        </div>

                        {/* Card 3 */}
                        <div className='bg-white rounded-lg shadow-lg p-6 text-start hover:shadow-xl hover:scale-105 transition duration-300 ease-in-out'>
                            <h3 className='text-lg md:text-xl font-semibold'>Foster Creativity 💡⛰️</h3>
                            <p>We learn, create, and innovate. We are not afraid to challenge traditional methods. We can adapt to change.</p>
                        </div>

                        {/* Card 4 */}
                        <div className='bg-white rounded-lg shadow-lg p-6 text-start hover:shadow-xl hover:scale-105 transition duration-300 ease-in-out'>
                            <h3 className='text-lg md:text-xl font-semibold'>Be Proactive 🖐️👣</h3>
                            <p>We are motivated and take the initiative. We prefer collaboration over coercion. We anticipate and resolve issues instead of reacting to them.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Values;
