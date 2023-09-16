
import { createSlice } from '@reduxjs/toolkit'

const MyMovieSlice = createSlice({
    name:'cartSlice',
   initialState:[],
   reducers:{
    addProductToMovieCart(state,action){
    state.push(action.payload);
    },
    deleteMovieCartItem(state,action){
        return state=state.filter(item=>item.id !== action.payload)
    }
   },
})
 
export const {addProductToMovieCart,deleteMovieCartItem}=MyMovieSlice.actions;
export default MyMovieSlice.reducer

