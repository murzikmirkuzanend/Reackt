import React, {useEffect, useState} from 'react';

import { userServices} from "../../services";
import UsersPostDetails from "../../pages/UsersPostDetails/UsersPostDetails";
import {useParams} from "react-router-dom";

const UsersPostId = () => {


const {id} = useParams();

    const [userPost, setUserPost] = useState([]);

    useEffect(() =>{


        userServices.getByPosts(id).then(value => setUserPost([...value]))


    }, [])

    return (
        <div>


            {userPost.map(userPost => <UsersPostDetails key={userPost.id} userPost={userPost}/>)}



        </div>
    );
};

export default UsersPostId;