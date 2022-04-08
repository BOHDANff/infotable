import {createSlice} from "@reduxjs/toolkit";
import {createItem, deleteItem, fetchItems} from "../actionCreators/TableActionCreator";

const initialState = {
    table: [],
    isLoading: false,
}

export const tableSlice = createSlice({
    name: 'table',
    initialState,
    reducers: {
        setIsLoading(state, action) {
            state.isLoading = true
        }
    },
    extraReducers: {
        [createItem.fulfilled]: (state, action) => {
            state.table.push(action.payload)
        },
        [createItem.rejected]: (state, action) => {
            console.log(action.payload)
        },
        [fetchItems.pending]: (state, action) => {
            state.isLoading = true
        },
        [fetchItems.fulfilled]: (state, action) => {
            state.table = action.payload
            state.isLoading = false
        },
        [fetchItems.rejected]: (state, action) => {
            console.log(action.payload)
            state.isLoading = false
        },
        [deleteItem.fulfilled]:(state, action) => {
            state.table = state.table.filter(item => item._id !== action.payload._id)
        },
        [deleteItem.rejected]:(state, action) => {
            console.log(action.payload)
        },
    }
})

export const {setIsLoading} = tableSlice.actions
export default tableSlice.reducer