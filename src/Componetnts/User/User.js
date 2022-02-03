import React from 'react';

const User = ({user:{id, name, username, address:{street,suite,city,zipcode,geo:{lat,lng}},phone,website}}) => {
    

    
    return (
        <div>
            <div>
                <h2>Id: {id}</h2>
                <div>Name: {name}</div>
                <div>Username: {username}</div>
                <div>Street: {street}</div>
                <div>Suite: {suite}</div>
                <div>City: {city}</div>
                <div>Zipcode: {zipcode}</div>
                <div>Lat: {lat}</div>
                <div>Lng: {lng}</div>
                <div>Phone: {phone}</div>
                <div>Website: {website}</div>
                <hr/>

            </div>

        </div>
    );
};

export default User;