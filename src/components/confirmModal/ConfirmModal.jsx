import { useCart } from "../../context/cartContext"
import { formatearNumero } from "../../utils/sepMiles"
import { useState } from "react"

const ConfirmModal = ({neto, onClose, products, envio}) => {
    const {cart, clearCart} = useCart()

    const confirmCompra = () => {
        clearCart();
        alert('Compra Realizada correctamente!')
    }

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-70">
            <div className="bg-white px-6 rounded-lg shadow-lg">
                <h3 className="font-bold text-lg py-4">Confirmación de Compra</h3>
                <hr className="pb-4" />
                    {products.map((product) =>(
                        <div className="grid grid-cols-8 mt-4 overflow-auto border shadow-sm rounded-lg">
                            <div className="col-span-1 flex py-4 justify-center align-middle">
                                <img src={product.product.thumbnail} alt="" />
                            </div>
                            <div className="col-span-4 flex justify-center align-middle items-center py-4 truncate font-bold">
                                {product.product.title}
                            </div>
                            <div className="col-span-3 flex justify-left px-16 items-center py-4">
                                <p>{product.quantity}</p>
                                <p className="pl-4">x</p>
                                <p className="px-4">{formatearNumero(product.product.price)}</p>
                            </div>
                        </div>
                    ))}
                <div className="grid grid-cols-8 my-8 py-2 border">
                    <div className="col-span-5 text-left px-8 flex items-center justify-start text-lg">
                        <p className="">Envío: </p>
                    </div>
                    <div className="col-span-3 text-right px-16 flex justify-start items-center text-lg">
                        {envio === 0 ? (
                            <p className="text-green-500  text-right">
                                Gratis
                            </p>
                        ) : (
                            <p className="font-semibold">{formatearNumero(envio)}</p>
                        )}
                    </div>
                    <div className="col-span-5 text-left mt-2 px-8 flex items-center justify-start text-xl">
                        <p className="font-bold">Total: </p>
                    </div>
                    <div className="col-span-3 text-right mt-2 px-16 flex justify-start items-center text-xl">
                        <p className="font-bold">{formatearNumero(neto)}</p>
                    </div>
                </div>
                <div className="grid grid-cols-8 my-6 mr-6">
                    <div className="col-span-4">
                        <button
                            className="bg-gray-500 w-full mr-6 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
                            onClick={onClose}
                        >
                            Cancelar
                        </button>
                    </div>
                    <div className="col-span-4">
                        <button
                            onClick={() => confirmCompra()}
                            className="bg-blue-500 w-full ml-6 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
                        >
                            Confirmar
                        </button>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default ConfirmModal