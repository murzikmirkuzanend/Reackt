import React from 'react'
    import './Comment.css'
    ;

const Comment = (props) => {
   
   let {id, postId, name, email, body} = props;
   
   
    return (
        <div className={'itemComments'}>
            <div className={'itemComment'}>
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