import React from 'react';

const Hero = () => {
    return (
        <div>
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
                    <a href="#home" className="text-gray-700 hover:text-green-600">Home</a>
                    <a href="#apps" ></a>
                    <Link to='/apps' className="text-gray-700 hover:text-green-600">Our Apps</Link>
                    <a href="#blog" className="text-gray-700 hover:text-green-600">Blog</a>
                    <a href="#organization" className="text-gray-700 hover:text-green-600">Organization</a>
                    <a href="#help" className="text-gray-700 hover:text-green-600">Help & Support</a>

                    {/* Search Icon */}
                    <div className="relative">
                        <button onClick={toggleSearch} className="text-gray-700 hover:text-green-600">
                            <FaSearch className="text-xl" />
                        </button>

                        {/* Search Box - visible when searchOpen is true */}
                        {searchOpen && (
                            <input
                                type="text"
                                placeholder="Search..."
                                className="absolute right-0 mt-2 w-48 p-2 border rounded-md shadow-lg focus:outline-none focus:ring focus:border-green-500"
                            />
                        )}
                    </div>

                    <a href="#donate" className="px-4 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600">Donate</a>
                </nav>

                {/* Mobile Menu (visible when hamburger is clicked) */}
                {menuOpen && (
                    <nav className="lg:hidden absolute top-16 left-0 w-full bg-white flex flex-col items-center space-y-4 py-4 shadow-md z-50">
                        <a href="#home" className="text-gray-700 hover:text-green-600">Home</a>
                        <a href="#apps" className="text-gray-700 hover:text-green-600">Our Apps</a>
                        <a href="#blog" className="text-gray-700 hover:text-green-600">Blog</a>
                        <a href="#organization" className="text-gray-700 hover:text-green-600">Organization</a>
                        <a href="#help" className="text-gray-700 hover:text-green-600">Help & Support</a>
                        <a href="#donate" className="px-4 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600">Donate</a>
                    </nav>
                )}
            </header>
        </div>
    );
};

export default Hero;