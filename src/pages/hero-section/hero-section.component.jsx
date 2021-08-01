import React from 'react';
import './hero-section.styles.scss';
import HeroImg from '../../Assets/hero.png'
import { Link } from 'react-router-dom';
const HeroSection = () => {
    return (
        <section className="hero-section">
        <div className="left">
            <h1 className='MainTitle'>A Complete <br />E-Commerce Website </h1>
            <p>A Website Made with Love. It has complete features of Online Shopping. </p>
            <Link to='/shop'><button className="shop">Shop Now</button></Link>
        </div>
        <div className="right">
            <img src={HeroImg} alt="E-Commerce" />
        </div>
    </section>
    )
}

export default HeroSection;