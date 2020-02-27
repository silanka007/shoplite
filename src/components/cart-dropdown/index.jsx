import React from 'react';
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import { selectCartItems } from '../../redux/cart/cart.selector';
import { cartDropDownToggle } from '../../redux/cart/cart.action';

import CustomButton from '../custom-button';
import CartItem from '../cart-item';

import './cart-dropdown.style.scss';


const CartDropdown = ({cartItems, history, dispatch }) => {
    return (
        <div className="cart-dropdown">
            <div className = "cart-items">
                {
                    cartItems.length ?
                    cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />):
                    (<span className="empty-cart">No Item added to Cart yet</span>)
                }
            </div>
            <CustomButton inverted onClick= {() => {
                history.push('/checkout');
                //since connect has dispatch dispatch readily presented in the props items,
                //this is very useful if there is only one action to dispatch
                //thus no need creating mapDispatchToProps which will take more lines of codes
                dispatch(cartDropDownToggle()); 
                
                }}>go to checkout</CustomButton>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
        cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown));
