import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";


import {userServices} from "../../services";
import {Users} from "../../Components/Users/Users";

const UsersPages = () => {


    const [usersPages, setUsersPages] = useState([]);

    useEffect(() => {
        userServices.getAll().then(value => setUsersPages([...value]))
    }, []);

    return (
        <div>

            <div>

                {usersPages.map(value => < Users key={value.id} user={value}/>)}


            </div>
<hr/>
            <div>
                <h3>User Details</h3>

                <Outlet/>


            </div>


        </div>
    );


};

export {UsersPages};