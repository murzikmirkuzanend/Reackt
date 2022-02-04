import React from 'react';
import {useDispatch} from "react-redux";
import {changeStatus, deleteMassif} from "../../store/slaice/slaice";

import './Massi.css'

const Massif = ({massif: {id, name, status}}) => {
    const dispatch = useDispatch();




    return (
        <div className={'Header'}>
            <input type="checkbox" value={status} onChange={() => dispatch(changeStatus({id}))}/>
            <div  className={'completed'}>Name: {name}</div>
            <button onClick={() => dispatch(deleteMassif({id}))}>Delete</button>
        </div>
    );
};

export default Massif;