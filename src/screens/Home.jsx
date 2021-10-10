import React from 'react'
import products from '../products';
import Product from '../components/Product';

const Home = () => {
    return (
        <div className="home-screen container">
            {
                products.map((product) => (
                    <div className="" key={product._id}>
                        <Product product={product} />
                    </div>
                ))
            }
        </div>
    )
}

export default Home
