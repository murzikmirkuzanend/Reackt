import React from 'react';

import {Link} from "react-router-dom";

const Users = ({user}) => {

    const {id, name} = user;

    return (
        <div>

            <h4>ID:{id}</h4>
            <p> Name:{name}</p> <Link to={id.toString()} state={{...user}}> details </Link>

        </div>
    );
};

export  {Users};