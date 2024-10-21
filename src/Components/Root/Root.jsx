import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Navbars from '../Navbar/Navbars';
import SmallFooter from '../SmallFoolter/SmallFooter';

const Root = () => {
    return (
        <div>
            <Navbars />
            <Outlet />
            <SmallFooter />
            <Footer />
        </div>
    );
};

export default Root;