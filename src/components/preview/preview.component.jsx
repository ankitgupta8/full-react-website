import React from 'react';
import './preview.styles.scss';
import Item from '../item/item.component';
function PreviewComponent({ title, routeName, items}) {
    return (
        <section className="shop-products">
        <div className="heading">
            <h1 className='ItemTitle'>{title}</h1>
        </div>
        <div className="items">
            {items.filter((item, i) => i<4).map(({id, name, imageUrl, price}) => {
                return <Item key={id} name={name} imageUrl={imageUrl} price={price} />
            })}
        </div>
    </section>
    )
}

export default PreviewComponent;