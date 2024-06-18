

const CART_KEY = 'shopflix_cart';

export const getCart = () => {
    const cart = localStorage.getItem(CART_KEY)
    return cart ? JSON.parse(cart) : [];
};

export const addToCart = (product) => {
    const cart = getCart();
    cart.push(product);
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

export const removeFromCart = (productId) => {
    let cart = getCart();
    cart = cart.filter(product => product.id !== productId);
    localStorage.setItem(CART_KEY, JSON.stringify(cart))
}

export const clearCart = () => {
    localStorage.removeItem(CART_KEY)
}