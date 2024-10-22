import about from '../../assets/about.svg';
import vision from '../../assets/vision.svg';
import mission from '../../assets/mountain.svg';
import Achieved from '../Achieved/Achieved';

const About = () => {
    return (
        <div className="bg-[#FFFFFF] px-4 py-8">
            {/* Hero Section */}
            <div className="hero">
                <div className="hero-content flex flex-col-reverse lg:flex-row-reverse items-center lg:gap-x-20 gap-y-6">
                    <img
                        src={about}
                        className="max-w-full lg:max-w-sm rounded-lg" 
                        alt="About us" 
                    />
                    <div className="text-center lg:text-left">
                        <h1 className="text-3xl lg:text-5xl text-[#293842] font-bold">Bring People</h1>
                        <h1 className="text-3xl lg:text-5xl text-[#4F9C3A] font-bold">Closer To Allah</h1>
                        <p className="py-6 text-sm lg:text-base">
                            Greentech Apps Foundation (GTAF) is a UK-based charity with a vision to “Bring people closer to Allah”. We aim to help Muslims better understand Islam. Since 2015, we have been focused on building user-friendly mobile applications to serve this purpose.
                        </p>
                    </div>
                </div>
            </div>

            {/* Vision and Mission Section */}
            <div className="text-center lg:text-left text-[#293842] px-4 lg:px-40 py-8">
                <h1 className="text-4xl lg:text-5xl font-bold mb-8">Our Vision and Mission</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Vision Card */}
                    <div className="bg-[#4F9C3A] text-white rounded-lg shadow-lg p-6 flex flex-col-reverse md:flex-row items-center md:items-start gap-6">
                        <div className="md:w-2/3">
                            <h2 className="text-xl lg:text-2xl font-bold mb-2">Our Vision</h2>
                            <p className="text-sm lg:text-base">To bring people closer to Allah</p>
                        </div>
                        <div className="md:w-1/3">
                            <img src={vision} alt="Vision" className="h-[67px] w-[67px] rounded-lg" />
                        </div>
                    </div>

                    {/* Mission Card */}
                    <div className="bg-[#4F9C3A] text-white rounded-lg shadow-lg p-6 flex flex-col-reverse md:flex-row items-center md:items-start gap-6">
                        <div className="md:w-2/3">
                            <h2 className="text-xl lg:text-2xl font-bold mb-2">Our Mission</h2>
                            <p className="text-sm lg:text-base">To help Muslims better understand Islam</p>
                        </div>
                        <div className="md:w-1/3">
                            <img src={mission} alt="Mission" className="h-[67px] w-[67px] rounded-lg" />
                        </div>
                    </div>
                </div>
            </div>
            <Achieved />
        </div>
    );
};

export default About;
