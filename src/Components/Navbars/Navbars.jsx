import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaSearch } from 'react-icons/fa';
import logo from '../../assets/logo.svg';  // Assuming you have a logo file in your assets folder

const Navbars = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [organizationOpen, setOrganizationOpen] = useState(false);
    const [supportOpen, setSupportOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
        setOrganizationOpen(false);
        setSupportOpen(false);
    };

    const toggleOrganization = () => {
        setOrganizationOpen(!organizationOpen);
        setSupportOpen(false);
    };

    const toggleSupport = () => {
        setSupportOpen(!supportOpen);
        setOrganizationOpen(false);
    };

    const closeMenu = () => {
        setMenuOpen(false);
        setOrganizationOpen(false);
        setSupportOpen(false);
    };

    return (
        <div className="relative">
            <header className="fixed top-0 left-0 right-0 bg-white shadow-lg z-50 w-full">
                <div className="flex justify-between items-center p-4">
                    {/* Logo */}
                    <div className="flex items-center">
                        <Link to="/" onClick={closeMenu}>
                            <img src={logo} alt="Logo" className="h-10" />
                        </Link>
                    </div>

                    {/* Hamburger Menu for Mobile and Donate/Search */}
                    <div className="flex items-center space-x-4 lg:hidden">
                        {/* Search Icon */}
                        <FaSearch className="text-gray-500 text-xl cursor-pointer" />
                        {/* Donate Button */}
                        <Link to="/donate" className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600">
                            Donate
                        </Link>
                        {/* Hamburger Icon */}
                        <div onClick={toggleMenu}>
                            {menuOpen ? (
                                <FaTimes className="text-2xl text-gray-700" />
                            ) : (
                                <FaBars className="text-2xl text-gray-700" />
                            )}
                        </div>
                    </div>

                    {/* Navbar Links for Larger Screens */}
                    <nav className="hidden lg:flex space-x-6 items-center">
                        <Link to="/" className="text-gray-700 hover:text-green-600">Home</Link>
                        <Link to="/apps" className="text-gray-700 hover:text-green-600">Our Apps</Link>
                        <Link to="/blog" className="text-gray-700 hover:text-green-600">Blog</Link>

                        {/* Organization Dropdown */}
                        <div className="relative">
                            <button onClick={toggleOrganization} className="text-gray-700 hover:text-green-600">
                                Organization
                            </button>
                            {organizationOpen && (
                                <div className="absolute bg-white shadow-lg rounded-lg mt-2 py-2 w-48">
                                    <Link to="/about" onClick={closeMenu} className="block px-4 py-2 hover:bg-green-100">About Us</Link>
                                    <Link to="/services" onClick={closeMenu} className="block px-4 py-2 hover:bg-green-100">Our Services</Link>
                                    <Link to="/contacts" onClick={closeMenu} className="block px-4 py-2 hover:bg-green-100">Contact</Link>
                                    <Link to="/career" onClick={closeMenu} className="block px-4 py-2 hover:bg-green-100">Career & Volunteer</Link>
                                    <Link to="/collabarate" onClick={closeMenu} className="block px-4 py-2 hover:bg-green-100">Collaborate</Link>
                                </div>
                            )}
                        </div>

                        {/* Help & Support Dropdown */}
                        <div className="relative">
                            <button onClick={toggleSupport} className="text-gray-700 hover:text-green-600">
                                Help & Support
                            </button>
                            {supportOpen && (
                                <div className="absolute bg-white shadow-lg rounded-lg mt-2 py-2 w-48">
                                    <Link to="/faq" onClick={closeMenu} className="block px-4 py-2 hover:bg-green-100">FAQ</Link>
                                    <Link to="/customer" onClick={closeMenu} className="block px-4 py-2 hover:bg-green-100">Customer Support</Link>
                                </div>
                            )}
                        </div>

                        {/* Search and Donate Buttons for Larger Screens */}
                        <FaSearch className="text-gray-500 text-xl cursor-pointer" />
                        <Link to="/donate" className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600">
                            Donate
                        </Link>
                    </nav>
                </div>

                {/* Mobile Menu */}
                {menuOpen && (
                    <nav className="lg:hidden flex flex-col items-center space-y-4 py-4 bg-white shadow-md">
                        <Link to="/" onClick={closeMenu} className="text-gray-700 hover:text-green-600">Home</Link>
                        <Link to="/apps" onClick={closeMenu} className="text-gray-700 hover:text-green-600">Our Apps</Link>
                        <Link to="/blog" onClick={closeMenu} className="text-gray-700 hover:text-green-600">Blog</Link>

                        {/* Organization Links (Mobile) */}
                        <button onClick={toggleOrganization} className="text-gray-700 hover:text-green-600">Organization</button>
                        {organizationOpen && (
                            <div className="flex flex-col items-center space-y-2">
                                <Link to="/about" onClick={closeMenu} className="text-gray-700 hover:bg-green-100">About Us</Link>
                                <Link to="/services" onClick={closeMenu} className="text-gray-700 hover:bg-green-100">Our Services</Link>
                                <Link to="/contacts" onClick={closeMenu} className="text-gray-700 hover:bg-green-100">Contact</Link>
                                <Link to="/career" onClick={closeMenu} className="text-gray-700 hover:bg-green-100">Career & Volunteer</Link>
                                <Link to="/collabarate" onClick={closeMenu} className="text-gray-700 hover:bg-green-100">Collaborate</Link>
                            </div>
                        )}

                        {/* Help & Support Links (Mobile) */}
                        <button onClick={toggleSupport} className="text-gray-700 hover:text-green-600">Help & Support</button>
                        {supportOpen && (
                            <div className="flex flex-col items-center space-y-2">
                                <Link to="/faq" onClick={closeMenu} className="text-gray-700 hover:bg-green-100">FAQ</Link>
                                <Link to="/customer" onClick={closeMenu} className="text-gray-700 hover:bg-green-100">Customer Support</Link>
                            </div>
                        )}
                    </nav>
                )}
            </header>
        </div>
    );
};

export default Navbars;
