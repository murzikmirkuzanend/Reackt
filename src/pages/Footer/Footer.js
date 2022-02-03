import React from 'react';
import {NavLink, Outlet} from "react-router-dom";

import './Footer.css'

const Footer = () => {

    return (
        <div>
            <div className={'footer'}>
                <NavLink to="/"> </NavLink>
                <NavLink to="/cars" className={'carsFooter'}><button>Cars</button></NavLink>
                <NavLink to="/users" className={'usersFooter'}><button>Users</button></NavLink>
                <NavLink to="/posts" className={'postFooter'}><button>posts</button></NavLink>
                <NavLink to="/comments" className={'commentsFooter'}><button>comments</button></NavLink>
            </div>
            <Outlet/>

        </div>
    );
};

export default Footer;