import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { SearchResults } from "../../api/api";
import ProductCard from "../productcard/ProductCard";

const ProductList = () => {
    const [searchParams] = useSearchParams();
    const query = searchParams.get("search");
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchProducts = async () => {
            if (!query) return;
            setLoading(true);
            try {
                setTimeout(async () => {
                    const results = await SearchResults(query);
                    setProducts(results);
                    setLoading(false);
                }, 500);
            } catch (error) {
                setLoading(false);
            }
        };

        fetchProducts();
    }, [query]);

    return (
        <div className="container grid grid-col-1 pt-32 mx-auto">
            <div className="grid grid-cols-1 from-white to-indigo-200 bg-gradient-to-b border-neutral-100 border-t rounded-lg shadow-md">
                {loading ? (
                    <div className="flex justify-center items-center pb-24 pt-24 h-full">
                        <div className="loader"></div>
                    </div>
                ) : (
                    <div className="grid grid-cols-5 gap-4 pb-8 mt-10 ml-4 mr-4">
                        {products.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProductList;
