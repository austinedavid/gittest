import {configureStore} from "@reduxjs/toolkit"
import postReducer from "./slice/Posts"
import {TypedUseSelectorHook, useSelector} from "react-redux"

// here we configure our store to include the all the reducers
export const store = configureStore({
    reducer:{
        postReducer
    }
})

// exporting some important types that will help us
export type RootState = ReturnType< typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppSelector:TypedUseSelectorHook<RootState> = useSelector