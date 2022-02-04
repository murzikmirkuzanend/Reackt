import React from 'react';
import {useSelector} from "react-redux";
import Massif from "../Massif/Massif";

const Massifs = () => {

    const {massifs} = useSelector(state => state.massif);

    return (
        <div>
            {massifs.map(massif=><Massif key={massif.id} massif={massif}/>)}
        </div>
    );
};

export default Massifs;