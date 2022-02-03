import {carsServices} from "../../services/cars.services/cars.services";
import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";

export const getAllCars = createAsyncThunk(
    'cars/getAllCars',
    async (_,{rejectWithValue}) => {
        try {
            const data = await carsServices.getAll();
            return data

        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
)

export const createCar = createAsyncThunk(
    'cars/createCar',
    async ({data:newCar, id},{dispatch})=>{
        try {
            console.log(id);
            const data = await carsServices.create(newCar);
            console.log(data);
            dispatch(addCar({data}))
        }catch (e) {

        }
    }
)

export const deleteCarThunk = createAsyncThunk(
    'cars/createCar',
    async ({id},{dispatch})=>{
        try {
                await carsServices.deleteById(id)
                dispatch(deleteCar({id}))
            }
        catch (e) {

        }
    }
)


const carSlice = createSlice({
    name:'cars',
    initialState:{
        cars:[],
        status:null,
        error:null
    },
    reducers:{
        addCar:(state,action)=>{
            state.cars.push(action.payload.data)
        },
        deleteCar:(state, action)=>{
            state.cars=state.cars.filter(car=>car.id !== action.payload.id)
        }
    },
    extraReducers: {
        [getAllCars.pending]: (state, action) => {
            state.status = 'loading'
            state.error = null
        },
        [getAllCars.fulfilled]: (state, action) => {
            state.status = 'resolved'
            state.cars = action.payload
        },
        [getAllCars.rejected]: (state, action) => {
            state.status='rejected'
            state.error = action.payload
        }
    }
})


export const carReducer = carSlice.reducer;

const {addCar, deleteCar} = carSlice.actions;



export const carActions ={
    addCar, deleteCar
}