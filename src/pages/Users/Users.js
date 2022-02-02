import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getAllUsers} from "../../store/users.slaice/users.slaice";
import User from "../../Componetnts/User/User";

const Users = () => {
    const {users, status, error} = useSelector(state => state['userReducer']);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getAllUsers())
    },[])
    return (
        <div>
            {status==='loading' && <h1>Loading...</h1>}
            {error&&<h1>{error}</h1>}
            {users.map(user =><User key={user.id} user={user} />)}
        </div>
    );
};

export default Users;