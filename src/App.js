import Cars from "./Componetnts/Cars/Cars";
import Users from "./pages/Users/Users";
import Posts from "./pages/Posts/Posts";
import Comments from "./pages/Comments/Comments";
import {Route, Routes} from "react-router-dom";
import Footer from "./pages/Footer/Footer";


function App() {
    return (

        <div>

            <Routes>
                <Route path={'/'} element={<Footer/>}>
                    <Route path={'cars'} element={<Cars/>}/>
                    <Route path={'users'} element={<Users/>}/>
                    <Route path={'posts'} element={<Posts/>}/>
                    <Route path={'comments'} element={<Comments/>}/>
                </Route>
            </Routes>


        </div>


    );
}

export default App;
