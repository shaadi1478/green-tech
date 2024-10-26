import React from 'react';
import { motion } from 'framer-motion';
import hadith from '../../assets/h.webp';
import s from '../../assets/s.webp';
import s2 from '../../assets/s2.webp';
import d from '../../assets/d.webp';
import d2 from '../../assets/d2.webp';
import a from '../../assets/a.webp';
import a2 from '../../assets/a2.webp';
import m from '../../assets/m.webp';
import d3 from '../../assets/d3.webp';
import HadithSection from '../HadithSection/HadithSection';
import { Helmet } from 'react-helmet-async';

const appsData = [
    { title: "Hadith Collection - Image 1", image: hadith },
    { title: "Hadith Collection - Image 2", image: s },
    { title: "Hadith Collection - Image 3", image: d },
    { title: "Hadith Collection - Image 4", image: d2 },
    { title: "Hadith Collection - Image 5", image: a },
    { title: "Hadith Collection - Image 6", image: s2 },
    { title: "Hadith Collection - Image 7", image: m },
    { title: "Hadith Collection - Image 8", image: d3 },
    { title: "Hadith Collection - Image 9", image: a2 },
];

const AppCard = ({ title, image }) => {
    const [imgError, setImgError] = React.useState(false);

    return (
        <motion.div
            className="bg-[#FAFAFA] text-center border-none p-2 rounded-lg flex flex-col justify-center items-center"
            initial={{ opacity: 0, x: -50 }} // Start invisible and slightly to the left
            animate={{ opacity: 1, x: 0 }} // Fade in and slide to original position
            exit={{ opacity: 0, x: 50 }} // Fade out and slide to the right when exiting
            transition={{ duration: 0.5 }} // Duration of the animation
        >
            <h2 className="md:text-4xl text-2xl font-bold mb-4">{title}</h2>
            <div className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <a
                    href="javascript:void(0)"
                    className="bg-green-500 text-white font-semibold px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-lg shadow hover:bg-green-600 text-sm sm:text-base md:text-lg"
                    aria-label={`Learn more about ${title}`}
                >
                    Learn More
                </a>
                <a
                    href="javascript:void(0)"
                    className="bg-gray-100 text-green-500 font-semibold px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-lg shadow hover:bg-gray-200 text-sm sm:text-base md:text-lg"
                    aria-label={`Download ${title}`}
                >
                    Download Now
                </a>
            </div>
            {!imgError ? (
                <img
                    className="h-56 md:mt-0"
                    src={image}
                    alt={`${title} Image`}
                    loading="lazy"
                    onError={() => setImgError(true)}
                />
            ) : (
                <div className="h-56 md:mt-0 flex items-center justify-center bg-gray-300">
                    <span>Image not available</span>
                </div>
            )}
        </motion.div>
    );
};

const OurApps = () => {
    return (
        <div className="p-8 bg-[#FFFFFF]">
            <Helmet>
                <title>Green Tech | Our Apps</title>
            </Helmet>
            <HadithSection />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-9">
                {appsData.map((app, index) => (
                    <AppCard key={index} title={app.title} image={app.image} />
                ))}
            </div>
        </div>
    );
};

export default OurApps;
