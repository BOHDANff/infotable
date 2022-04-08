import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    table: [],
}

export const tableSlice = createSlice({
    name: 'table',
    initialState,
    reducers: {
        deleteItem(state, action){
            state.table = state.table.filter(el => el.id !== action.payload)
        },
        createItem(state, action){
            state.table.push(action.payload)
        },
    }
})

export const {deleteItem, createItem} = tableSlice.actions

export default tableSlice.reducer