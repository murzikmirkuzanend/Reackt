import React, {useEffect, useState} from 'react';
import {postServices} from "../../services";
import Posts from "../Posts/Posts";

const PostsPages = () => {

    const [postPages, setPostPages] = useState([]);


    useEffect(()=>{
        postServices.getAll().then(value => setPostPages(value))
    },[])
    return (
        <div>
            {postPages.map(value => <Posts key={value.id} posts={value}/>)}
        </div>
    );
};

export {PostsPages};