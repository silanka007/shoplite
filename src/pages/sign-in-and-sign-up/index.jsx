import React from 'react';

import SignIn from '../../components/sign-in';
import SignUp from '../../components/sign-up';
import './sign-in-and-sign-up.style.scss';

const SignInAndSignUp = () => {
    return (
        <div className="sign-in-and-sign-up">
            <SignIn />
            <SignUp />
        </div>
    )
}
export default SignInAndSignUp;