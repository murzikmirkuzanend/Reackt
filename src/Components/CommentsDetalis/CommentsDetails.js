import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import {postServices} from "../../services";
import Comments from "../comments/Comments";

const CommentsDetails = () => {

    const {id} = useParams();

    const [comments, setComments] = useState([]);

    useEffect(()=>{

        postServices.getByComments(id).then(value => setComments([...value]))

    },[])

    return (
        <div>

            {comments.map(comments =><Comments key={comments.id} comments={comments}/>)}

        </div>
    );
};

export {CommentsDetails};