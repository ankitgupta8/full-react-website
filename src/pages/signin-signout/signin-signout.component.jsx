import React from 'react'
import  SignIn  from "../../components/signin/signin.component";
import SigninPic from '../../Assets/signin.png';
import './signin-signout.styles.scss'
import SignUp from '../../components/signup/signup.component'

class SignInSignUp extends React.Component  {
    
    signupFunc = (e) => {
    let bg = e.target.previousSibling
    bg.style.left = '48%';
    e.target.style.color = '#fff'
    e.target.parentElement.children[2].style.color = '#424242c9'
    this.setState({
        signin: false
    })
}
    signinFunc = (e) => {
    let bg = e.target.parentElement.children[0]
    bg.style.left = '6px';
    e.target.style.color = '#fff'
    e.target.parentElement.children[1].style.color = '#424242c9'
    this.setState({
        signin: true
    })

}
    constructor() {
        super();
        this.state = {
            signin: true
        }
    }
    render() {
        return (
        <div>
            <section className="login">
                <div className="left-sign" style={{backgroundImage:`url(${SigninPic})`}}></div>
                    <div className="right-sign">
                        <div className="card">
                            <div className="btn-container">
                                <span className="bg"></span>
                                <button className="signup" onClick={this.signupFunc}>Sign up</button>
                                <button className="signin" onClick={this.signinFunc}>Sign in</button>
                            </div>
                            {this.state.signin ? <SignIn /> : <SignUp />}
                            </div>
                </div>
            </section>
        </div>
    )
        }

}

export default SignInSignUp;
