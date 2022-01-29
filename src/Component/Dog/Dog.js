import React from 'react';

const Dog = ({dog: {id, name}, deleteDog}) => {
    return (
        <div>

            <div>Name:{name}</div>
            <button onClick={()=> deleteDog(id)}> Delete</button>
        </div>
    );
};

export default Dog;