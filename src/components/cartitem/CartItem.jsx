import React from "react";
import { formatearNumero } from "../../utils/sepMiles";
import { useCart } from "../../context/cartContext";

const CartItem = ({  product }) => {
    const { removeFromCart, updateQuantityInCart } = useCart();
    
    const manageQuantityChange = (e) => {
        const newQuantity = parseInt(e.target.value, 10)

        if (newQuantity > 0) {
            updateQuantityInCart(product.product.id, newQuantity);
        };
    };
    
    return (
        <div className="ml-4 my-3 mr-7 border bg-white shadow-lg rounded-lg">
            <div className="grid grid-cols-12 py-4 px-4">
                <div className="grid col-span-1">
                    <img src={product.product.thumbnail} alt="" />
                </div>
                <div className="grid col-span-11">
                    <div className="grid grid-cols-12 grid-rows-2 mx-auto">
                        <div className="col-span-7 ml-3 pt-2">
                            <h3 className="font-bold truncate text-lg">{product.product.title}</h3>
                        </div>
                        <div className="col-span-3 pt-2 flex justify-center">
                        <input 
                                type="number"
                                min={1}
                                defaultValue={product.quantity} 
                                onChange={manageQuantityChange}
                                className="bg-gray-100 w-1/4 text-center focus:border-none border rounded shadow-sm "
                            />
                        </div>
                        <div className="col-span-2 ml-3 pt-2">
                            <p className="font-bold text-lg pr-5 text-right">{formatearNumero(product.product.price)}</p>
                        </div>
                        <div className="col-span-12 ml-3 pt-2">
                            <button onClick={() => removeFromCart(product.product.id)} className=" text-blue-700 pr-3">Eliminar</button>
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
    );
};

export default CartItem;
