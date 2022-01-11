import React from 'react'
import './Post.css'
    ;

const Post = (props) => {

    let {id, userId, title, body} = props;


    return (
        <div className={'itemHederPost'}>

            <div className={'itemPost'}>
                <p>id:{id} </p>
                <p> userId:{userId}</p>
                <p> title:{title}</p>
                <p> body:{body}</p>


            </div>


        </div>
    );
};

export default Post;