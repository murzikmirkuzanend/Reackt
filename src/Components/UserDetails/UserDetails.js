import React, {useEffect, useState} from 'react';

import {useLocation, useParams, Outlet, Link} from "react-router-dom";
import {userServices} from "../../services";
import {UsersPostId} from "../UsersPostId/UsersPostId";


const UserDetails = () => {

    const {state} = useLocation();
    const {id} = useParams();
    const [user, setUser] = useState([]);

    useEffect(() => {


        if (state) {

            setUser(state)

            return
        }

        userServices.getById(id).then(value => setUser({...value}))

    }, [id])


    return (
        <div>
            <h3>User Details</h3>
            <div>
            {user && (
               <div>
                    <div>ID:{user.id}</div>
                    <div>name:{user.name}</div>
                    <div>email:{user.email}</div>
                    <div> street:{user.address?.street}</div>
                    <div>suite:{user.address?.suite}</div>
                    <div>city:{user.address?.city}</div>
                    <div>zipcode:{user.address?.zipcode}</div>
                    <div>geo:
                        <div>lat:{user.address?.geo?.lat}</div>
                    </div>
                    <div>lng:{user.address?.geo?.lng}</div>
                    <div>phone:{user.phone}</div>
                    <div>website:{user.website}</div>
                    <div>company :
                        <div>name:{user.company?.name}</div>
                        <div>catchPhrase:{user.company?.catchPhrase}</div>
                        <div>bs:{user.company?.bs}</div>
                    </div>
               </div>
            )}
                <div>
                <Link to={'posts'} route={<UsersPostId/>}><button> Link</button></Link>
            </div>
            </div>
            <hr/>
            <div>

                <Outlet/>
            </div>

        </div>
    );
};

export {UserDetails};