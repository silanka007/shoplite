import React from 'react';

import {CartItemStyled, CartItemImageStyled, CartItemDetailsStyled} from './cart-item.style.jsx';

const CartItem = ({item: {imageUrl, price, name, quantity}}) => {
    return(
        <CartItemStyled>
            <CartItemImageStyled src={imageUrl} alt="item"/>
            <CartItemDetailsStyled>
                <span className="name">{name}</span>
                <span className="price">{quantity} x ${price}</span>
            </CartItemDetailsStyled>
        </CartItemStyled>
        
    )
}

export default CartItem;