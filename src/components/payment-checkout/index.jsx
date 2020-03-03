import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

import {StripeContainerStyled, InstructionStyled} from './payment-checkout.style';


const PaymentCheckout = ({totalPrice}) => {
    const stripePrice = totalPrice * 100;
    const PublishableKey = "pk_test_NnxRHViKunZuhF1qVwfKlRxF003wygFio6";
    const onToken = token => {
        console.log(token);
        alert('payment successful');
    }
    
    return (
        <StripeContainerStyled>
            <InstructionStyled>
                *Please use the following Test credit card to process payment* 
                <br/>
                ~ 4242 4242 4242 4242 - Exp - input any future date - CVC 123 ~
            </InstructionStyled>
                <StripeCheckout
                    label = "Pay Now"
                    amount = {stripePrice}
                    name = "ShopLite Ltd"
                    stripeKey = {PublishableKey}
                    description = {`You are to pay $ ${totalPrice}`}
                    token = {onToken }
                />
        </StripeContainerStyled>
    )
}

export default PaymentCheckout;