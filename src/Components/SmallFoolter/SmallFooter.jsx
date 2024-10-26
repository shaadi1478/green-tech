import React from 'react';
import { motion } from 'framer-motion';

const SmallFooter = () => {
    return (
        <motion.div
            className="bg-[#26292C] p-3 text-center text-2xl text-white font-semibold"
            initial={{ opacity: 0, y: 20 }} // Initial state
            animate={{ opacity: 1, y: 0 }} // Animate to full opacity
            exit={{ opacity: 0, y: 20 }} // Exit animation
            transition={{ duration: 0.5 }} // Animation duration
        >
            <h2 className="">
                To Be a Part of this Sadaqa Jariah,
                <a href="" className="hover:underline text-[#D4623A] px-3">Donate Now</a>
            </h2>
        </motion.div>
    );
};

export default SmallFooter;
