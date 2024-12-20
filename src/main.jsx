import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import Contact from './Components/Contact/Contact';
import Header from './Components/Header/Header';
import About from './Components/About/About';
import Home from './Components/Home/Home';
import OurApps from './Components/OurApps/OurApps';
import Blog from './Components/Blog/Blog';
import Services from './Components/Services/Services';
import Collabarate from './Components/Collabarate/Collabarate';
import Donate from './Components/Donate/Donate';
import FAQ from './Components/FAQ/FAQ';
import { HelmetProvider } from 'react-helmet-async';
import CustomerSupport from './Components/CustomerSupport/CustomerSupport';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Header />
      },
      {
        path: '/home',
        element: <Home />
      },
      {
        path: '/apps',
        element: <OurApps />
      },
      {
        path: '/blog',
        element: <Blog />
      },
      {
        path: '/donate',
        element: <Donate />
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/services',
        element: <Services />
      },
      {
        path: '/collabarate',
        element: <Collabarate />
      },
      {
        path: "/contacts",
        element: <Contact />,
      },
      {
        path: '/faq',
        element: <FAQ />
      },
      {
        path: '/customer',
        element: <CustomerSupport />
      }
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </StrictMode>,
)
