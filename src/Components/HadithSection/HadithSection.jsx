import { motion, useAnimation, useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';
import logo from '../../assets/Features-of-best-Quran-App.webp';

const HadithSection = () => {
    const controls = useAnimation();
    const textRef = useRef(null);
    const imageRef = useRef(null);

    // Detect if the element is in view
    const textInView = useInView(textRef, { once: true, margin: '-50px' });
    const imageInView = useInView(imageRef, { once: true, margin: '-50px' });

    // Trigger animations when in view
    useEffect(() => {
        if (textInView) {
            controls.start({ opacity: 1, x: 0 });
        }
    }, [controls, textInView]);

    useEffect(() => {
        if (imageInView) {
            controls.start({ opacity: 1, y: 0 });
        }
    }, [controls, imageInView]);

    return (
        <div className="bg-white py-12">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-around md:mt-1 mt-11">
                <motion.div
                    ref={textRef}
                    className="text-center md:text-start"
                    initial={{ opacity: 0, x: -50 }}
                    animate={controls}
                    transition={{ duration: 0.6, ease: 'easeInOut' }}
                >
                    <motion.span
                        className="bg-[#4F9C3A] text-white md:text-3xl text-2xl font-semibold md:px-4 md:py-1"
                        initial={{ scale: 0.9 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        Al Quran (Tafsir & By World)
                    </motion.span>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mt-4">
                        Understand Islam
                    </h1>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mt-4">
                        Through
                    </h1>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mt-4">
                        the Prophets
                    </h1>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mt-4">
                        Ahadith
                    </h1>
                    <motion.div className="mt-8 flex space-x-4">
                        <motion.a
                            href="/learn-more"
                            className="bg-green-500 text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-green-600"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                        >
                            Learn More
                        </motion.a>
                        <motion.a
                            href="/download"
                            className="bg-gray-100 text-green-500 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-200"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                        >
                            Download Now
                        </motion.a>
                    </motion.div>
                </motion.div>

                <motion.div
                    ref={imageRef}
                    className="mt-8 flex flex-col md:flex-row items-center justify-center"
                    initial={{ opacity: 0, y: 50 }}
                    animate={controls}
                    transition={{ duration: 0.6, ease: 'easeInOut' }}
                >
                    <div className="w-full md:w-2/3">
                        <motion.img
                            src={logo}
                            alt="Features of the best Quran app preview"
                            className="shadow-sm rounded-lg"
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.6 }}
                        />
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default HadithSection;
