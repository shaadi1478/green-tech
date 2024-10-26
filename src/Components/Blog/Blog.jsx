import React from 'react';
import { motion } from 'framer-motion';
import heart from '../../assets/Heart.avif';
import pic1 from '../../assets/1.avif';
import pic2 from '../../assets/2.avif';
import pic3 from '../../assets/3.avif';
import pic4 from '../../assets/4.avif';
import pic5 from '../../assets/5.avif';
import pic6 from '../../assets/6.avif';
import pic7 from '../../assets/7.avif';
import pic8 from '../../assets/8.avif';
import pic9 from '../../assets/9.avif';
import pic10 from '../../assets/10.avif';
import pic11 from '../../assets/11.avif';
import pic12 from '../../assets/12.avif';
import pic13 from '../../assets/13.avif';
import pic14 from '../../assets/14.avif';
import pic15 from '../../assets/15.avif';
import { Helmet } from 'react-helmet-async';

const Blog = () => {
    const articles = [
        { image: pic1, title: "Most Important Duas for Daily Life [free eBook]", date: "October 16th, 2024" },
        { image: pic2, title: "Most Important Duas for Daily Life [free eBook]", date: "October 16th, 2024" },
        { image: pic3, title: "Most Important Duas for Daily Life [free eBook]", date: "October 16th, 2024" },
        { image: pic4, title: "Most Important Duas for Daily Life [free eBook]", date: "October 16th, 2024" },
        { image: pic5, title: "Most Important Duas for Daily Life [free eBook]", date: "October 16th, 2024" },
        { image: pic6, title: "Most Important Duas for Daily Life [free eBook]", date: "October 16th, 2024" },
        { image: pic7, title: "Most Important Duas for Daily Life [free eBook]", date: "October 16th, 2024" },
        { image: pic8, title: "Most Important Duas for Daily Life [free eBook]", date: "October 16th, 2024" },
        { image: pic9, title: "Most Important Duas for Daily Life [free eBook]", date: "October 16th, 2024" },
        { image: pic10, title: "Most Important Duas for Daily Life [free eBook]", date: "October 16th, 2024" },
        { image: pic11, title: "Most Important Duas for Daily Life [free eBook]", date: "October 16th, 2024" },
        { image: pic12, title: "Most Important Duas for Daily Life [free eBook]", date: "October 16th, 2024" },
        { image: pic13, title: "Most Important Duas for Daily Life [free eBook]", date: "October 16th, 2024" },
        { image: pic14, title: "Most Important Duas for Daily Life [free eBook]", date: "October 16th, 2024" },
        { image: pic15, title: "Most Important Duas for Daily Life [free eBook]", date: "October 16th, 2024" },
    ];

    return (
        <div className='bg-[#F9FCF8]'>
            <Helmet>
                <title>Green Tech | Blog</title>
            </Helmet>
            <div className='bg-[#F9FCF8]'>
                <div className=''>
                    <div className='mt-20'>
                        <h1 className='md:text-4xl text-2xl md:mb-12 md:ml-48 font-bold'>Discover latest news and articles</h1>
                    </div>
                    <div className='justify-center items-center md:mb-11 mb-4 md:px-44'>
                        <img src={heart} alt="" className='w-full rounded-lg' />
                    </div>
                    <div className='md:px-44 grid md:grid-cols-3 grid-cols-1 gap-y-5'>
                        {articles.map((article, index) => (
                            <motion.div
                                key={index}
                                className="card bg-base-100 md:w-96 h-[375px] shadow-xl"
                                initial={{ opacity: 0, x: -50 }} // Start off-screen to the left
                                animate={{ opacity: 1, x: 0 }} // Move to the center and fade in
                                exit={{ opacity: 0, x: 50 }} // Fade out and move to the right when exiting
                                transition={{ duration: 0.5, delay: index * 0.1 }} // Staggering effect
                            >
                                <figure>
                                    <img src={article.image} alt="" />
                                </figure>
                                <div className="card-body">
                                    <div className="card-actions justify-start">
                                        <div className="mb-9">{article.title}</div>
                                        <div>{article.date}</div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;
