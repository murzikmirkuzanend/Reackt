import React from 'react';

const Post = ({post:{userId,id,title,body}}) => {
    return (
        <div>
            <h5>ID: {id}</h5>
            <div>UserId: {userId} </div>
            <div>Title: {title} </div>
            <div>Body: {body} </div>

        </div>
    );
};

export default Post;