import React from 'react';
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { ReactComponent as ShoppingIcon } from '../../assets/shoppingicon.svg';

import {cartDropDownToggle} from '../../redux/cart/cart.action';

import { selectCartItemCount } from '../../redux/cart/cart.selector';

import {CartIconStyled, ItemCountStyled} from './cart-icon.style'

const CartIcon = ({ cartDropDownToggle, totalQuantity }) => {
    return (
        <CartIconStyled onClick={ cartDropDownToggle }>
            <ShoppingIcon className="shopping-icon" />
            <ItemCountStyled>{totalQuantity}</ItemCountStyled>
        </CartIconStyled>
    )
}

const mapStateToProps = createStructuredSelector({
        totalQuantity: selectCartItemCount
})

const mapDispatchToProps = dispatch => {
    return {
        cartDropDownToggle: () => dispatch(cartDropDownToggle())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
