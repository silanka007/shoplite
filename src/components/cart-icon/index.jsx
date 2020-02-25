import React from 'react';
import {connect} from 'react-redux';

import { ReactComponent as ShoppingIcon } from '../../assets/shoppingicon.svg';

import {cartDropDownToggle} from '../../redux/cart/cart.action';

import './cart-icon.style.scss';

const CartIcon = ({cartDropDownToggle}) => {
    return (
        <div className="cart-icon" onClick={ cartDropDownToggle }>
            <ShoppingIcon className="shopping-icon" />
            <span className="item-count">0</span>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return{
        cartDropDownToggle: () => dispatch(cartDropDownToggle())
    }
}  

export default connect(null, mapDispatchToProps)(CartIcon);