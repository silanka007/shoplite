import React from 'react';

import CustomButton from '../custom-button';
import './cart-dropdown.style.scss';


const CartDropdown = () => {
    return (
        <div className="cart-dropdown">
            <div className = "cart-item" />
            <CustomButton inverted>go to checkout</CustomButton>
        </div>
    )
}

export default CartDropdown;
