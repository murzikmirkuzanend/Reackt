import React from 'react';
import {NavLink, Outlet} from "react-router-dom";

import './footer.css'

const Footer = () => {
    return (
        <div>
            <div className={'FooterHead'}>
<div className={'footer'}>
                <NavLink to="/"> </NavLink>
                <NavLink to="/users" className={'userFooter'}>Users</NavLink>
                <NavLink to="/posts" className={'postsFooter'}>Posts</NavLink>

</div>
            </div>
            <hr/>
            <Outlet/>

        </div>
    );
};

export {Footer};