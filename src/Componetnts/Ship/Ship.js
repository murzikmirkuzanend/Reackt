import React from 'react';
import './Ships.css'
const Ship = (props) => {
let {mission_name, launch_year, mission_patch_small} = props;

    return (
        <div className={'itemShip'}>
            <div className={'itemSips'}>
            <h4>mission_name:{mission_name} </h4>
            <p>launch_year:{launch_year} </p>
            </div>
            <div className={'shipsIMG'}>
            <img src={mission_patch_small} alt="mission_patch_small"/>
            </div>
            </div>
    );
};

export default Ship;