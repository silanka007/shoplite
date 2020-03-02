import React from 'react';

import {CustomButtonStyled} from './custom-button.style'

const CustomButton = ({children,...otherProps}) => (
        <CustomButtonStyled {...otherProps} >
            {children}
        </CustomButtonStyled>
    )

export default CustomButton;