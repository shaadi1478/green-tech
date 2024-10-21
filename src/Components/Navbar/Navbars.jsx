import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/download.svg';
import { FaBars, FaSearch, FaTimes } from 'react-icons/fa';

const Navbars = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);
    const [organizationDropdown, setOrganizationDropdown] = useState(false); // For Organization dropdown
    const [helpDropdown, setHelpDropdown] = useState(false); // For Help & Support dropdown

    // Toggle main menu
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    // Toggle search box
    const toggleSearch = () => {
        setSearchOpen(!searchOpen);
    };

    // Toggle dropdown for Organization
    const toggleOrganizationDropdown = () => {
        setOrganizationDropdown(!organizationDropdown);
    };

    // Toggle dropdown for Help & Support
    const toggleHelpDropdown = () => {
        setHelpDropdown(!helpDropdown);
    };

    // Close mobile menu after clicking a link
    const closeMenu = () => {
        setMenuOpen(false);
        setOrganizationDropdown(false); // Close organization dropdown if open
        setHelpDropdown(false); // Close help dropdown if open
    };

    return (
        <div className="bg-[#F9FAFB] w-full shadow-2xl">
            <header className="flex justify-between items-center px-8 py-2">
                {/* Logo */}
                <div className="flex items-center space-x-2">
                    <Link to='/'><img src={logo} alt="Greentech Apps Foundation Logo" className="h-8" /></Link>
                </div>

                {/* Hamburger Icon for Mobile */}
                <div className="lg:hidden" onClick={toggleMenu}>
                    {menuOpen ? (
                        <FaTimes className="text-2xl text-gray-700" />
                    ) : (
                        <FaBars className="text-2xl text-gray-700" />
                    )}
                </div>

                {/* Navigation Links (visible on larger screens) */}
                <nav className="hidden lg:flex items-center space-x-6">
                    <Link to='/' className="text-gray-700 hover:text-green-600">Home</Link>
                    <Link to='/apps' className="text-gray-700 hover:text-green-600">Our Apps</Link>
                    <Link to='/blog' className="text-gray-700 hover:text-green-600">Blog</Link>

                    {/* Organization with Dropdown */}
                    <div className="relative group">
                        <button onClick={toggleOrganizationDropdown} className="text-gray-700 hover:text-green-600">Organization</button>
                        {organizationDropdown && (
                            <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg">
                                <Link onClick={closeMenu} to="/about" className="block px-4 py-2 text-gray-700 hover:bg-green-100">About Us</Link>
                                <Link onClick={closeMenu} to="/team" className="block px-4 py-2 text-gray-700 hover:bg-green-100">Our Team</Link>
                                <Link onClick={closeMenu} to="/mission" className="block px-4 py-2 text-gray-700 hover:bg-green-100">Mission & Vision</Link>
                            </div>
                        )}
                    </div>

                    {/* Help & Support with Dropdown */}
                    <div className="relative group">
                        <button onClick={toggleHelpDropdown} className="text-gray-700 hover:text-green-600">Help & Support</button>
                        {helpDropdown && (
                            <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg">
                                <Link onClick={closeMenu} to="/faq" className="block px-4 py-2 text-gray-700 hover:bg-green-100">FAQ</Link>
                                <Link onClick={closeMenu} to="/support" className="block px-4 py-2 text-gray-700 hover:bg-green-100">Customer Support</Link>
                                <Link onClick={closeMenu} to="/contacts" className="block px-4 py-2 text-gray-700 hover:bg-green-100">Contact Us</Link>
                            </div>
                        )}
                    </div>

                    {/* Search Icon */}
                    <div className="relative">
                        <button onClick={toggleSearch} className="text-gray-700 hover:text-green-600">
                            <FaSearch className="text-xl" />
                        </button>

                        {searchOpen && (
                            <input
                                type="text"
                                placeholder="Search..."
                                className="absolute right-0 mt-2 w-48 lg:w-72 p-2 border rounded-md shadow-lg focus:outline-none focus:ring focus:border-green-500"
                            />
                        )}
                    </div>

                    <a href="#donate" className="px-4 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600">Donate</a>
                </nav>

                {/* Mobile Menu */}
                {menuOpen && (
                    <nav className="lg:hidden absolute top-16 left-0 w-full bg-white flex flex-col items-center space-y-4 py-4 shadow-md z-50">
                        <Link onClick={closeMenu} to='/' className="text-gray-700 hover:text-green-600">Home</Link>
                        <Link onClick={closeMenu} to='/apps' className="text-gray-700 hover:text-green-600">Our Apps</Link>
                        <Link onClick={closeMenu} to='/blog' className="text-gray-700 hover:text-green-600">Blog</Link>

                        {/* Organization Dropdown (Mobile) */}
                        <div className="w-full">
                            <button
                                onClick={toggleOrganizationDropdown}
                                className="text-gray-700 hover:text-green-600 w-full text-left px-4 py-2"
                            >
                                Organization
                            </button>
                            {organizationDropdown && (
                                <div className="flex flex-col items-start bg-white shadow-md w-full px-4 py-2">
                                    <Link onClick={closeMenu} to="/about" className="block text-gray-700 hover:text-green-600">About Us</Link>
                                    <Link onClick={closeMenu} to="/team" className="block text-gray-700 hover:text-green-600">Our Team</Link>
                                    <Link onClick={closeMenu} to="/mission" className="block text-gray-700 hover:text-green-600">Mission & Vision</Link>
                                </div>
                            )}
                        </div>

                        {/* Help & Support Dropdown (Mobile) */}
                        <div className="w-full">
                            <button
                                onClick={toggleHelpDropdown}
                                className="text-gray-700 hover:text-green-600 w-full text-left px-4 py-2"
                            >
                                Help & Support
                            </button>
                            {helpDropdown && (
                                <div className="flex flex-col items-start bg-white shadow-md w-full px-4 py-2">
                                    <Link onClick={closeMenu} to="/faq" className="block text-gray-700 hover:text-green-600">FAQ</Link>
                                    <Link onClick={closeMenu} to="/support" className="block text-gray-700 hover:text-green-600">Customer Support</Link>
                                    <Link onClick={closeMenu} to="/contact" className="block text-gray-700 hover:text-green-600">Contact Us</Link>
                                </div>
                            )}
                        </div>

                        <a href="#donate" className="px-4 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600">Donate</a>
                    </nav>
                )}
            </header>
        </div>
    );
};

export default Navbars;
