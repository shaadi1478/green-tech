import { motion } from 'framer-motion';
import logo from '../../assets/Features-of-best-Quran-App.webp';

const Sadiq = () => {
    return (
        <div>
            <div className="bg-white py-12">
                <div className="container mx-auto flex flex-col md:flex-row items-center justify-around">
                    <motion.div
                        className="text-center md:text-start"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, ease: 'easeInOut' }}
                    >
                        <motion.span
                            className="bg-[#C9AC75] text-white md:text-3xl font-semibold md:px-4 md:py-1"
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            Sadiq: Your Daily Companion
                        </motion.span>
                        {['Perfect', 'Companion on', 'Your journey to', 'Please Allah'].map((text, i) => (
                            <motion.h1
                                key={i}
                                className="text-4xl md:text-5xl font-bold text-gray-800 mt-4"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.2, duration: 0.5 }}
                            >
                                {text}
                            </motion.h1>
                        ))}
                        <motion.div className="mt-8 flex space-x-4">
                            <motion.a
                                href="#"
                                className="bg-green-500 text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-green-600"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ type: 'spring', stiffness: 300 }}
                            >
                                Learn More
                            </motion.a>
                            <motion.a
                                href="#"
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
                        className="mt-8 flex flex-col md:flex-row items-center justify-center"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="w-full md:w-2/3">
                            <img
                                src={logo}
                                alt="App preview"
                                className="rounded-lg"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Sadiq;
