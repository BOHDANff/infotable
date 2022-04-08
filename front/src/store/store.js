import {combineReducers, configureStore} from '@reduxjs/toolkit'
import tableReducer from "./reducers/TableReducer";

const rootReducer = combineReducers({
    table: tableReducer
})

export const store = configureStore({
    reducer: rootReducer,
})