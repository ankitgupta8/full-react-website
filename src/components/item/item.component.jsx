import React from 'react'
import './item.styles.scss';
function Item({name, imageUrl, price}) {
    const styles = {backgroundImage: `url(${imageUrl})`};
    return (
        <div className="item">
                <div className="container">
                    <button className="out">Add To Cart</button>
                    <div className="image" style={styles}></div>
                    <div className="desc">
                        <h3 className="name">{name}</h3>
                        <h3 className="price">${price}</h3>
                    </div>
                </div>
            </div>
    )
}

export default Item