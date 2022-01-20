import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";


import {postServices} from "../../services";
import {Posts} from "../../Components";
import './PostsPAge.css'


const PostsPages = () => {

    const [post, setPost] = useState([]);


    useEffect(()=>{
        postServices.getAll().then(value => setPost([...value]))
    },[]);

    return (
<div className={'postHeader'}>
        <div>

            {post.map(post => <Posts key={post.id} posts={post}/>)}
        </div>

        <div>


            <Outlet/>

        </div>
</div>
    );
};

export {PostsPages};