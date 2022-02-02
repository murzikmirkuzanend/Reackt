import React from 'react';

const User = ({user:{id, name, username, address:{street,suite,city,zipcode,geo:{lat,lng}},phone,website}}) => {
    

    
    return (
        <div>
            {id}
            {name}
            {username}
            {street}
            {suite}
            {city}
            {zipcode}
            {lat}
            {lng}
            {phone}
            {website}

        </div>
    );
};

export default User;