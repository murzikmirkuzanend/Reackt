import React, {useEffect, useState} from 'react';

import { userServices} from "../../services";
import {UsersPostDetails} from "../UsersPostDetails/UsersPostDetails";
import {useParams} from "react-router-dom";

const UsersPostId = () => {


const {id} = useParams();

    const [userPost, setUserPost] = useState([]);

    useEffect(() =>{


        userServices.getByPosts(id).then(value => setUserPost([...value]))


    }, [])

    return (
        <div>
            <div>User Post</div>

            {userPost.map(userPost => <UsersPostDetails key={userPost.id} userPost={userPost}/>)}



        </div>
    );
};

export {UsersPostId};