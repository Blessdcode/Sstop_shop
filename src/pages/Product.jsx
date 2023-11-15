import React, { useContext } from 'react'
import { AiOutlineShoppingCart, AiOutlineSearch, AiFillHeart, } from 'react-icons/ai'
import { MdOpenInNew } from 'react-icons/md'
import { ShopContext } from '../context/shopContext'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Product = (props) => {
    const { id, name, price, img, dec, tag, off } = props.data

    const { addToCart, addToWish } = useContext(ShopContext)

    const handlerToCart = () => {
        addToCart(id);
        toast.success(`${name} has been added to the cart!!!`, {
            position: "top-left",
        });
    };
    const handlerToWish = () => {
        addToWish(id);
        toast.success(`${name} has been added to the WishList!!!`, {
            position: "top-left",
        });
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
                    <AiFillHeart onClick={handlerToWish}/>
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}

export default Product
