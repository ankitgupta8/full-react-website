import React from 'react'
import SHOP_DATA from './shop.data';
import PreviewComponent from '../../components/preview/preview.component';
const ShopComponent = () => {
    return (
        <div>
            {SHOP_DATA.map(({id, title, items, routeName}) => {
                return <PreviewComponent key={id} title={title} items={items} routeName={routeName} />
            })}
        </div>
    )
}

export default ShopComponent;