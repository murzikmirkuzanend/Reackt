import React from 'react';
import {useDispatch} from "react-redux";
import {addMassifs} from "../../store/slaice/slaice";

const Form = () => {
    const dispatch = useDispatch();

   const submit = (e) => {
        e.preventDefault()
        dispatch(addMassifs({massif: e.target.massif.value}))
        e.target.reset()
    }

    return (
        <form onSubmit={submit}>
            <input type="text" name={'massif'}/>
            <button>Save</button>
        </form>
    );
};

export default Form;