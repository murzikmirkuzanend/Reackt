import './App.css';
import {Route, Routes} from 'react-router-dom'

import {CommentsDetails, Footer, PostDetails, UserDetails, UsersPostId, Albums} from "./Components";
import {UsersPages} from "./pages/Users/UsersPages";
import {PostsPages} from "./pages/PostsPages/PostsPages";

import Photos from "./Components/Photos/Photos";


function App() {
    return (

        <div>

            <Routes>
                <Route path={'/'} element={<Footer/>}>

                    <Route path={'users'} element={<UsersPages/>}>
                        <Route path={':id'} element={<UserDetails/>}>
                            <Route path={'posts'} element={<UsersPostId/>}/>
                        </Route>
                        <Route path={':id/albums'} element={<Albums/>}>
                            <Route path={':albums/photos'} element={<Photos/>}/>
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
