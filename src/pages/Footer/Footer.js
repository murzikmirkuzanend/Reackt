import React from 'react';
import {NavLink, Outlet} from "react-router-dom";

const Footer = () => {

    return (
        <div>
            <div>
                <NavLink to='/'></NavLink>
                <NavLink to="/cars">Cars</NavLink>
                <NavLink to="/users">Cars</NavLink>
                <NavLink to="/posts">Cars</NavLink>
                <NavLink to="/comments">Cars</NavLink>
            </div>
            <Outlet/>

        </div>
    );
};

export default Footer;