import React from 'react';

const Comment = (props) => {
   
   let {id, postId, name, email, body} = props;
   
   
    return (
        <div>
            <div>
                <p>postId:{postId}</p>
                <p>id:{id}</p>
                <p>name:{name}</p>
                <p>email:{email}</p>
                <p>body:{body}</p>



            </div>


        </div>
    );
};

export default Comment;