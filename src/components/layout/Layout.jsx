


import { Outlet } from 'react-router-dom'
import Nav from './../navbar/Nav';
import Contact from './../contact/Contact';
import Footer from './../footer/Footer';

export default function Layout() {
    return (
        <>
            <Nav />
            <Outlet></Outlet>
            <Contact />
            <Footer />
        </>
    )
}
