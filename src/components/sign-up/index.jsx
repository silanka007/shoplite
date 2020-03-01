import React from 'react';

import FormInput from '../form-input';
import CustomButton from '../custom-button';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import './sign-up.style.scss';

class SignUp extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            displayName : '',
            email : '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const {displayName, email, password, confirmPassword } = this.state;
        if(password !== confirmPassword){
            alert('password must be equal to confirm password');
            return;
        }
        try{
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, {displayName});
            this.setState({
                displayName : '',
                email : '',
                password: '',
                confirmPassword: ''
            });
        }catch(error){
            console.log(error);
        }
        
    }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    render(){
        const {displayName, email, password, confirmPassword } = this.state;
        return(
            <div className="sign-up">
                <h2 className="title">if you do not have an account</h2>
                <span>Please sign up with email and password</span>
                <form onSubmit={this.handleSubmit} className="sign-up-form">
                    <FormInput name="displayName" label="display name" type="text" onChange={this.handleChange} value={displayName} autoComplete="display name" required />
                    <FormInput name="email" label="Email address" type="email" onChange={this.handleChange} value={email} autoComplete="email" required />
                    <FormInput name="password" label="Password" type="password" onChange={this.handleChange} value={password} autoComplete="password" required />
                    <FormInput name="confirmPassword" label="Confirm Password" type="password" onChange={this.handleChange} value={confirmPassword} autoComplete="password" required />
                    <CustomButton type="submit">sign up</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignUp;