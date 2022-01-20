import React, {useEffect, useState} from 'react';
import {Link, useLocation, useParams, Outlet} from "react-router-dom";
import {postServices} from "../../services";
import {CommentsDetails} from "../CommentsDetalis/CommentsDetails";

const PostDetails = () => {

    const {state} = useLocation();

    const {id} = useParams();
    const [post, setPost] = useState([]);

    useEffect(()=>{

        if (state){
            setPost(state)
            return
        }
        postServices.getByPostsId(id).then(value => setPost({...value}))
    },[id])


    return (
        <div>
<div>
    {post && (
        <div>
            <div>userId:{post.userId}</div>
            <div>id:{post.id}</div>
            <div>title:{post.title}</div>
            <div>body:{post.body}</div>
            <Link to={'comments'} route={<CommentsDetails/>}><button> Comments</button></Link>
        </div>

    )}
    <div>
        <hr/>
        <Outlet/>
    </div>
</div>


        </div>
    );
};

export {PostDetails};