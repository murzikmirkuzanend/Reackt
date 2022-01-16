import './User.css'


const User = ({user}) => {

    const {id, name, username, email} = user;

    return (
        <div className={'UserStyle'}>

            <div className={'UserStyleDetails'}>
                <h3>id:{id}</h3>
                <p>name: {name}</p>
                <p>username:{username}</p>
                <p>email: {email}</p>
            </div>

        </div>
    );
};

export default User;