import React from 'react'
import SingleProduct from './SingleProduct'
import { popularProducts } from '../data'
import Product from '../components/Product';




const SingleProducts = () => {

    return (
        <div>
            {popularProducts.map((product) => (
                <SingleProduct item={product} key={product.id} />

            ))}
        </div>
    );
};


export default SingleProducts
