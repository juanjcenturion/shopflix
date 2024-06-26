import React, { createContext, useContext, useState } from "react";
import { getFav, addProductToFav, removeProductFromFav } from "../utils/favStorage";

const FavContext = createContext();

export const FavProvider = ({ children }) => {
    const [fav, setFav] = useState(getFav());

    const addToFav = (product) => {
        addProductToFav(product);
        alert('Producto añadido a Favoritos!')
        setFav(getFav());
    };

    const removeFromFav = (productId) => {
        removeProductFromFav(productId);
        alert('Producto eliminado de Favoritos!')
        setFav(getFav());
    };

    return (
        <FavContext.Provider value={{fav, addToFav, removeFromFav}}>
            {children}
        </FavContext.Provider>
    );
}

export const useFav = () => useContext(FavContext);