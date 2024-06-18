// src/components/Product/ProductInfo.jsx
import { FaCartPlus } from "react-icons/fa";

export default function ProductDetails() {
  return (
    <section className="container mx-auto pt-6 m-24 px-4">
      <p className="mb-3 font-bold uppercase text-orange-500">
      </p>
      <h2 className="mb-4 text-3x1 font-bold">
        Fall Limited Edition Sneakers
      </h2>
      <p className="mb-4 text-zinc-500 bg-gray-600ish-blue">
        These low-profile sneakers are your perfect casual wear
        companion. featuring a durable rubbrr outer sole, they 11
        wirshan evertichned the waherer can offer.
      </p>
      <p className="grid grid-cols-3 items-center font-bold pt-5">
        <span className="text-3xl grid-cols-4">2500000.00</span>
        <span className="mr-auto rounded-md bg-neutral-500 py-1 px-2">50%</span>
        <span className="text-left text-lg col-span-3">250.00</span>
      </p>
      <div className="grid  pt-5 gap-4 grid-cols-4 ">
        <div className="col-span-1 bg-gray-200 flex items-baseline  rounded-md justify-between py-3 px-5 ">
          <button className="text-3x1 text-orange-600">-</button>
          <span>0</span>
          <button className="text-3x1 text-orange-600">+</button>
        </div>
        <button className="col-span-3 gap-x-3 text-white bg-orange-500 rounded-md flex items-center justify-center transition-all hover:bg-orange-600 py-3 px-5">
          <FaCartPlus className="text-black" />
          <span>Add to card</span>  
        </button>
      </div>
    </section>
  );
}
