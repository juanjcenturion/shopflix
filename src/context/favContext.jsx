import React, { createContext, useContext, useState } from "react";
import { getFav, addProductToFav, removeProductFromFav } from "../utils/favStorage";

const FavContext = createContext();

export const FavProvider = ({ children }) => {
    const [fav, setFav] = useState(getFav());

    const addToFav = (product) => {
        addProductToFav(product);
        setFav(getFav());
    };

    const removeFromFav = (productId) => {
        removeProductFromFav(productId);
        setFav(getFav());
    };

    return (
        <FavContext.Provider value={{fav, addToFav, removeFromFav}}>
            {children}
        </FavContext.Provider>
    );
}

export const useFav = () => useContext(FavContext);