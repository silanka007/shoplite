import { cartActionTypes } from './cart.types'
import { addItemToCart, reduceItemInCart } from './cart.utils';

const INITIAL_STATE = {
    isHidden : true,
    cartItems : []
}
const CartReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case cartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                isHidden : !state.isHidden
            }
        case cartActionTypes.ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            }
        case cartActionTypes.REDUCE_ITEM:
            return{
                ...state,
                cartItems: reduceItemInCart(state.cartItems, action.payload)
            }
        case cartActionTypes.REMOVE_ITEM_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
            }
        default: 
            return state;
    }
}

export default CartReducer;
