import './App.css'

import Users from './Componetnts/Users/Users'
import Posts from './Componetnts/Posts/Posts'
import Comments from './Componetnts/Comments/Comments'
    ;

function App() {
    return (

        <div className={'heder'}>
            <div className={'phaser'}>
            <div className={'user'}>
                <Users/>
            </div>
            
            <div className={'post'}>
                <Posts/>
            </div>
            </div>

            <div className={'comments'}>
                <Comments/>
            </div>


        </div>


    );
}

export default App;
