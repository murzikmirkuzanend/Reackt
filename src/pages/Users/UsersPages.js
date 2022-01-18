import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";


import {userServices} from "../../services";
import {Users} from "../../Components/Users/Users";

const UsersPages = () => {


    const [usersPages, setUsersPages] = useState([]);

   useEffect(()=>{
       userServices.getAll().then(value => setUsersPages(value))
   },[])

    return (
        <div>

            <div>

                {usersPages.map(user => < Users key={user.id} user={user}/>)}

            </div>

            <div>
                <h3>User Details</h3>
                <Outlet/>

            </div>



        </div>
    );
};

export {UsersPages};