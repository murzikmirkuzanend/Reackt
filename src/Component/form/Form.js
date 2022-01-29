import React from 'react';

import './Form.css'

const Form = ({catsForm, dogsForm, adCat, adDog}) => {


    return (
        <div className={'form'}>

            <form className={'cats'}>
                <label>Cat:<input ref={catsForm} type='text' name={'cat'}/></label>
                <button onClick={adCat}>Save</button>
            </form>

            <form>
                <label>Dog:<input ref={dogsForm} type='text' name={'dog'}/></label>
                <button onClick={adDog}>Save</button>
            </form>
        </div>
    );
};

export default Form;