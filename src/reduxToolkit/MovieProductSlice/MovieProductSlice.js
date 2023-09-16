import { createSlice } from '@reduxjs/toolkit'

const MovieProductSlice = createSlice({
    name:'Moviecart',
   initialState:[],
   reducers:{
    addMovieProducts(state,action){
    state.push(action.payload);
    },
   },
})
 
export const {addMovieProducts}=MovieProductSlice.actions;
export default MovieProductSlice.reducer

