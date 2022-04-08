import {createSlice} from "@reduxjs/toolkit";
import {createItem} from "../actionCreators/TableActionCreator";

const initialState = {
    table: [],
}

export const tableSlice = createSlice({
    name: 'table',
    initialState,
    reducers: {
    },
    extraReducers: {
        [createItem.fulfilled]: (state, action) => {
            state.table.push(action.payload)
        },
        [createItem.rejected]: (state, action) => {
            console.log(action.payload)
        },
    }
})

export default tableSlice.reducer