import { Add_ITEM, REMOVE_ITEM } from "../ActionTypes";

export const Reducers =(state=[],action)=>{
switch(action.type){
    case Add_ITEM :
    
      return [...state,action.payload];
      
    
      case REMOVE_ITEM:
        const deleteArray = state.filter((item) => {
          return (item.id !== action.payload)
        })
        return deleteArray;
      default:
        return state;
    }
};