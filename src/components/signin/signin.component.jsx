import React, { Component } from 'react';
import FormInput  from "../../components/formInput/forminput.component";
import './signin.styles.scss';
import {auth, signinWithGoogle} from '../../firebase/firebase.utils';
class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }
    handleInput = (e) => {
        const {name, value} = e.target;
        this.setState({
            [name]: value
        })
    }
    handleSubmit = async e => {
        e.preventDefault();
        const {email, password} = this.state;
        try {
            await auth.signInWithEmailAndPassword(email, password);
            
            this.setState({
                email: '',
                password: ''
            })
        } catch (error) {
            console.log(error)
        }

    }

    render() {
        return (
            <>
            <h1>Already Signed Up</h1>
            <form onSubmit={this.handleSubmit}>
                <FormInput type='text' name='email' value={this.state.email} handleChange={this.handleInput} label='Email' className="inputField" />
                <FormInput type='password' name='password' value={this.state.password} handleChange={this.handleInput} label='Password' className="inputField"/>
                <input type='submit' name='password' value='Sign In' className="submit" onSubmit={this.handleSubmit} />
            </form>
                <div className="btns-container">

                <i id='googleicon' className='bx bxl-google' ></i>
                <button onClick={signinWithGoogle}   className="signinwithgoogle" >Sign In With Google</button>
                </div>
            </>
        );
    }
}

export default SignIn;