import { useState } from 'react';
import { FaBars, FaTimes, FaSearch } from 'react-icons/fa';
import logo from '../../assets/download.svg';
import Home from '../Home/Home';
import { Link } from 'react-router-dom';
import HadithSection from '../HadithSection/HadithSection';
import Sadiq from '../Sadiq/Sadiq';
import IslamicSection from '../IslamicSection/IslamicSection';
import SmallFooter from '../SmallFoolter/SmallFooter';

const Header = () => {

    return (
        <div className="bg-[#F9FAFB] w-full shadow-2xl">
            {/* Header */}
            <HadithSection />
            <Home />
            <Sadiq />
            <IslamicSection />
            <SmallFooter />
        </div>
    );
};

export default Header;