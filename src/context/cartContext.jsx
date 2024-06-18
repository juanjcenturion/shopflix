import React, { createContext, useContext, useState } from "react";
import { getCartItemCount, getCart, addToCart as addProductToCart, removeFromCart as removeProductFromCart, clearCart as clearShoppingCart } from "../utils/cartStorage";


const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(getCart());

    const addToCart = (product) => {
        addProductToCart(product);
        setCart(getCart());
    };

    const removeFromCart = (productId) => {
        removeProductFromCart(productId);
        setCart(getCart());
    };

    const clearCart = () => {
        clearShoppingCart();
        setCart([]);
    };

    const cartCount = cart.length;

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, cartCount }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
