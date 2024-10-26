import React from 'react';
import logo from '../../assets/footer.png';
import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <motion.div
            className="bg-[#383E42] text-white p-10"
            initial={{ opacity: 0 }} // Start hidden
            animate={{ opacity: 1 }} // Fade in
            transition={{ duration: 0.5 }} // Animation duration
        >
            <footer className="footer flex flex-col md:flex-row justify-between">
                <aside className="mb-4 md:mb-0">
                    <img src={logo} alt="Company Logo" className="h-16 w-auto mb-2" />
                    <p>
                        ACME Industries Ltd.
                        <br />
                        Providing reliable tech since 1992
                    </p>
                </aside>
                <nav className="mb-4 md:mb-0">
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover" aria-label="Branding">Branding</a>
                    <a className="link link-hover" aria-label="Design">Design</a>
                    <a className="link link-hover" aria-label="Marketing">Marketing</a>
                    <a className="link link-hover" aria-label="Advertisement">Advertisement</a>
                </nav>
                <nav className="hidden md:block">
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover" aria-label="About us">About us</a>
                    <a className="link link-hover" aria-label="Contact">Contact</a>
                    <a className="link link-hover" aria-label="Jobs">Jobs</a>
                    <a className="link link-hover" aria-label="Press kit">Press kit</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover" aria-label="Terms of use">Terms of use</a>
                    <a className="link link-hover" aria-label="Privacy policy">Privacy policy</a>
                    <a className="link link-hover" aria-label="Cookie policy">Cookie policy</a>
                </nav>
            </footer>
            <p className="text-center mt-11">Greentech Apps Foundation © 2024 UK Charity No. 1178251</p>
        </motion.div>
    );
};

export default Footer;
