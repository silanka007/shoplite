import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

import './payment-checkout.style.scss';


const PaymentCheckout = ({totalPrice}) => {
    const stripePrice = totalPrice * 100;
    const PublishableKey = "pk_test_NnxRHViKunZuhF1qVwfKlRxF003wygFio6";
    const onToken = token => {
        console.log(token);
        alert('payment successful');
    }
    
    return (
        <div className ="stripe-checkout">
            <div className = "instruction">
                *Please use the following Test credit card to process payment* 
                <br/>
                ~ 4242 4242 4242 4242 - Exp - put a later month and year eg 11/20 - CVC 123 ~
            </div>
                <StripeCheckout
                    label = "Pay Now"
                    amount = {stripePrice}
                    name = "ShopLite Ltd"
                    stripeKey = {PublishableKey}
                    description = {`You are to pay $ ${totalPrice}`}
                    token = {onToken }
                />
        </div>
    )
}

export default PaymentCheckout;