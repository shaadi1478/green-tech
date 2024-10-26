import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import SmallFooter from '../SmallFoolter/SmallFooter';
import Navbars from '../Navbars/Navbars';

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