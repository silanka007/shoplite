import React from 'react';

import './custom-button.style.scss';

const CustomButton = ({children,isGoogleSignIn, inverted, ...otherProps}) => (
        <button {...otherProps} className={` ${inverted ? 'inverted' : ''} ${isGoogleSignIn ? 'googleSignIn' : ''} custom-button`} >
            {children}
        </button>
    )

export default CustomButton;