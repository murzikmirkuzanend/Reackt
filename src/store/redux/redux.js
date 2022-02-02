import {configureStore} from "@reduxjs/toolkit";
import carReducer from "../cars.slais/cars.slais";
import userReducer from "../users.slaice/users.slaice";


const store = configureStore({
    reducer:{
        carReducer,
        userReducer


    }
})
export default store