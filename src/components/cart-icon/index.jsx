import React from 'react';
import {connect} from 'react-redux';

import { ReactComponent as ShoppingIcon } from '../../assets/shoppingicon.svg';

import {cartDropDownToggle} from '../../redux/cart/cart.action';

import { selectCartItemCount } from '../../redux/cart/cart.selector';

import './cart-icon.style.scss';

const CartIcon = ({ cartDropDownToggle, totalQuantity }) => {
    return (
        <div className="cart-icon" onClick={ cartDropDownToggle }>
            <ShoppingIcon className="shopping-icon" />
            <span className="item-count">{totalQuantity}</span>
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        totalQuantity: selectCartItemCount(state)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        cartDropDownToggle: () => dispatch(cartDropDownToggle())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
