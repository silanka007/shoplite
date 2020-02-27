import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectcartHidden = createSelector(
    selectCart,
    (cart) => cart.isHidden
)

export  const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
)

export const selectCartItemCount = createSelector(
    [selectCartItems],
     cartItems => cartItems.reduce((acc, cartItem) => acc + cartItem.quantity, 0)
) 

export const selectCartItemTotal = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((acc, cartItem) => acc + (cartItem.quantity * cartItem.price ), 0)
)