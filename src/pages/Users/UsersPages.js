import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";


import {userServices} from "../../services";
import {Users} from "../../Components";
import './UsersPages.css'


const UsersPages = () => {


    const [usersPages, setUsersPages] = useState([]);

    useEffect(() => {
        userServices.getAll().then(value => setUsersPages([...value]))
    }, []);

    return (
        <div className={'userPagesHeader'}>
<hr/>
            <div className={'userInfo'}>

                {usersPages.map(value => <Users key={value.id} user={value}/>)}


            </div>
            <hr/>
            <div>


                <Outlet/>


            </div>


        </div>
    );


};

export {UsersPages};