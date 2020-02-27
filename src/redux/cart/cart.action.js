import { cartActionTypes } from './cart.types';

export const cartDropDownToggle = () => {
    return {
        type: cartActionTypes.TOGGLE_CART_HIDDEN,
    }
}

export const addItem = item => {
    return {
        type: cartActionTypes.ADD_ITEM,
        payload: item,
    }
}

export const reduceItem = item => {
    return{
        type: cartActionTypes.REDUCE_ITEM,
        payload: item
    }
}

export const removeItemfromCart = item => {
    return {
        type: cartActionTypes.REMOVE_ITEM_FROM_CART,
        payload: item
    }
}