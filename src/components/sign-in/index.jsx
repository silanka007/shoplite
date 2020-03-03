import React from 'react';

import  {signInWithGoogle, auth } from '../../firebase/firebase.utils';
import FormInput from '../form-input';
import CustomButton from '../custom-button';
import './sign-in.style.scss';

class SignIn extends React.Component{
    constructor (props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }
    handleSubmit = async event => {
        event.preventDefault();
        const {email, password} = this.state;
        try{
            await auth.signInWithEmailAndPassword(email, password);
        }catch(error){
            console.log(error);
        }
        this.setState({email: '', password: ''})
    }
    handleChange = event => {
        const {value, name } = event.target;
        this.setState({ [name] : value });
    }

    render() {
        return (
            <section className="sign-in">
                <h2 className="title">Already has an account?</h2>
                <span>sign in with your email and password</span>
                <form onSubmit={this.handleSubmit} className="sign-in-form">
                    <FormInput type="email" name="email" value={this.state.email} handleChange={this.handleChange} label="email" autoComplete = "email" required/>
                    <FormInput type="password" name="password" value={this.state.password} handleChange={this.handleChange} label="password" autoComplete = "current-password" required/>
                    <div className="button">
                        <CustomButton type="submit">SIGN IN</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>GOOGLE SIGNIN</CustomButton>
                    </div>
                    
                </form>
            </section>
        )
    }
}

export default SignIn;