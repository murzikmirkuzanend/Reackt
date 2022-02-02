import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {usersServices} from "../../services/json.services/json.services";

const initialState ={
    users:[],
    status: null,
    error: null,
}

export const getAllUsers = createAsyncThunk(
    'users/getAllUsers',
    async (_,{rejectedWithValue})=>{
        try {
           const users = await usersServices.getAll()
            return users
        }catch (e) {
            return rejectedWithValue(e.response.data.detail)
        }
    }
)

const usersSlaice = createSlice({
    name:'users',
    initialState,
    reducers:{
        usersToUpdate:(state, action)=>{
            state.usersForUpdate = action.payload.user
        }
    },
    extraReducers:{
        [getAllUsers.pending]:(state) =>{
            state.status='pending'
            state.error = null
        },
        [getAllUsers.fulfilled]:(state, action) =>{
            state.users = action.payload
        },
        [getAllUsers.rejected]:(state, action)=>{
            state.error = action.payload
        }
    }
});
const userReducer = usersSlaice.reducer;
export  default  userReducer