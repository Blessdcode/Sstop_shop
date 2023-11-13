import React, {useState, createContext } from "react";
import { popularProducts } from "../data";

export const ShopContext = createContext(null)


const getDeafaultCart = () => {
    let cart = {}
    for (let i = 1; i < popularProducts.length + 1; i++) {
        cart[i] = 0
    }
    return cart
}


export const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDeafaultCart())

    // To add to cart
    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
    }

    // To remove from cart
    const removeCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + -1 }))
    }
    console.log(cartItems)

    const contextValue = { cartItems, addToCart, removeCart, updateCartItem, getTotalAmount }

    return <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
}