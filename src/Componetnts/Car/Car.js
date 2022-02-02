import React from 'react';
import {useDispatch} from "react-redux";
import {deleteCarThunk} from "../../store/cars.slais/cars.slais";


const Car = ({car}) => {

    const {id,model,price,year} = car;
    const dispatch = useDispatch();

    return (
        <div>
            <div>

                <div>Model:{model}</div>
                <div>Price:{price}</div>
                <div>Year:{year}</div>
            </div>
            <button onClick={()=> dispatch(deleteCarThunk({id}))}>Delete</button>

        </div>
    );
};

export default Car;