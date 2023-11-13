import { useContext } from "react";
import { ShopContext } from '../context/shopeContext'
import { popularProducts } from "../data";
import { CartItems } from './CartItems'



const Cart = () =>{
    const { cartItems, getTotalAmount } = useContext(ShopContext)
    return(
        <div  className='cartItems'>
        {popularProducts.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItems data={product} />
          }
        })}
      </div>
    )
}

export default Cart
