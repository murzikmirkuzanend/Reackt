import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";


import {postServices} from "../../services";
import Posts from "../../Components/Posts/Posts";

const PostsPages = () => {

    const [post, setPost] = useState([]);


    useEffect(()=>{
        postServices.getAll().then(value => setPost([...value]))
    },[]);

    return (
<div>
        <div>

            {post.map(post => <Posts key={post.id} posts={post}/>)}
        </div>

        <div>
            <h3>Posts Details</h3>

            <Outlet/>

        </div>
</div>
    );
};

export {PostsPages};