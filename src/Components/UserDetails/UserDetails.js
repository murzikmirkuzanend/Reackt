import React from 'react';
import {useLocation} from "react-router-dom";


const UserDetails = () => {

const location = useLocation();
const {state} = location
    return (
        <div>
            {JSON.stringify(state)}

        </div>
    );
};

export {UserDetails};