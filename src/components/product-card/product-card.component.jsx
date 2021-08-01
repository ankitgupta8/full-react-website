import React from 'react';
import './product-card.styles.scss';
import Tilt from 'react-tilt';
import { Link } from 'react-router-dom';
const ProductCard = ({name, color, image, gender}) => {
    let styles = {
        backgroundColor: `#${color}`,
        filter: `drop-shadow(0px 19px 50px #${color})`,
    }
    let style2 = {};
    if (gender === 'men'){
        style2 = {top: '-50%'}
    } else if (gender === 'women'){
        style2 = {left: '60%',
            top: '-35%'}
    }
    return (
        <Tilt className="Tilt" options={{ max : 30 }} style={{ height: 250, width: 400 }}>
        <div className="product-card" style={styles} >
            <h4>{name}</h4>
            <Link to='/shop'><button className="shopNow">Shop Now</button></Link>
            <img src={image} alt={name} style={style2} />
        </div>
        </Tilt>
    );
}

export default ProductCard;