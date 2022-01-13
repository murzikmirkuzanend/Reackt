import React, {useEffect, useState} from 'react';
import {userService} from "../../services/user.services";
import User from '../User/User'


const Users = () => {

    const [users, setUsers] = useState([]);
    const [user, setUser] = useState(null)


    useEffect(() => {

        userService.getAll()
            .then(value => setUsers(value))

    }, [])

    const GetUserId = (id) => {

        userService.getBayId(id)
            .then(value => setUser(value))


    }

    return (

        <div>


            <div>{users.map(value => < User key={value.id}
                                      user={value}
                                       GetUserId={GetUserId}/>)}</div>

            {user && <div>
                <p>id:{user.id}</p>
                <p>name:{user.name}</p>
                <p>username:{user.username}</p>
                <p>email:{user.email}</p>
                <p>address:</p>
                <p>street: {user.address.street}</p>
                <p>city:{user.address.city}</p>
                <p>zipcode:{user.address.zipcode}</p>
                <p>geo:</p>
                <p>lat:{user.address.geo.lat}</p>
                <p>lng:{user.address.geo.lng}</p>


            </div>}




        </div>
    );
};

export default Users;