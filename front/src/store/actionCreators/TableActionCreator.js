import {createAsyncThunk} from "@reduxjs/toolkit";
import TableItemService from "../../services/TableItemService";


export const createItem = createAsyncThunk(
    'item/create',
    async ({item}, {rejectWithValue}) => {
        try {
            const response = await TableItemService.create(item)
            return response.data
        } catch (e) {
            return rejectWithValue(e.response?.data)
        }
    }
)

export const fetchItems = createAsyncThunk(
    'item/fetch',
    async ( userId, {rejectWithValue}) => {
        try {
            const response = await TableItemService.getAll()
            return response.data
        } catch (e) {
            return rejectWithValue(e.response?.data?.message)
        }
    }
)

export const deleteItem = createAsyncThunk(
    'item/delete',
    async ( id, {rejectWithValue}) => {
        try {
            const response = await TableItemService.delete(id)
            return response.data
        } catch (e) {
            return rejectWithValue(e.response?.data?.message)
        }
    }
)

