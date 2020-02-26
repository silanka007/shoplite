import React from 'react';
import {connect} from 'react-redux';

import { selectCartItems } from '../../redux/cart/cart.selector';

import CustomButton from '../custom-button';
import CartItem from '../cart-item';

import './cart-dropdown.style.scss';


const CartDropdown = ({cartItems}) => {
    return (
        <div className="cart-dropdown">
            <div className = "cart-items">
                {
                    cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
                }
            </div>
            <CustomButton inverted>go to checkout</CustomButton>
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        cartItems: selectCartItems(state)
    }
}

export default connect(mapStateToProps)(CartDropdown);
