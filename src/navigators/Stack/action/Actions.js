import { ADD_ITEM } from "../ActionTypes"

export const addItemToCart=data=>({
    type:ADD_ITEM,
    payload:data,
});

export const removeItemToCart=data=>({
    type:REMOVE_ITEM,
    payload:index,
});