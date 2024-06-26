import React, { useEffect, useState } from "react";
import { useCart } from "../../context/cartContext";
import { GetProductById } from "../../api/api";
import CartItem from "../cartitem/CartItem";
import CartSummary from "../cartsummary/CartSummary";

export default function CartContent() {
    const { cart, cartCount } = useCart();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            try {
                const productDetails = await Promise.all(
                    cart.map(async (item) => {
                        const product = await GetProductById(item.id);
                        return {product, quantity: item.quantity};
                    })
                );
                setProducts(productDetails);
                setLoading(false);
            } catch (error) {
                setLoading(false);
                console.error("Error fetching product details:", error);
            }
        };

        fetchProducts();
    }, [cart]);

    return (
        <div className="container pt-32 mx-auto">
            <div className="grid grid-cols-12 from-indigo-200 pb-4 pt-2 to-white bg-gradient-to-b rounded-lg border min-h-[720px] shadow-sm">
                {products.length === 0 ? (
                    <div className="col-span-12 pt-24">
                        <div className="flex justify-center col-span-12">
                            <svg viewBox="0 0 70 70" className=" flex justify-center max-h-44 max-w-44" xmlns="http://www.w3.org/2000/svg">
                                <g id="Circle">
                                    <circle cx="36" cy="32" fill="#facc15" r="30"/>
                                </g>
                                <g id="Color">
                                    <path d="m59.85 12.03v20l-1.56 2.19-3.13 1.69-38.06 5.81-.09-.49-5.12-28.95-.04-.25z" fill="#9e9ecc"/>
                                    <path d="m21.49 40.54-4.48.69-5.12-28.95h4.6z" fill="#e4e0fa"/>
                                    <path d="m54.91 12.28v18.43a4.9 4.9 0 0 1 -.91 2.84 5 5 0 0 1 -1.65 1.45l-2.13 1.15-28.73 4.39-5-28.26z" fill="#c9c1f5"/>
                                    <path d="m43.9 12a8.08 8.08 0 1 1 -8.08-8 8.07 8.07 0 0 1 8.08 8z" fill="#f47e86"/>
                                    <path d="m41 14.92a8 8 0 0 1 -.56 2.94 7.49 7.49 0 0 1 -.52 1.14 8.08 8.08 0 0 1 -11.08-11 7.49 7.49 0 0 1 1.16-.59 7.93 7.93 0 0 1 3-.57 8.08 8.08 0 0 1 8 8.08z" fill="#ffb4b4"/><path d="m41 14.92a8 8 0 0 1 -.56 2.94 7.84 7.84 0 0 1 -3 .57 8.08 8.08 0 0 1 -8.08-8.08 8 8 0 0 1 .64-2.94 7.93 7.93 0 0 1 3-.57 8.08 8.08 0 0 1 8 8.08z" fill="#ff9595"/><g fill="none"><circle cx="22.89" cy="56.42" r="3.64"/><circle cx="51.14" cy="56.42" r="3.64"/><circle cx="22.88" cy="56.41" r="3.64"/><circle cx="51.13" cy="56.41" r="3.64"/></g><path d="m26.66 56.41a3.62 3.62 0 0 1 -2.77 3.52 3.58 3.58 0 0 1 -.89.07 3.64 3.64 0 1 1 3.64-3.63z" fill="#9e9ecc"/><path d="m54.91 56.41a3.64 3.64 0 1 1 -3.64-3.64 3.62 3.62 0 0 1 3.64 3.64z" fill="#9e9ecc"/><path d="m24.36 58.16a3.52 3.52 0 0 1 -.47 1.77 3.58 3.58 0 0 1 -.89.07 3.62 3.62 0 0 1 -3.17-5.41 3.62 3.62 0 0 1 4.51 3.53z" fill="#c9c1f5"/><path d="m52.61 58.16a3.51 3.51 0 0 1 -.46 1.77 3.63 3.63 0 0 1 -4.52-3.52 3.61 3.61 0 0 1 .47-1.78 3.62 3.62 0 0 1 4.51 3.53z" fill="#c9c1f5"/></g><g id="Layer_2" fill="#616199" data-name="Layer 2"><path d="m60 49h-42.52c-4.76 0-4.76-2.19-4.76-3a2.48 2.48 0 0 1 1-1.84 5.75 5.75 0 0 1 3-1.13l.39-.07h.09l37.43-5.96a7.19 7.19 0 0 0 6.09-7.14v-17.86a1 1 0 0 0 -1-1h-14.84a9.07 9.07 0 0 0 -18 0h-14.38l-.72-4a4.81 4.81 0 0 0 -4.73-4h-3.33a1 1 0 1 0 0 2h3.33a2.81 2.81 0 0 1 2.76 2.3l6 33.83a7.57 7.57 0 0 0 -3.4 1.47 4.42 4.42 0 0 0 -1.69 3.4c0 1.87.88 5 6.76 5h42.52a1 1 0 0 0 0-2zm-24.14-44a7.08 7.08 0 1 1 -7.08 7 7.09 7.09 0 0 1 7.08-7zm-9 8.08a9.07 9.07 0 0 0 18 0h13.86v16.81a5.19 5.19 0 0 1 -4.41 5.16l-36.48 5.8-4.97-27.85z"/><path d="m22.92 51.77a4.64 4.64 0 1 0 4.64 4.63 4.64 4.64 0 0 0 -4.64-4.63zm0 7.27a2.64 2.64 0 1 1 2.64-2.64 2.64 2.64 0 0 1 -2.64 2.6z"/><path d="m51.17 51.77a4.64 4.64 0 1 0 4.64 4.63 4.64 4.64 0 0 0 -4.64-4.63zm0 7.27a2.64 2.64 0 1 1 2.64-2.64 2.64 2.64 0 0 1 -2.64 2.6z"/><path d="m31.94 15.89a1 1 0 0 0 1.41 0l2.44-2.44 2.44 2.44a1 1 0 0 0 .71.3 1 1 0 0 0 .71-1.71l-2.44-2.48 2.44-2.4a1 1 0 0 0 -1.42-1.41l-2.44 2.44-2.44-2.44a1 1 0 0 0 -1.41 0 1 1 0 0 0 0 1.41l2.44 2.4-2.44 2.44a1 1 0 0 0 0 1.45z"/>
                                </g>
                            </svg>
                        </div>
                        <div className="flex justify-center col-span-12">
                            <p className="text-center text-2xl font-bold pt-2 pb-8">
                                ¡Su carrito esta vacío!
                            </p>
                        </div>
                    </div>
                ) : (
                    <>
                        <div className="col-span-8">
                            {products.map(product => (
                                <CartItem key={product.product.id} product={product} />
                            ))}
                        </div>
                        <CartSummary products={products} />
                    </>
                )}
            </div>
        </div>
    );
}
