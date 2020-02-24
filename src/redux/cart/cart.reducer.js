import { cartActionTypes } from './cart.types'

const INITIAL_STATE = {
    isHidden : true
}
const CartReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case cartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                isHidden : !state.isHidden
            }
        default: 
            return state;
    }
}

export default CartReducer;
