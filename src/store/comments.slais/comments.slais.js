import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {commentsServices} from "../../services/json.services/json.services";

const initialState ={
    comments:[],
    status:null,
    error:null
}

export const getComments = createAsyncThunk(
    'comments/getComments',
    async (_,{rejectedWithValue})=>{
        try {
            const comments = await commentsServices.getAll()
            return comments
        }catch (e) {
            return rejectedWithValue(e.response.data.detail)
        }
    }
)

const commentsSlaice = createSlice({
    name:'comments',
    initialState,
    reducers:{
        commentsToUpdate:(state,action)=>{
            state.commentsForUpdate = action.payload.comment
        }
    },
    extraReducers:{
        [getComments.pending]:(state)=> {
            state.status = 'pending'
            state.error = null
        },
        [getComments.fulfilled]:(state,action)=>{
            state.comments = action.payload
        },
        [getComments.rejected]:(state, action)=>{
            state.error = action.payload
        }
    }
})

export const commentsReducer = commentsSlaice.reducer