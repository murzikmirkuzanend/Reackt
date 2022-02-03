import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {postsServices} from "../../services/json.services/json.services";

const initialState = {
    posts: [],
    status: null,
    error: null
}

export const getAllPosts = createAsyncThunk(
    'posts/getAllPosts',
    async (_, {rejectedWithValue}) => {
        try {
            const posts = await postsServices.getAll()
            return posts
        } catch (e) {
            return rejectedWithValue(e.response.data.detail)
        }
    }
)

const postsSlaice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postsToUpdate: (state, action) => {
            state.postsForUpdate = action.payload.post
        }
    },
    extraReducers: {
        [getAllPosts.pending]: (state) => {
            state.status = 'pending'
            state.error = null
        },
        [getAllPosts.fulfilled]: (state, action) => {
            state.posts = action.payload
        },
        [getAllPosts.rejected]: (state, action) => {
            state.error = action.payload
        }
    }
})

export const postsReducer = postsSlaice.reducer;
