import './User.css'


const User = ({user, getUser}) => {

    const {id, name, email} = user;

    return (
        <div className={'userPhaser'}>

            <div className={'UserHeader'}>
                <h3>id:{id}</h3>
                <p>name: {name}</p>
                <p>email: {email}</p>

            </div>

            <button  className={'btn'} onClick={() => getUser(user)}>Details</button>
        </div>
    );
};

export default User;