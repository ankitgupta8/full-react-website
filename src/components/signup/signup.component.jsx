import React, { Component } from 'react';
import FormInput  from "../../components/formInput/forminput.component";
import './signup.styles.scss';
import {auth, createUserProfileDocument} from '../../firebase/firebase.utils';

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: '',
        }
    }
    handleInput = (e) => {
        const {name, value} = e.target;
        this.setState({
            [name]: value
        })
    }
    handleSubmit = async (e) =>  {
        e.preventDefault();
        const {email, password, displayName, confirmPassword} = this.state;
        if(password !== confirmPassword){
            alert('Passwords Don\'t match');
            return;
        }
        try{
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, {displayName});
        } catch(err){
            console.log(err)
        }
        this.setState({
            displayName: '',
            email: '',
            password: '',
            confirmPassword: '',
        })
    }

    render() {
        return (
            <>
            <h1>Not Signed in yet</h1>
            <form onSubmit={this.handleSubmit}>
                <FormInput type='text' name='displayName' handleChange={this.handleInput} label='Name' className="inputField" value={this.state.displayName} />
                <FormInput type='text' name='email' handleChange={this.handleInput} label='Email' className="inputField" value={this.state.email} />
                <FormInput type='password' name='password' handleChange={this.handleInput} label='Password' className="inputField"  value={this.state.password}/>
                <FormInput type='password' name='confirmPassword' handleChange={this.handleInput} label='Confirm Password'  value={this.state.confirmPassword} className="inputField"/>
                <input type='submit' value='Sign Up' className="submit" onSubmit={this.handleSubmit} />
            </form>
            </>
        );
    }
}

export default SignUp;