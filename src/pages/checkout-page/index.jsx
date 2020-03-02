import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartItems, selectCartItemTotal } from '../../redux/cart/cart.selector';

import CheckoutItem from '../../components/checkout-item';
import PaymentCheckout from '../../components/payment-checkout';

import {CheckoutStyled, CheckoutHeaderStyled, HeaderBlockStyled, TotalStyled} from './checkout-page.style';

const CheckoutPage = ({cartItems, total }) => {
    return (
        <CheckoutStyled>
            <CheckoutHeaderStyled>
                <HeaderBlockStyled>
                    <span>Product</span>
                </HeaderBlockStyled>
                <HeaderBlockStyled>
                    <span>Description</span>
                </HeaderBlockStyled>
                <HeaderBlockStyled>
                    <span>Quantity</span>
                </HeaderBlockStyled>
                <HeaderBlockStyled>
                    <span>Price</span>
                </HeaderBlockStyled>
                <HeaderBlockStyled>
                    <span>Remove</span>
                </HeaderBlockStyled>
            </CheckoutHeaderStyled>
            {
                cartItems.map(cartItem => (<CheckoutItem key={cartItem.id} cartItem={cartItem} />))
            } 
            <TotalStyled>
                Total: ${total}
            </TotalStyled>
            <PaymentCheckout totalPrice = {total} />
        </CheckoutStyled>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartItemTotal
})

export default connect(mapStateToProps)(CheckoutPage);