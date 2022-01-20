import React from 'react';
import {NavLink} from "react-router-dom";

const Posts = ({posts}) => {

    const {id, title} = posts;

    return (
        <div>

            <div>
                <h3>ID:{id}</h3>
                <div>title:{title}</div>
                <NavLink to={id.toString()} state={{...posts}}>details</NavLink>

            </div>

        </div>
    );
};

export default Posts;