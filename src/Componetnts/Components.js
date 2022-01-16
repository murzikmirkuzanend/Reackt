import React, {useState} from 'react';


import Users from "./components/Users/Users";
import UserDetails from "./components/UserDetails/UserDetails";
import Posts from "./components/Posts/Posts";
import {postServices} from "./services/post.services";
import './Components.css'


const Components = () => {

    const [user, setUser] = useState(null);
    const [posts, setPosts] = useState([]);


    const getUser = (user) => {
        setUser(user)

    }

    const getUserId = (id) => {
        postServices.getByUserId(id)
            .then(value => setPosts(value))
    }


    return (
        <div>
            <div className={'componentsUser'}>
                <Users getUser={getUser}/>
                {user && <UserDetails user={user} getUserId={getUserId}/>}
            </div>

            {posts && <Posts posts={posts}/>}


        </div>
    );
};

export default Components;