import React from 'react';
import { connect } from 'react-redux';

import { removeItemfromCart, reduceItem, addItem } from '../../redux/cart/cart.action';

import './checkout-item.style.scss';

const CheckoutItem = ({cartItem, removeItem, addItem, reduceItem}) => {
    const {imageUrl, name, quantity, price} = cartItem;
    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt="item"/>
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div className="arrow" onClick={() => reduceItem(cartItem)}>&#10094;</div>
                <span className="value">{quantity}</span>
                <div className="arrow" onClick={() => addItem(cartItem)}>&#10095;</div>
            </span>
            <span className="price">{price}</span>
            <div className="remove-button" onClick={() => removeItem(cartItem)}>&#10006;</div>
        </div>
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