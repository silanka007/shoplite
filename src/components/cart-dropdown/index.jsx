import React from 'react';
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import { selectCartItems } from '../../redux/cart/cart.selector';
import { cartDropDownToggle } from '../../redux/cart/cart.action';

import CustomButton from '../custom-button';
import CartItem from '../cart-item';

import {CartDropDownStyled, CartItemsStyled} from './cart-dropdown.style';


const CartDropdown = ({cartItems, history, dispatch }) => {
    return (
        <CartDropDownStyled>
            <CartItemsStyled>
                {
                    cartItems.length ?
                    cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />):
                    (<span className="empty-cart">No Item added to Cart yet</span>)
                }
            </CartItemsStyled>
            <CustomButton inverted onClick= {() => {
                history.push('/checkout');
                //since connect has dispatch dispatch readily presented in the props items,
                //this is very useful if there is only one action to dispatch
                //thus no need creating mapDispatchToProps which will take more lines of codes
                dispatch(cartDropDownToggle()); 
                
                }}>go to checkout</CustomButton>
        </CartDropDownStyled>
    )
}

const mapStateToProps = createStructuredSelector({
        cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown));
