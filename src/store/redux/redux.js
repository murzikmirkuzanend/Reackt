import {configureStore} from "@reduxjs/toolkit";


import {carReducer} from "../cars.slais/cars.slais";
import {userReducer} from "../users.slaice/users.slaice";
import {postsReducer} from "../posts.slais/posts.slais";
import {commentsReducer} from "../comments.slais/comments.slais";



const store = configureStore({
    reducer:{
        carReducer,
        userReducer,
        postsReducer,
        commentsReducer

    }
})
export default store