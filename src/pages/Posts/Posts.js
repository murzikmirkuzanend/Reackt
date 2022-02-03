import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getAllPosts} from "../../store";
import Post from "../../Componetnts/Post/Post";

const Posts = () => {
     const {posts, status, error} = useSelector(state => state['postsReducer']);

     const dispatch = useDispatch();
     useEffect(()=>{
         dispatch(getAllPosts())
     },[])

    return (
        <div>
            {status==='loading' && <h1>Loading...</h1>}
            {error&&<h1>{error}</h1>}
            {posts.map(post=><Post key={post.id} post={post} />)}

        </div>
    );
};

export default Posts;