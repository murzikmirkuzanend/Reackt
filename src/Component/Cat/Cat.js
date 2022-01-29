import React from 'react';
import './Cat.css'

const Cat = ({cat:{name,id}, deleteCat}) => {
    return (
        <div className={'cat'}>

            <div>Name:{name}</div>
            <button onClick={()=> deleteCat(id)}>Delete</button>
        </div>
    );
};

export default Cat;