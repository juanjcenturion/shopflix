import { useState } from "react";
import { FaCartPlus } from "react-icons/fa";

import { formatearNumero } from "../../../utils/sepMiles";
import { formatoPrecioEnCuotas } from "../../../utils/installmentPrice";
import { addToCart } from "../../../utils/cartStorage";

export default function ProductDetails({ product, seller }) {

  const [quantity, setQuantity] = useState(1);

  const manageQuantityChange = (e) => {
      const newQuantity = parseInt(e.target.value, 10);
      setQuantity(newQuantity);
  };

  const maxLength = 700; // Longitud máxima deseada antes de cortar
  let description = product.description || 'Descripción no disponible';

  // Si la descripción es más larga que la longitud máxima, corta en el primer punto que encuentra
  if (description.length > maxLength) {
      const indexOfDot = description.indexOf('.', maxLength);
      if (indexOfDot !== -1) {
          description = description.substring(0, indexOfDot + 1); 
      } else {
          description = description.substring(0, maxLength) + '...';
      }
  }

  return (
    <section className="">
      <div className="container mx-0 pt-6 m-24 px-1">
        <div className="grid grid-cols-2">
          <div className="grid col-span-1">
            <a href="" >
              <p className=" text-blue-700">ver mas productos</p>
            </a>
            <span className="pt-3">{product.condition === 'new' ? 'Nuevo' : 'Usado'}</span>
            <p className="mb-3 pt-3 font-bold uppercase text-black">
            {product.title} 
          </p>
          <div className="flex items-center">

                      <svg className="h-5 w-5 flex-shrink-0  text-gray-900" viewBox="0 0 20 20" fill="dodgerblue" aria-hidden="true">
                        <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
                      </svg>
                      <svg className="h-5 w-5 flex-shrink-0 text-gray-900" viewBox="0 0 20 20" fill="dodgerblue" aria-hidden="true">
                        <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
                      </svg>
                      <svg className="h-5 w-5 flex-shrink-0 text-gray-900" viewBox="0 0 20 20" fill="dodgerblue" aria-hidden="true">
                        <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
                      </svg>
                      <svg className="h-5 w-5 flex-shrink-0 text-gray-900" viewBox="0 0 20 20" fill="dodgerblue" aria-hidden="true">
                        <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
                      </svg>
                      <svg className="h-5 w-5 flex-shrink-0 text-gray-900" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
                      </svg>
                    </div>
          <span className="text-3xl grid-cols-4 pt-3">{formatearNumero(product.price)}</span>
          <p className="font-bold pt-1">
              <span className="text-left text-xs col-span-2 mx-auto">{product.warranty}</span>
            </p>
          <h2 className="mb-3 pr-7 pt-3 text-sm text-slate-500 font-bold descripcion-producto">
            {description}
          </h2>
          </div>
          <div className="grid border border-sky-500 rounded-lg">
            <h5 className="grid pl-3 pt-3">1 Pago</h5>
            <div>
                <span className="text-2xl pl-4">{formatearNumero(product.price)}</span>
                <p className="grid pl-4 text-sm pt-1 text-slate-600">Este Producto es vendido por {seller.nickname}</p>
                <p className="grid pl-4 text-sm pt-1 text-slate-600">Reputacion del vendedor {seller.seller_reputation.power_seller_status}</p>
            </div>
            <hr className="border-1 border-gray-300 my-4" />
            <div className="">
                <h5 className="grid pl-3 pt-3">En cuotas</h5>
                <span className="text-2xl pl-4">{formatearNumero(product.price)}</span>
                <h2 className="grid pl-4 text-md pt-1 text-lime-500 font-normal ">{formatoPrecioEnCuotas(product.price, 12)}</h2>
            </div>
            <hr className="border-1 border-gray-300 my-4" />
            <div>
                {product.shipping.free_shipping && (
                  <div className=" pl-3 pt-3">
                    <div className="flex items-center">
                        <span className="text-lime-500 font-bold mr-2">Envío Gratis</span>
                        <p className="font-medium flex justify-start">a todo el pais</p>
                    </div>
                    <p className="grid text-sm pt-1 text-slate-600">Conoce los tiempos y las formas de envio.</p>
                    <p className=" text-blue-700 text-sm ">Calcular cuándo llega</p>
                  </div>
                )}
            </div>
            <hr className="border-1 border-gray-300 my-4" />
            <div className="pl-3 pt-3">
                <span className="font-bold">{product.status === 'active' ? 'Stock disponible' : 'Producto no disponible'}</span>
            </div>
            <div className="pl-3 pt-3">
                <span className="pr-4">Cantidad</span>
                <input 
                                type="number"
                                min={1}
                                value={quantity}
                                onChange={manageQuantityChange}
                                defaultValue={1}
                                className="bg-gray-100 w-1/4 text-center focus:border-none border rounded shadow-sm "
                            />
            </div>
            <div className="pt-3 gap-4 pb-2">
              <div className="flex items-baseline  rounded-md justify-between py-1 px-5 ">
              </div>
              <button className="w-80 gap-x-4 text-white bg-indigo-500 rounded-md flex items-baseline  justify-center transition-all hover:bg-yellow-400 py-3 mx-auto">
                <span>Comprar ahora</span>  
              </button>
                <div className="pt-3">
                  <button onClick={addToCart(product.id, )} className="w-80 gap-x-4 text-white bg-indigo-500 rounded-md flex items-baseline  justify-center transition-all hover:bg-yellow-400 py-3 mx-auto">
                    <FaCartPlus className="text-black" />
                    <span>Agregar Al Carrito</span>  
                  </button>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
