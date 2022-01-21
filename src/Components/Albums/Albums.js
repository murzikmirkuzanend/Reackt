import React, {useEffect, useState} from 'react';

import {useParams, Outlet} from "react-router-dom";

import {AlbumsDetails} from "../AlbumsDetails/AlbumsDetails";
import {userServices} from "../../services";
import './albums.css'

const Albums = () => {

    const {id} = useParams();

    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        userServices.getByAlbums(id).then(value => setAlbums([...value]))
    }, [id])

    return (
        <div className={'albumsPhaser'}>

            <div>Albums of User</div>
            {albums.map(albums => <AlbumsDetails key={albums.id} albums={albums}/>)}
            <hr/>
            <div className={'albumsChild'}>
                <Outlet/>
            </div>
        </div>
    );
};

export {Albums};