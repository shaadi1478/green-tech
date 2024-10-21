import about from '../../assets/about.svg'
import vision from '../../assets/vision.svg'
import mission from '../../assets/mountain.svg'
const About = () => {
    return (
        <div className='bg-[#FFFFFF] px-4"'>
            <div className="hero  ">
                <div className="hero-content gap-x-52 flex-col lg:flex-row-reverse">
                    <img
                        src={about}
                        className="max-w-sm rounded-lg" />
                    <div>
                        <h1 className="text-5xl text-[#293842] font-bold">Bring People</h1>
                        <h1 className="text-5xl text-[#4F9C3A] font-bold">Closer To Allah</h1>
                        <p className="py-6">
                            Greentech Apps Foundation (GTAF) is a UK-based charity with a vision to “Bring people closer to Allah”. We aim to help Muslims better understand Islam.


                            With the vision and mission in mind, we have been focused on building user-friendly mobile applications since our journey began in 2015.
                        </p>
                    </div>

                </div>
            </div>
            <div className='text-[#293842] px-40 text-4xl'>
                <h1 className='text-5xl font-bold'>Our Vision and Mission</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
    {/* Vision Card */}
    <div className="bg-[#4F9C3A] text-white  rounded-lg shadow-lg p-6 flex flex-col md:flex-row items-center md:items-start gap-x-[146px]">
        <div className="md:w-1/2">
            <h2 className="text-2xl font-bold mb-2">Our Vision</h2>
            <p className="text-sm">To bring people closer to Allah</p>
        </div>
        <div className="md:w-1/2 mt-4 md:mt-0 md:ml-6">
            <img src={vision} alt="Vision" className="h-[70px] w-[70px] rounded-lg" />
        </div>
    </div>

    {/* Mission Card */}
    <div className="bg-[#4F9C3A] text-white rounded-lg shadow-lg p-6 flex flex-col md:flex-row items-center md:items-start gap-x-[146px]">
        <div className="md:w-1/2">
            <h2 className="text-2xl font-bold mb-2">Our Mission</h2>
            <p className="text-sm">To help Muslims better understand Islam</p>
        </div>
        <div className="md:w-1/2 mt-4 md:mt-0 md:ml-6">
            <img src={mission} alt="Mission" className="h-[67px] w-[67px] rounded-lg" />
        </div>
    </div>
</div>


            </div>
        </div>
    );
};

export default About;