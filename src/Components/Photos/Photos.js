import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {userServices} from "../../services";
import PhotosDetails from "../PhotosDetails/PhotosDetails";

const Photos = () => {

const {id} = useParams();


const [photos, setPhotos] = useState([]);

useEffect(()=>{

    userServices.getByPhotos(id).then(value => setPhotos([...value]))
},[])

    return (
        <div>

            {photos.map(photos => <PhotosDetails key={photos.id} photos={photos}/>)}

        </div>
    );
};

export default Photos;