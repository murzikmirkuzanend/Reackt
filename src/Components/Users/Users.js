import React from 'react';

import {NavLink} from "react-router-dom";
import {Albums} from "../Albums/Albums";


const Users = ({user}) => {

    const {id, name} = user;

    return (
        <div>

            <h3>ID:{id}</h3>

            <p>name:{name}</p>

             <NavLink to={id.toString()} state={{...user}}> <button> details </button></NavLink>
             <NavLink to={id +'/albums'} route={<Albums/>}> <button> get Albums </button></NavLink>


        </div>
    );
};

export  {Users};