import {configureStore} from "@reduxjs/toolkit";
import sliceReduser from "../slaice/slaice";

const store = configureStore({
    reducer:{

        massif: sliceReduser

    }
})

export default store