import { useState, useEffect } from "react";
import { fetchSelectedProducts } from "../../api/api";
import { formatearNumero } from "../../utils/sepMiles";
import { Link } from "react-router-dom";

export default function SelectedProducts () {
    const [products, setProducts] = useState([]);

    useEffect (()=>{
        const fixedSelectedProductsId = ["MLA1121239971","MLA1721779068","MLA1100597209", "MLA1750142952","MLA924354263","MLA1396593241"];

        fetchSelectedProducts(fixedSelectedProductsId)
            .then(allProducts =>{
                setProducts(allProducts)
            })
            .catch(error => {
                console.error('Error al obtener los productos:', error);
            })
    }, []);

    return (
        <div className="container grid grid-cols-1 pt-12 mx-auto">
            <div className="grid grid-cols-1 from-white to-indigo-200 bg-gradient-to-b border-neutral-100 border-t rounded-lg shadow-md">
                <h4 className='pb-5 mx-4 pt-4 text-xl uppercase font-bold'>Productos para vos</h4>
                <div className="grid grid-cols-6 gap-4 pb-8 ml-4 mr-4">
                    {products.map(product => (
                        <div key={product.id} className="bg-white border pb-10 rounded-lg shadow-md px-4 text-center cursor-pointer transition-transform ease-linear duration-100s">
                            <Link to={`/details_product/${product.id}`} className=" mb-4 rounded-full hover:text-indigo-600">
                                <img className="mt-8 mb-2 mx-auto" src={product.thumbnail} alt={product.title} />
                                <a className="text-corte-2 text-left text-sm"  > {product.title} </a>
                            </Link>
                            <div className="">
                                <p className="ml-1 mt-3 text-2xl font-medium text-left">{formatearNumero(product.price)}</p>
                            </div>
                            {product.shipping?.free_shipping ? (
                                <div className="text-green-500 text-left text-sm ml-1 font-medium mt-3">
                                    Envío gratis
                                </div>
                            ) : 
                            <div className="text-gray-500 opacity-50 text-left text-sm ml-1 font-medium mt-2">
                                    Envío gratis no disponible
                            </div>
                            }
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}