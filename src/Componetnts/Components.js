import React, {useEffect, useState} from 'react';


import Users from "./components/Users/Users";
import {userServices} from "./services/user.services";
import Form from "./components/Form/Form";



const Components = () => {

    let [users, setUsers] = useState([]);
    let [filterUser, setFilterUser] = useState([]);


    useEffect(() => {
        userServices.getAll()
            .then(value => {setUsers([...value])
                setFilterUser([...value])
            })
    }, [])

    const getFilter = (data) => {
        let filterDown = [...users]

        if (data.name) {
            filterDown = filterDown.filter(user => user.name.toLowerCase().includes(data.name.toLowerCase()))
        }
        if (data.username) {
            filterDown = filterDown.filter(user => user.username.toLowerCase().includes(data.username.toLowerCase()))
        }
        if (data.email) {
            filterDown = filterDown.filter(user => user.email.toLowerCase().includes(data.email.toLowerCase()))
        }
        setFilterUser(filterDown)

    }


    return (
        <div>

            <Form getFilter={getFilter}/>
            <Users users={filterUser}/>


        </div>
    );
};

export default Components;