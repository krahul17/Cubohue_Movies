
import { createSlice } from '@reduxjs/toolkit'

const MyCartSlice = createSlice({
    name:'cart',
   initialState:[],
   reducers:{
    addProductToMyCart(state,action){
    state.push(action.payload);
    },
    deleteMyCartItem(state,action){
        return state=state.filter(item=>item.id !== action.payload)
    }
   },
})
 
export const {addProductToMyCart,deleteMyCartItem}=MyCartSlice.actions;
export default MyCartSlice.reducer

