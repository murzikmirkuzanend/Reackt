import React from 'react';

const Comments = ({comments: {postId, id, name, email, body}}) => {
    return (
        <div>

            <div>
                <div>postId:{postId}</div>
                <div>id:{id}</div>
                <div>name:{name}</div>
                <div>email:{email}</div>
                <div>body:{body}</div>

            </div>
        </div>
    );
};

export default Comments;