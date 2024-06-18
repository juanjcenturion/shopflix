import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { SearchResults } from "../../api/api";
import { formatearNumero } from "../../utils/sepMiles";
import { useCart } from "../../context/cartContext";


export default function ProductList() {
    const [searchParams] = useSearchParams();
    const query = searchParams.get("search");
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const { addToCart } = useCart();

    useEffect(() => {
        const fetchProducts = async () => {
            if (!query) return;
            setLoading(true);
            try {
                setTimeout(async () => {
                    const results = await SearchResults(query);
                    setProducts(results);
                    setLoading(false);
                }, 500);
            } catch (error) {
                setLoading(false);
            }
        };

        fetchProducts();
    }, [query]);

    return (
        <div className="container grid grid-col-1 pt-32 mx-auto">
            <div className="grid grid-cols-1 from-white to-indigo-200 bg-gradient-to-b border-neutral-100 border-t rounded-lg shadow-md">
                {loading ? (
                    <div className="flex justify-center items-center pb-24 pt-24 h-full">
                        <div className="loader"></div>
                    </div>
                ) : (
                    <div className="grid grid-cols-5 gap-4 pb-8 mt-10 ml-4 mr-4">
                        {products.map(product => (
                            <div key={product.id} className="border mb-2 rounded-lg shadow-md h-80 text-center cursor-pointer bg-white transition-transform ease-linear duration-100">
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
                                    <button onClick={() => addToCart(product)} className="font-bold">
                                        Añadir al carrito
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
