import React, { useEffect, useState } from "react";
import { useFav } from "../../context/favContext";
import { GetProductById } from "../../api/api";
import FavItem from "../favitem/FavItem";
import { getFav } from "../../utils/favStorage";

export default function FavContent() {
    const fav = getFav()
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            try {
                const productsDetails = await Promise.all(
                    fav.map(async (item) =>{
                        const product = await GetProductById(item.id);
                        return product;
                    })
                );
                setProducts(productsDetails);
                setLoading(false);
            } catch (error) {
                setLoading(false);
                console.error("Error fetching products: ", error)
            }
        }

        fetchProducts();
    },[fav]);

    return(
        <div className="container grid grid-cols-1 pt-32 mx-auto">
            <h1 className="text-2xl font-bold pb-4 pl-2">Favoritos</h1>
            <div className="grid grid-cols-12 from-indigo-200 pb-4 pt-2 to-white bg-gradient-to-b rounded-lg border shadow-sm">
                {products.length === 0 ? (
                    <>
                    <div className="flex justify-center col-span-12">
                        <svg viewBox="0 0 512 512" className=" flex justify-center max-h-44 max-w-44"  xmlns="http://www.w3.org/2000/svg">
                            <path d="m512 256c0 141.386719-114.613281 256-256 256s-256-114.613281-256-256 114.613281-256 256-256 256 114.613281 256 256zm0 0" fill="#ffed93"/>
                                <path d="m512 256c0-14.148438-1.167969-28.023438-3.375-41.550781l-88.074219-88.074219c-9.429687-10.734375-20.605469-18.660156-32.949219-22.839844-44.84375-15.1875-76.710937-2.851562-97.84375 14.359375l-13.109374 53.789063-44.824219-44.996094c-20.566407-21.199219-55.195313-40.839844-107.425781-23.152344-67.925782 23.003906-100.574219 159.273438-.445313 254.339844l153.246094 153.246094c131.464843-10.78125 234.800781-120.875 234.800781-255.121094zm0 0" fill="#ffe031"/>
                                <path d="m246.347656 311.183594 11.796875-79.371094h-23.597656l10.949219-88.300781c-16.796875-24.671875-54.746094-62.449219-121.097656-39.976563-87.800782 29.734375-116.660157 248.707032 123.984374 323.335938l15.125-115.6875zm0 0" fill="#ff0133"/>
                                <path d="m387.597656 103.535156c-44.839844-15.1875-76.707031-2.851562-97.84375 14.355469l-24.101562 98.90625h24.667968l-20.378906 81.6875h26.816406l-41.503906 130.460937c.25.070313.492188.148438.746094.21875 248.867188-72.320312 220.320312-295.582031 131.597656-325.628906zm0 0" fill="#e30015"/>
                        </svg>
                    </div>
                    <div className="flex justify-center col-span-12">
                            <p className="text-center text-2xl font-bold pt-2 pb-8">
                                ¡No contiene favoritos!
                            </p>
                        </div>
                    </>
                ) : (
                    <>
                    <div className="col-span-12">
                        {products.map(product => (
                            <FavItem key={product.id} product={product}/>
                        ))}
                    </div>
                    </>
                )}
            </div>
        </div>
    )
}