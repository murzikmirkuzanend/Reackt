import React from 'react';

const UsersPostDetails = ({userPost: {userId, id, title, body}}) => {



    return (
        <div>
            <div>userPost:{userId}</div>
            <div>id:{id}</div>
            <div>title:{title}</div>
            <div>body:{body}</div>

        </div>
    );
};

export default UsersPostDetails;