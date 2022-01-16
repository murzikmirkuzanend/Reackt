import React from 'react';

import './UserDetails.css'

const UserDetails = ({user, getUserId}) => {

    const {id, name, username, email, address, phone, website, company} = user;

    return (
        <div className={'headerUserDetails'}>
            <div className={'userDetails'}>
                <p>id:{id}</p>
                <p>name:{name}</p>
                <p>username:{username}</p>
                <p>email:{email}</p>
                <p>address:
                    street: {address.street}</p>
                <p>suite{address.suite}</p>
                <p>city{address.city}</p>
                <p>zipcode{address.zipcode}</p>
                <p>geo:
                    lat:{address.geo.lat}</p>
                <p>lng:{address.geo.lng}</p>
                <p>phone{phone}</p>
                <p>website{website}</p>
                <p>company:</p>
                <p>name:{company.name}</p>
                <p>catchPhrase:{company.catchPhrase}</p>
                <p>bs:{company.bs}</p>

            </div>
            <button className={'btnDetails'} onClick={() => getUserId(id)}>get Posts</button>
        </div>
    );
};

export default UserDetails;