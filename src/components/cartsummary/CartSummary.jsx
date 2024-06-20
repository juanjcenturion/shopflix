import React from "react";
import { useCart } from "../../context/cartContext";
import { formatearNumero } from "../../utils/sepMiles";

const CartSummary = ({ products }) => {
    const { cart, cartCount } = useCart();
    
    const bruto = products.reduce((total, product) => {
        const totalPorProducto = product.product.price * product.quantity;
        return total + totalPorProducto;
    }, 0);

    const envioValueStandard = 6900
    
    const neto = bruto + envioValueStandard

    return (
        <div className="col-span-4 mt-3 mr-4 shadow-lg rounded-lg min-h-96 max-h-96 bg-white">
            <h3 className="font-bold ml-3 text-lg pt-4 text-center">Resumen de Compra</h3>
            <hr className="mx-4 mt-2"/>
            <div className="grid grid-cols-12">
                <div className="col-span-6 mx-4 mt-6">
                    <p>Productos ({cartCount})</p>
                </div>
                <div className="col-span-6 mx-4 text-right mt-6">
                     <p className="font-semibold">{formatearNumero(bruto)}</p>
                </div>
                <div className="col-span-6 mx-4 mt-6">
                    <p>Envío</p>
                </div>
                <div className="col-span-6 mx-4 text-right mt-6">
                    <p className="font-semibold">{formatearNumero(envioValueStandard)}</p>
                </div>
                <div className="col-span-12 mx-4 mt-6">
                    <p className=" text-blue-500 font-semibold flex hover:text-blue-600 cursor-pointer ">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <mask id="path-1-inside-1_3259_82551" fill="white">
                                <path d="M0.5 5.4C0.5 4.07452 1.57452 3 2.9 3H21.1C22.4255 3 23.5 4.07452 23.5 5.4V8.35526C23.5 8.9664 23.0407 9.47992 22.4333 9.54783L21.8337 9.61486C18.9893 9.93287 18.9893 14.0671 21.8337 14.3851L22.4333 14.4522C23.0407 14.5201 23.5 15.0336 23.5 15.6447V18.6C23.5 19.9255 22.4255 21 21.1 21H2.9C1.57452 21 0.5 19.9255 0.5 18.6V5.4Z">
                                </path>
                            </mask>
                            <path d="M21.8337 14.3851L21.6671 15.8759L21.8337 14.3851ZM22.4333 14.4522L22.2667 15.9429L22.4333 14.4522ZM22.4333 9.54783L22.2667 8.05711L22.4333 9.54783ZM2.9 4.5H21.1V1.5H2.9V4.5ZM21.1 19.5H2.9V22.5H21.1V19.5ZM2 18.6V5.4H-1V18.6H2ZM22 5.4V8.35526H25V5.4H22ZM22 15.6447V18.6H25V15.6447H22ZM22.2667 8.05711L21.6671 8.12415L22.0004 11.1056L22.6 11.0385L22.2667 8.05711ZM21.6671 15.8759L22.2667 15.9429L22.6 12.9615L22.0004 12.8944L21.6671 15.8759ZM21.6671 8.12415C17.0448 8.64092 17.0448 15.3591 21.6671 15.8759L22.0004 12.8944C21.6709 12.8576 21.4991 12.7289 21.3976 12.604C21.2802 12.4597 21.2004 12.2462 21.2004 12C21.2004 11.7538 21.2802 11.5403 21.3976 11.396C21.4991 11.2711 21.6709 11.1424 22.0004 11.1056L21.6671 8.12415ZM25 15.6447C25 14.2697 23.9666 13.1142 22.6 12.9615L22.2667 15.9429C22.1148 15.9259 22 15.7975 22 15.6447H25ZM22 8.35526C22 8.20247 22.1148 8.07409 22.2667 8.05711L22.6 11.0385C23.9666 10.8858 25 9.73034 25 8.35526H22ZM2.9 19.5C2.40294 19.5 2 19.0971 2 18.6H-1C-1 20.7539 0.74609 22.5 2.9 22.5V19.5ZM21.1 22.5C23.2539 22.5 25 20.7539 25 18.6H22C22 19.0971 21.5971 19.5 21.1 19.5V22.5ZM21.1 4.5C21.5971 4.5 22 4.90294 22 5.4H25C25 3.24609 23.2539 1.5 21.1 1.5V4.5ZM2.9 1.5C0.746089 1.5 -1 3.24609 -1 5.4H2C2 4.90294 2.40294 4.5 2.9 4.5V1.5Z" fill="#3483FA" mask="url(#path-1-inside-1_3259_82551)"></path><path d="M14.769 10.4849L12.3812 10.2938C12.2856 10.2938 12.1901 10.2301 12.1583 10.1346L11.2668 7.90594C11.0439 7.36469 10.3117 7.36469 10.0888 7.90594L9.19731 10.1346C9.16547 10.2301 9.06996 10.2938 8.97444 10.2938L6.58656 10.453C6.01347 10.4849 5.7906 11.2171 6.23634 11.5674L8.05113 13.0956C8.11481 13.1593 8.14664 13.2548 8.14664 13.3503L7.54172 15.7064C7.41436 16.2476 8.01929 16.6933 8.49687 16.4068L10.5345 15.1333C10.63 15.0696 10.7256 15.0696 10.8211 15.1333L12.8587 16.4068C13.3363 16.6933 13.9412 16.2794 13.8139 15.7064L13.209 13.3821C13.1771 13.2866 13.209 13.1911 13.3045 13.1274L15.1511 11.5674C15.565 11.2171 15.3421 10.5167 14.769 10.4849Z" fill="#3483FA">
                            </path>
                        </svg>
                        <p className="ml-2">
                        Ingrese código de cupón
                        </p>
                    </p>
                </div>
                <div className="col-span-6 mx-4 mt-8">
                    <p className="font-semibold text-lg">Total</p>
                </div>
                <div className="col-span-6 mx-4 text-right mt-8">
                    <p className="font-semibold text-lg">{formatearNumero(neto)}</p>
                </div>
                <div className="col-span-12 flex justify-center bg-blue-500 rounded-md shadow-md py-4 mx-4 mt-10">
                    <button className="font-bold text-white">Continuar compra</button>
                </div>
            </div>
        </div>
    );
};

export default CartSummary;
