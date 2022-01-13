import React from 'react';

const User = (props) => {

    const {id, name, username, GetUserId} = props;


    return (
        <div className={'itemUsers'}>
            <div className={'item'}>
                <p>ID:{id}</p>
                <p>Name:{name}</p>
                <p>Username{username}</p>

                <button onClick={() => {
                    GetUserId(id)
                }}>GetDetails</button>
            </div>

        </div>
    );
};

export default User;