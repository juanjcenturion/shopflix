import React from "react";
import { formatearNumero } from "../../utils/sepMiles";
import { useCart } from "../../context/cartContext";

const ProductCard = ({ product }) => {
    const { addToCart } = useCart();

    return (
        <div className="border mb-2 rounded-lg shadow-md h-80 text-center cursor-pointer bg-white transition-transform ease-linear duration-100">
            <a className="mb-4 rounded-full hover:text-indigo-600">
                <img className="mt-8 mb-2 mx-auto max-h-20 max-w-20" src={product.thumbnail} alt={product.title} />
                <span className="text-corte-2 ml-2 pb-2 min-h-14 mr-2 text-left text-sm">{product.title}</span>
            </a>
            <div>
                <p className="mt-6 ml-2 text-2xl font-medium text-left">{formatearNumero(product.price)}</p>
            </div>
            {product.shipping?.free_shipping ? (
                <div className="text-green-500 ml-2 pb-4 text-left text-sm font-medium mt-2">
                    Envío gratis
                </div>
            ) : (
                <div className="text-gray-500 ml-2 mb-4 opacity-50 text-left text-sm font-medium mt-2">
                    Envío gratis no disponible
                </div>
            )}
            <div className="bg-yellow-300 py-3 mb-0 text-center rounded-b-lg mx-0 transition ease-in-out duration-500 hover:bg-indigo-400 hover:text-white">
                <button onClick={() => addToCart(product.id)} className="font-bold">
                    Añadir al carrito
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
