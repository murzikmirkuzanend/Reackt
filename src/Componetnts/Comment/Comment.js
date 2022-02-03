import React from 'react';

const Comment = ({comment: {postId, id, name, email, body}}) => {
    return (
        <div>
            <div>Id: {id}</div>
            <div>PostId: {postId}</div>
            <div>Name: {name}</div>
            <div>Email: {email}</div>
            <div>Body: {body}</div>
            <hr/>
        </div>
    );
};

export default Comment;