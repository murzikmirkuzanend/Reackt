import './App.css';
import {Route, Routes} from 'react-router-dom'

import {CommentsDetails, Footer, PostDetails} from "./Components";
import {UsersPages} from "./pages/Users/UsersPages";
import {PostsPages} from "./pages/PostsPages/PostsPages";
import {Users} from "./Components/Users/Users";


function App() {
    return (

        <div>
            <Routes>
                <Route path={'/'} element={<Footer/>}>
                    <Route path={'users'} element={<UsersPages/>}>
                        <Route path={':id'} element={<Users/>}>
                            <Route path={'posts'} element={<PostDetails/>}/>
                        </Route>
                    </Route>
                    <Route path={'posts'} element={<PostsPages/>}>
                        <Route path={':id'} element={<PostDetails/>}>
                            <Route path={'comments'} element={<CommentsDetails/>}/>
                        </Route>
                    </Route>
                </Route>

            </Routes>


        </div>

    );
}

export default App;
