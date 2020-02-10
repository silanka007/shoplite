import React from 'react';

import FormInput from '../form-input';
import './sign-in.style.scss';

class SignIn extends React.Component{
    constructor (props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({email: '', password: ''})
    }
    handleChange = event => {
        const {value, name } = event.target;
        this.setState({ [name] : value });
        console.log(name, value);
    }

    render() {
        return (
            <section className="sign-in">
                <h1>Already has an account?</h1>
                <span>sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput type="email" name="email" value={this.state.email} handleChange={this.handleChange} label="email" required/>
                    <FormInput type="password" name="password" value={this.state.password} handleChange={this.handleChange} label="password" required/>
                    <input type="submit" value="Sign In"/>
                </form>
            </section>
        )
    }
}

export default SignIn;