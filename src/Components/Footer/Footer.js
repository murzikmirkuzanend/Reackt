import React from 'react';
import {NavLink, Outlet} from "react-router-dom";

const Footer = () => {
    return (
        <div>
            <div className={'FooterHead'}>

                <NavLink to='/'> </NavLink>
                <NavLink to='/users'>Users</NavLink>
                <NavLink to='/posts'>Posts</NavLink>

            </div>
            <Outlet/>

        </div>
    );
};

export {Footer};