const CART_KEY = 'shopflix_cart';

export const getCart = () => {
    const cart = localStorage.getItem(CART_KEY);
    return cart ? JSON.parse(cart) : [];
};

export const addToCart = (productId, quantity = 1) => {
    const cart = getCart();
    const existingProductIndex = cart.findIndex(item => item.id === productId);

    if (existingProductIndex !== -1) {
        cart[existingProductIndex].quantity += quantity;
    } else {
        cart.push({ id: productId, quantity });
    }

    localStorage.setItem(CART_KEY, JSON.stringify(cart));
}


export const removeFromCart = (productId) => {
    let cart = getCart();
    cart = cart.filter(product => product.id !== productId);
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

export const clearCart = () => {
    localStorage.removeItem(CART_KEY);
}

export const getCartItemCount = () => {
    const cart = getCart();
    return cart.length;
}
