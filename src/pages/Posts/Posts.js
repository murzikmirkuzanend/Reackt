import React from 'react';

const Posts = ({posts}) => {
    
    const {id, name} = posts;
    
    return (
        <div>

            <div>
                <h3>ID:{id}</h3>
                <a>name:{name}</a>
            </div>
            
        </div>
    );
};

export default Posts;