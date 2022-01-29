import React from 'react';
import Dog from "../Dog/Dog";

const Dogs = ({dogs,deleteDog}) => {
    return (
        <div>

            {dogs.map(dog=><Dog key={dog.id} dog={dog} deleteDog={deleteDog} />)}

        </div>
    );
};

export default Dogs;