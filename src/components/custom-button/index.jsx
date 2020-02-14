import React from 'react';

import './custom-button.style.scss';

const CustomButton = ({children,isGoogleSignIn, ...otherProps}) => (
        <button {...otherProps} className={`${isGoogleSignIn ? 'googleSignIn' : ''} custom-button`} >
            {children}
        </button>
    )

export default CustomButton;