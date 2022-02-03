import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getComments} from "../../store";
import Comment from "../../Componetnts/Comment/Comment";

const Comments = () => {
    const {comments,status,error} = useSelector(state => state['commentsReducer']);

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getComments())
    },[])

    return (
        <div>
            {status==='loading' && <h1>Loading...</h1>}
            {error&&<h1>{error}</h1>}
            {comments.map(comment=><Comment key={comment.id} comment={comment}/>)}

        </div>
    );
};

export default Comments;