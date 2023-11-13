import React, { useContext } from 'react'
import { ShopContext } from '../context/shopeContext'


export const CartItem = (props) => {
    const { cartItems, addToCart, removeCart, updateCartItem } = useContext(ShopContext)
    const { id, productName, price, productImage } = props.data

    return (
        <div className='cartItem'>
            <img src={productImage} alt={productName} />
            <div className='description'>

                <h2>
                    {productName}
                </h2>
                <b><p className='price'>${price}</p></b>
                <div className="countHandler">
                    <button onClick={() => removeCart(id)} >-</button>

                    <input value={cartItems[id]} onChange={(e) => updateCartItem(Number(e.target.value), id)} />

                    <button onClick={() => addToCart(id)}>+</button>
                </div>
            </div>
        </div>
    )
}

