// src/components/Product/ProductInfo.jsx
import { FaCartPlus } from "react-icons/fa";

import { formatearNumero } from "../../../utils/sepMiles";
import { getShippingMessage } from "../../../api/api";

export default function ProductDetails({ product }) {

  return (
    <section className="">
      <div className="container grid grid-cols-1 mx-0 pt-6 m-24 px-1">
        <div>
          <span className=" text-center bg-lime-500 text-gray-50 rounded-sm ">{product.shipping?.free_shipping ? "Envío gratis" : getShippingMessage(product.shipping?.mode)}</span>
          <span className="mr-auto rounded-md bg-neutral-500 py-1 px-2">{product.condition === 'new' ? 'Nuevo' : 'Usado'}</span>
          <p className="mb-3 font-bold uppercase text-indigo-500">
            {product.title} 
          </p>
          <h2 className="mb-4 text-sm text-slate-500 font-bold">
            {product.description || 'Descripción no disponible'}
          </h2>
          
          <p className="mb-4 text-zinc-500 bg-gray-600ish-blue">
            
          </p>
          <p className="grid items-center font-bold pt-5">
            <span className="text-3xl grid-cols-4">{formatearNumero(product.price)}</span>
            <span className="text-left text-xs col-span-2">{product.warranty}</span>
          </p>
          <div className="grid  pt-5 gap-4 grid-cols-3 ">
            <div className="col-span-1 bg-gray-200 flex items-baseline  rounded-md justify-between py-3 px-5 ">
              <button className="text-3x1 text-orange-600">-</button>
              <span>0</span>
              <button className="text-3x1 text-orange-600">+</button>
            </div>
            <button className="col-span-2 gap-x-3 text-white bg-indigo-500 rounded-md flex items-center justify-center transition-all hover:bg-yellow-400 py-3 px-5">
              <FaCartPlus className="text-black" />
              <span>Add to card</span>  
            </button>
          </div>
        </div>
        <div className="grid grid-cols-3 border-2rounded-lg  pl-5 ">
          
        </div>
      </div>
    </section>
  );
}
