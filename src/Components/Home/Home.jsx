import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import images from '../../assets/gtaf-quran-app-download.webp';

const Home = () => {
    const titleVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.1,
                duration: 0.5,
                ease: 'easeInOut',
            },
        }),
    };

    return (
        <div>
            <Helmet>
                <title>Green Tech</title>
                <meta
                    name="description"
                    content="Explore Islamic teachings through the Hadith Collection App by Green Tech. Download now to understand Islam through the Prophets' teachings."
                />
            </Helmet>
            <div className="bg-gray-50 py-12">
                <div className="container mx-auto md:flex items-center justify-around p-3">
                    <motion.div
                        className="text-center md:text-start"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, ease: 'easeInOut' }}
                    >
                        <motion.span
                            className="bg-[#388AC5] text-white md:text-3xl text-2xl font-semibold md:px-4 md:py-1"
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            Hadith Collection (All in One)
                        </motion.span>
                        {['Understand Islam', 'Through', 'the Prophets (ﷺ)', 'Ahadith'].map((text, i) => (
                            <motion.h1
                                key={i}
                                className="text-4xl md:text-5xl font-bold text-gray-800 mt-4"
                                variants={titleVariants}
                                initial="hidden"
                                animate="visible"
                                custom={i}
                            >
                                {text}
                            </motion.h1>
                        ))}
                        <motion.div className="mt-8 flex md:space-x-4">
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
                        className="mt-8 flex items-center justify-center"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: 'easeInOut' }}
                    >
                        <div className="w-full md:w-2/3">
                            <motion.img
                                src={images}
                                alt="Green Tech Quran App Preview"
                                className="shadow-sm rounded-lg"
                                initial={{ scale: 0.9 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 0.6 }}
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Home;
