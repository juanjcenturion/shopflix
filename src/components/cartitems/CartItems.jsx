import { useEffect, useState } from "react";
import { useCart } from "../../context/cartContext";
import { GetProductById } from "../../api/api";
import { formatearNumero } from "../../utils/sepMiles";

export default function CartItems() {
    const { cart } = useCart();
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
                        <div key={product.id} className="ml-4 my-3 mr-7 border bg-white shadow-lg rounded-lg">
                            <div className="grid grid-cols-12 py-4 px-4">
                                <div className="grid col-span-1">
                                    <img src={product.thumbnail} alt="" />
                                </div>
                                <div className="grid col-span-11">
                                    <div className="grid grid-cols-12 grid-rows-2 mx-auto">
                                        <div className="col-span-7 ml-3 pt-2">
                                            <h3 className="font-bold truncate text-lg">{product.title}</h3>
                                        </div>
                                        <div className="col-span-3 pt-2 flex justify-center">
                                            <input type="number" defaultValue={0} className="bg-gray-100 w-1/4 text-center focus:border-none border rounded shadow-sm "/>
                                        </div>
                                        <div className="col-span-2 ml-3 pt-2">
                                            <p className="font-bold text-lg pr-5 text-right">{formatearNumero(product.price)}</p>
                                        </div>
                                        <div className="col-span-12 ml-3 pt-2">
                                            <button className=" text-blue-700 pr-3">Eliminar</button>
                                            <button className="text-blue-700 pr-3 pl-3">Guardar</button>
                                            <button className="text-blue-700 pr-3 pl-3">Comprar Ahora</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="grid col-span-12">
                                    <div className="grid pt-2 ml-2 text grid-cols-12">
                                        <div className="col-span-12">
                                            <hr />
                                        </div>
                                        <div className="col-span-12 mt-4 flex justify-between">
                                            <h3 className="text-lg">Envío</h3>
                                            {product.shipping?.free_shipping ? (
                                                <div className="text-green-500 ml-2 pb-4 text-left text-lg font-medium">
                                                    Gratis
                                                </div>
                                            ) : (
                                                <div className="text-gray-500 mr-5 mb-4 opacity-50 text-left text-lg font-medium">
                                                    Envío gratis no disponible
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="col-span-4 mt-3 mr-4 shadow-lg rounded-lg min-h-96 max-h-96 bg-white">
                    <h3 className="font-bold ml-3 text-lg pt-4 text-center">Resumen de Compra</h3>
                    <hr className="mx-4 mt-2"/>
                </div>
            </div>
        </div>
    );
}