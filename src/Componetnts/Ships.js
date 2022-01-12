import React, {useEffect, useState} from 'react';
import Ship from "./Ship/Ship";



const Ships = () => {

    const [ships, setShips] = useState([])
    useEffect(() => {
fetch('https://api.spacexdata.com/v3/launches/')
    .then(value => value.json())
    .then(value => {setShips(value.filter(flight => flight.launch_year !== '2020'))
    })
    })
    return (
        <div>
            {ships.map(value => <Ship key={value.number} mission_name={value.mission_name} launch_year={value.launch_year} mission_patch_small={value.links.mission_patch_small}/> )}
        </div>
    );
};

export default Ships;