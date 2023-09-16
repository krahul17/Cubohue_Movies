import { configureStore } from "@reduxjs/toolkit";
import MyProductReducer from '../MyProductSlice/MyProductSlice'
import MyCartReducer from '../MyCartSlice/MyCartSlice'
import MovieCartReducer from '../MovieProductSlice/MovieProductSlice'
import CartSliceReducer from '../MyMovieSlice/MyMovieSlice'

import { combineReducers } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import storage from 'redux-persist/lib/storage'


let persistConfig={
    key:'root',
    storage,
}
let  rootReducer=combineReducers({
    product : MyProductReducer,
    cart : MyCartReducer,
    Moviecart: MovieCartReducer,
    cartSlice: CartSliceReducer

})

let persistedReducer =persistReducer(persistConfig,rootReducer)

export const mystore=configureStore({
        reducer:persistedReducer,
   
})