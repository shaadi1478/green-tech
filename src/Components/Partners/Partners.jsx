import React from 'react';
import quran from '../../assets/quran.com.webp';
import mrdf from '../../assets/mrdf.webp';
import qurance from '../../assets/quranenc.webp';
import hadith from '../../assets/hadith-mv.webp';
import ird from '../../assets/ird.webp';
import indurstand from '../../assets/understanding-quran.webp';
import al_huda from '../../assets/al-huda-int.webp';
import academic from '../../assets/academy-of-quran-studies.webp';
import { FaLongArrowAltRight } from 'react-icons/fa';
import Attribution from '../Attribution/Attribution';
import GetInTouch from '../GetInTouch/GetInTouch';
import { motion } from 'framer-motion';

const Partners = () => {
    return (
        <div>
            <div className='bg-white p-6 md:p-10 lg:p-16'>
                <div className='text-center mb-10'>
                    <h1 className='text-3xl md:text-5xl text-[#293842] font-bold mb-4'>
                        Our <span className='text-[#4F9C3A]'>Partners</span>
                    </h1>
                    <p className='text-sm md:text-base lg:text-lg leading-relaxed'>
                        Since our journey started in 2015, many organizations and individuals have <br /> supported our projects in various ways.
                        We appreciate their contributions. May Allah <br /> reward them all. We'd like to acknowledge some of them here.
                    </p>
                </div>

                {/* Grid for partner logos and descriptions */}
                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 md:px-36'>
                    {[
                        { img: quran, title: "Quran.com", desc: "Database and audio server, Quran Mushaf Images." },
                        { img: mrdf, title: "MRDF", desc: "Prophetic Timeline data." },
                        { img: qurance, title: "Quranenc.com", desc: "Quran translations and tafsirs." },
                        { img: hadith, title: "HadithMV", desc: "Dhivehi WBW, translation." },
                        { img: ird, title: "Islamic Resource Development", desc: "Bangla tafsirs." },
                        { img: indurstand, title: "Understandquran.com", desc: "Arabic Verb form database." },
                        { img: al_huda, title: "Al Huda International", desc: "Hindi WBW translation." },
                        { img: academic, title: "Academy of Quran Studies", desc: "Arabic Verb form database." },
                    ].map((partner, index) => (
                        <motion.div
                            key={index}
                            className='bg-white p-6 rounded-lg shadow-lg flex flex-col justify-between w-full max-w-xs'
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                        >
                            <img src={partner.img} alt={partner.title} className='mb-4' />
                            <div className='text-start'>
                                <h2 className='font-semibold text-lg mb-2'>{partner.title}</h2>
                                <p className='text-sm mb-4'>{partner.desc}</p>
                            </div>
                            <FaLongArrowAltRight className='text-[#4F9C3A] mt-auto self-end' />
                        </motion.div>
                    ))}
                </div>
            </div>
            <Attribution />
            <GetInTouch />
        </div>
    );
};

export default Partners;
