import React from 'react'
    import './UserStayil.css';



const User = (props) => {

    let {id, name, username, email} = props;


    return (
        <div className={'itemUsers'}>
            <div className={'item'}>
                <p>ID:{id}</p>
                <p>Name:{name}</p>
                <p>Username{username}</p>
                <p>email:{email}</p>
            </div>

        </div>
    );
};

export default User;