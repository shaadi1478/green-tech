import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    // Toggle active FAQ item
    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqs = [
        {
            question: 'What is your return policy?',
            answer:
                'Our return policy allows you to return products within 30 days of purchase. Please ensure the product is unused and in its original packaging.',
        },
        {
            question: 'How do I track my order?',
            answer:
                'Once your order has been shipped, you will receive an email with a tracking number and a link to the courier’s tracking page.',
        },
        {
            question: 'Do you offer international shipping?',
            answer:
                'Yes, we offer international shipping to a wide range of countries. Shipping fees and times vary based on your location.',
        },
        {
            question: 'Can I change my order after placing it?',
            answer:
                'Unfortunately, once an order has been placed, we cannot modify it. You may cancel the order before it is shipped and place a new one.',
        },
        {
            question: 'What payment methods do you accept?',
            answer:
                'We accept various payment methods, including credit cards, PayPal, and bank transfers.',
        },
        {
            question: 'How long does shipping take?',
            answer:
                'Shipping times vary based on your location and shipping method. Generally, domestic orders arrive within 5-7 business days.',
        },
        {
            question: 'What should I do if I receive a damaged item?',
            answer:
                'If you receive a damaged item, please contact our customer service within 48 hours of receiving the product to initiate a return or exchange.',
        },
        {
            question: 'Do you offer discounts for bulk orders?',
            answer:
                'Yes, we offer discounts for bulk orders. Please contact our sales team for more details.',
        },
        {
            question: 'How can I contact customer support?',
            answer:
                'You can reach our customer support team via email or by filling out the contact form on our website.',
        },
        {
            question: 'What if I forgot my password?',
            answer:
                'If you forget your password, you can reset it using the "Forgot Password" link on the login page.',
        },
        {
            question: 'Can I change my shipping address?',
            answer:
                'Yes, you can change your shipping address before your order has been shipped. Please contact customer support for assistance.',
        },
        {
            question: 'Do you have a loyalty program?',
            answer:
                'Yes, we have a loyalty program that rewards our customers with points for every purchase, which can be redeemed for discounts on future orders.',
        },
    ];

    // Animation variants for sliding effect
    const answerVariants = {
        hidden: { opacity: 0, y: -20 }, // Start above the original position
        visible: { opacity: 1, y: 0 },   // Slide into original position
    };

    return (
        <div className="max-w-4xl mx-auto mt-24 px-4">
            <Helmet>
                <title>Green Tech | FAQ</title>
            </Helmet>
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Frequently Asked Questions</h2>
            {faqs.map((faq, index) => (
                <div key={index} className="border-b border-gray-200 py-4">
                    <div
                        className="flex justify-between items-center cursor-pointer"
                        onClick={() => toggleFAQ(index)}
                    >
                        <h3 className="text-lg font-semibold text-gray-700">{faq.question}</h3>
                        <span className="text-gray-600">
                            {activeIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                        </span>
                    </div>
                    <AnimatePresence>
                        {activeIndex === index && (
                            <motion.div
                                initial="hidden"
                                animate="visible"
                                exit="hidden"
                                variants={answerVariants}
                                transition={{ duration: 0.3 }}
                                className="text-gray-600 mt-2"
                            >
                                <p>{faq.answer}</p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            ))}
        </div>
    );
};

export default FAQ;
