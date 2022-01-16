import React from 'react';


import './Post.css'


const Post = ({post}) => {


    const {id, userId, title, body} = post;

    return (
        <div className={'postStay'}>
            <div className={'postBook'}>
                <h3>id:{id}</h3>
                <p>userId{userId}</p>
                <p>title:{title}</p>
                <p>body;{body}</p>
            </div>

        </div>
    );
};

export default Post;