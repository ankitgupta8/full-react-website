import React from 'react';
import './directory.component.scss';
import Product1 from '../../Assets/product1.png';
import Product2 from '../../Assets/product2.png';
import Product3 from '../../Assets/product3.png';
import Men from '../../Assets/men.png'
import Women from '../../Assets/women.png'
import ProductCard from '../../components/product-card/product-card.component';
class ProductsDirectory extends React.Component {
    constructor(){
        super();
        this.state = {
            products: [
                {
                    name: 'Hats',
                    color: 'B176FE',
                    img: Product1,
                    id: 1
                },
                {
                    name: 'Jacket',
                    color: 'FDBC7C',
                    img: Product2,
                    id: 2
                },
                {
                    name: 'Shoes',
                    color: 'FF6F80',
                    img: Product3,
                    id: 3
                },
            ],
            category: [
                {
                    name: 'Men',
                    color: 'B176FE',
                    img: Men,
                    gender: 'men',
                    id: 1
                },
                {
                    name: 'Women',
                    color: 'FF6F80',
                    img: Women,
                    gender: 'women',
                    id: 2
                },
            ]
        }
    }
    render() {
        return (
        <>
            <section className="products-section">
                <div className="heading">
                    <h1 className='products-title'>Products</h1>
                    <p>Order it for you or for your beloved ones </p>
                </div>
                <div className="products">
                {this.state.products.map(({name, color, img, id}) => {
                    return (<div key={id}><ProductCard key={id} name={name} color={color} image={img}/> <div style={{height:'100px'}}></div></div>)
                })}
                </div>
            </section>
            <section className="category-section">
                <div class="heading">
                    <h1>Categories</h1>
                </div>
                <div className="category">
                {this.state.category.map(({name, color, img, gender, id}) => {
                    return (<div key={id}><ProductCard  name={name} color={color} image={img} gender={gender}/> <div style={{height:'100px'}}></div></div>)
                })}
                </div>
            </section>
        </>
    );
}
}

export default ProductsDirectory;