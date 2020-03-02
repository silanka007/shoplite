import React from 'react';

import SignIn from '../../components/sign-in';
import SignUp from '../../components/sign-up';
import {SignInSignOutStyled} from './sign-in-and-sign-up.style'

const SignInAndSignUp = () => {
    return (
        <SignInSignOutStyled>
            <SignIn />
            <SignUp />
        </SignInSignOutStyled>
    )
}
export default SignInAndSignUp;