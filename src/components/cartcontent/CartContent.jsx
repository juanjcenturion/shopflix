import React, { useEffect, useState } from "react";
import { useCart } from "../../context/cartContext";
import { GetProductById } from "../../api/api";
import { formatearNumero } from "../../utils/sepMiles";
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
                        return product;
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
        <div className="container grid grid-cols-1 pt-32 mx-auto">
            <div className="grid grid-cols-12 from-indigo-200 pb-4 pt-2 to-white bg-gradient-to-b rounded-lg border shadow-sm">
                <div className="col-span-8">
                    {products.map(product => (
                        <CartItem key={product.id} product={product} />
                    ))}
                </div>
                <CartSummary cartCount={cartCount} />
            </div>
        </div>
    );
}
