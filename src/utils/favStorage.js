const FAV_KEY = 'shopflix_fav'

export const getFav = () => {
    const fav = localStorage.getItem(FAV_KEY);
    return fav ? JSON.parse(fav) : [];
}

export const addProductToFav = (productId) => {
    const fav = getFav();
    const existingProductIndex = fav.findIndex(item => item.id === productId);

    fav.push({id: productId})

    localStorage.setItem(FAV_KEY, JSON.stringify(fav))
}

export const removeProductFromFav = (productId) => {
    let fav = getFav();
    fav = fav.filter(product => product.id !== productId)
    localStorage.setItem(FAV_KEY, JSON.stringify(fav))
}