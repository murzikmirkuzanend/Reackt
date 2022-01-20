import React from 'react';

import {NavLink} from "react-router-dom";

const Users = ({user}) => {

    const {id, name} = user;

    return (
        <div>

            <h3>ID:{id}</h3>

            <p>name:{name}</p>

             <NavLink to={id.toString()} state={{...user}}> details

             </NavLink>

        </div>
    );
};

export  {Users};