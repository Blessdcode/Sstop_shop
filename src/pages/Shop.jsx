import React from 'react'
import { popularProducts } from '../data'
import Product from '../pages/Product'


const Shop = () => {
    return (
        
            <div className='products'>
                {popularProducts.map((product) => (
                    <Product data={product} key={product.id} />
                ))}
            </div>

    )
}

export default Shop
