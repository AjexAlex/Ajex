import { ADD_ITEM, REMOVE_ITEM } from "../ActionTypes";

export const Reducers =(state=[],action)=>{
switch(action.type){
    case ADD_ITEM:
    {
        return [...state,action.payload]

    }
    case REMOVE_ITEM:
    {
        const deleteArray=payload.filter((item,index)=>{
            return index=action.payload
        }

    }
    default {
        return state
}
}