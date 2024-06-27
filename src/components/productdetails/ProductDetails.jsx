import { useState } from "react";
import { Link } from "react-router-dom";
import { formatearNumero } from "../../utils/sepMiles";
import { formatoPrecioEnCuotas } from "../../utils/installmentPrice";
import { addToCart } from "../../utils/cartStorage";

export default function ProductDetails({ product, seller }) {
  const [quantity, setQuantity] = useState(1);

  const manageQuantityChange = (e) => {
      const newQuantity = parseInt(e.target.value, 10);
      setQuantity(newQuantity);
  };

  const BuyNow = () => {
    addToCart(product.id, quantity);
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
      <div className="container mx-0 pt-6">
        <div className="grid grid-cols-12">
          <div className="grid col-span-7">
            <div className="grid col-span-12">
              <a className="text-blue-500 hover:text-blue-700">Ver más productos</a>
              <span className="text-lg pt-2 text-gray-500 font-semibold">{product.condition === 'new' ? 'Nuevo' : 'Usado'}</span>
              <p className="font-bold uppercase pt-4 text-gray-600">
                {product.title} 
              </p>
              <div className="flex items-center pb-3">
                <svg className="h-5 w-5 flex-shrink-0  text-yellow-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
                </svg>
                <svg className="h-5 w-5 flex-shrink-0 text-yellow-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
                </svg>
                <svg className="h-5 w-5 flex-shrink-0 text-yellow-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
                </svg>
                <svg className="h-5 w-5 flex-shrink-0 text-yellow-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
                </svg>
                <svg className="h-5 w-5 flex-shrink-0 text-gray-300" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            <div className="col-span-12">
              <span className="text-3xl font-bold">{formatearNumero(product.price)}</span>
              <p className="text-left text-xs text-gray-500 pt-1">{product.warranty}</p>
              <h2 className=" pb-10 pt-8 pr-10 text-sm text-slate-500 descripcion-producto">
                {description}
              </h2>
            </div>
          </div>
          <div className="col-span-5 border py-4 bg-white shadow-md rounded-lg">
            <h5 className="grid pl-4 pt-3 text-gray-500">1 Pago</h5>
            <span className="text-2xl pt-2 pl-4">{formatearNumero(product.price)}</span>
            <p className="grid pl-4 text-sm pt-1 text-slate-600">Este Producto es vendido por {seller.nickname}</p>
            <p className="grid pl-4 text-sm pt-1 text-slate-600">Reputacion del vendedor {seller.seller_reputation.power_seller_status}</p>           
            <hr className="border-1 mx-2 border-gray-200 my-4" />
            <div>
                <h5 className="grid pl-4 pt-3 text-gray-500">En cuotas</h5>
                <span className="text-2xl pt-2 pl-4">{formatearNumero(product.price)}</span>
                <h2 className="grid pl-4 text-md pt-1 text-green-500 text-sm">{formatoPrecioEnCuotas(product.price, 12)}</h2>
            </div>
            <hr className="border-1 border-gray-300 my-4" />
            <div>
                {product.shipping.free_shipping && (
                  <div className=" pl-3 pt-2 pb-2">
                    <div className="flex items-center">
                        <span className="text-green-500 font-bold mr-1">Envío Gratis</span>
                        <p className="font-medium flex justify-start">a todo el pais</p>
                    </div>
                    <p className="grid text-sm pt-3 text-gray-500">Conoce los tiempos y las formas de envio.</p>
                    <p className=" text-blue-500 hover:text-blue-700 text-sm ">Calcular cuándo llega</p>
                  </div>
                )}
            </div>
            <hr className="border-1 border-gray-300 my-4" />
            <div className="pl-3">
                <span className="font-bold text-gray-600">{product.status === 'active' ? 'Stock disponible' : 'Producto no disponible'}</span>
            </div>
                {product.status === "active" ? (
                  <div className="pl-3 mt-8">
                    <span className="pr-4 text-gray-600">Cantidad</span>
                      <input 
                      type="number"
                      min={1}
                      value={quantity}
                      onChange={manageQuantityChange}
                      className="bg-gray-100 w-1/4 text-center focus:border-none border rounded shadow-sm "
                    />
                    </div>
                ):(
                  <div className="pl-3 mt-8">
                    <span className="pr-4 opacity-50 line-through text-gray-600">Cantidad</span>
                    <input 
                      type="number"
                      disabled
                      value={0}
                      className="bg-gray-100 opacity-50 line-through w-1/4 text-center focus:border-none border rounded shadow-sm "
                    />
                  </div>
                )}
                
            
            <div className="pt-4 pb-2 mx-2 mt-6 flex-row justify-center align-middle items-center">
              <button onClick={()=> addToCart(product.id, quantity)} className="w-full text-black font-bold bg-yellow-400 rounded-md flex items-center justify-center  transition-all hover:bg-indigo-400 hover:text-white py-3">
                <span>Agregar Al Carrito</span>  
              </button>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
