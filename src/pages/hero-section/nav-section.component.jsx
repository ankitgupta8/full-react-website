import React from 'react';
import './nav-section.styles.scss'
import logo from '../../Assets/logo.png';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';

const NavBar = ({userdata}) => {
    return (
    <nav className="nav-section">
        <Link to='/'><img src={logo} className="logo" alt="logo" /></Link>
        <ul className="nav-items">
            <li><Link to='/' className="active">Home</Link></li>
            <li><Link to='/shop'>Shop</Link></li>
            <li><Link to='/'>Contact</Link></li>
        </ul>
        <div className="cart">
            
            <i id="user-icon"  className='bx bx-user'>
            <div className='user-log' >
            {userdata ? 
            <button className='signbtn' onClick={() => auth.signOut()}>Sign Out</button>
            :
            <Link to='/signin'><button className='signbtn' > Sign In</button></Link>
            }
            </div>
                </i>
            <i id="cart-icon" className='bx bx-cart'></i>
        </div>
    </nav>
    );
}

export default NavBar; 