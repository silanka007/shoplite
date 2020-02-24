import { cartActionTypes } from './cart.types';

export const cartDropDownToggle = () => {
    return {
        type: cartActionTypes.TOGGLE_CART_HIDDEN,
    }
}
