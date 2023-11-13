import React, { createContext, useState } from "react";
import { popularProducts } from "../data";
// import Product from "../pages/Product";
// import Product from "../pages/Product";



export const ShopContext = createContext(null)

const getDefaultCart = () => {
    let cart = {}
    for (let i = 1; i < popularProducts.length + 1; i++) {
        cart[i] = 0
    }
    return cart
}



export const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart())

    // To add to cart
    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
    }

    // To remove from cart
    const removeCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + -1 }))
    }
    // console.log(cartItems)

    const updateCartItem = (newAmount, itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: newAmount }))
    }

    const getTotalAmount = () => {
        let totalAmount = 0
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = popularProducts.find((product) => product.id === Number(item))
                totalAmount += cartItems[item] * itemInfo.price
            }
        }
        return totalAmount
    }

    // Get the repetitive functions needed
    const contextValue = { cartItems, addToCart, removeCart, updateCartItem, getTotalAmount }

    return <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
}