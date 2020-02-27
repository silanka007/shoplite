import React from 'react';
import { connect } from 'react-redux';

import { removeItemfromCart } from '../../redux/cart/cart.action';

import './checkout-item.style.scss';

const CheckoutItem = ({cartItem, removeItem}) => {
    const {imageUrl, name, quantity, price} = cartItem;
    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt="item"/>
            </div>
            <span className="name">{name}</span>
            <span className="quantity">{quantity}</span>
            <span className="price">{price}</span>
            <div className="remove-button" onClick={() => removeItem(cartItem)}>&#10006;</div>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return{
        removeItem: item => dispatch(removeItemfromCart(item))
    }
}
export default connect(null, mapDispatchToProps)(CheckoutItem);