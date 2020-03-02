import React from 'react';
import { connect } from 'react-redux';

import { removeItemfromCart, reduceItem, addItem } from '../../redux/cart/cart.action';

import {CheckoutItemStyled, CheckoutImageContainerStyled, CheckoutSpanElemStyled, CheckoutQuantityStyled, CheckoutRemoveItemStyled} from './checkout-item.style'

const CheckoutItem = ({cartItem, removeItem, addItem, reduceItem}) => {
    const {imageUrl, name, quantity, price} = cartItem;
    return (
        <CheckoutItemStyled>
            <CheckoutImageContainerStyled>
                <img src={imageUrl} alt="item"/>
            </CheckoutImageContainerStyled>
            <CheckoutSpanElemStyled>{name}</CheckoutSpanElemStyled>
            <CheckoutQuantityStyled>
                <div className="arrow" onClick={() => reduceItem(cartItem)}>&#10094;</div>
                <span className="value">{quantity}</span>
                <div className="arrow" onClick={() => addItem(cartItem)}>&#10095;</div>
            </CheckoutQuantityStyled>
            <CheckoutSpanElemStyled>{price}</CheckoutSpanElemStyled>
            <CheckoutRemoveItemStyled onClick={() => removeItem(cartItem)}>&#10006;</CheckoutRemoveItemStyled>
        </CheckoutItemStyled>
    )
}

const mapDispatchToProps = dispatch => {
    return{
        removeItem: item => dispatch(removeItemfromCart(item)),
        addItem: item => dispatch(addItem(item)),
        reduceItem: item => dispatch(reduceItem(item))
    }
}
export default connect(null, mapDispatchToProps)(CheckoutItem);