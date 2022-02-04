import {createSlice} from "@reduxjs/toolkit";
import massif from "../../components/Massif/Massif";

const initialState = {
    massifs: [],

}
const slice = createSlice({
    name: 'massifSlice',
    initialState,
    reducers: {
        addMassifs: (state, action) => {
            state.massifs.push({id: new Date().getTime(), name: action.payload.massif, status: false})
        },
        changeStatus: (state, action) => {
            state.massifs.find(massif => massif.id === action.payload.id);
            massif.status = !massif.status
        },
        deleteMassif:(state, action) => {
            const index = state.massifs.findIndex(massif=>massif.id === action.payload.id);
            state.massifs.splice(index,1)
        }

    }
});

const sliceReduser = slice.reducer;

export const {addMassifs, changeStatus, deleteMassif} = slice.actions;

export default sliceReduser