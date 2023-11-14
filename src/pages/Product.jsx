import React, { useContext } from 'react'
import { AiOutlineShoppingCart, AiOutlineSearch, AiFillHeart, } from 'react-icons/ai'
import { MdOpenInNew } from 'react-icons/md'
import { ShopContext } from '../context/shopContext'
import { toast } from 'react-hot-toast'


const Product = (props) => {
    const { id, name, price, img, dec, tag, off } = props.data

    const { addToCart } = useContext(ShopContext)

    const handlerToCart = () => {
        addToCart(id);
        window.alert(`${name} has been added to the cart!!!`)
    };


    return (
        <div className='product'>
            <div className="circle"></div>
            <img src={img} alt={name} className='Image' />
            {tag && <div className='Title'>{tag}</div>}
            {off && <div className='Title'>{off}</div>}
            <div className='Info'>
                <div className='Icon'>
                    <AiOutlineShoppingCart onClick={handlerToCart} />
                </div>
                <div className='Icon'>
                    <MdOpenInNew />
                </div>
                <div className='Icon'>
                    <AiFillHeart />
                </div>
            </div>

        </div>
    )
}

export default Product
