import React from 'react';
import {Link} from "react-router-dom";
import Photos from "../Photos/Photos";

const AlbumsDetails = ({albums}) => {
    const {userId, id, title} = albums;


    return (
        <div>

            <div>userId: {userId}</div>
            <div>id: {id}</div>
            <div>title: {title}</div>

<Link to={ id+'/photos'} route={<Photos/>}><button> take is photos</button></Link>



        </div>
    );
};

export {AlbumsDetails};