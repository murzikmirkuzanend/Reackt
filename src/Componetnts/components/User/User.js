import React from 'react';

const User = ({user:{id, name}, GetUserId}) => {




    return (
        <div >

                <p>ID:{id}</p>
                <p>Name:{name}</p>

                <button onClick={() =>
                    GetUserId(id)
                }>GetDetails</button>


        </div>
    );
};

export default User;