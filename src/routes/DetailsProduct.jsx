// src/routes/DetailsProduct.jsx
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GetProductById } from "../api/api";
import MainProductDetails from "../components/product/MainProductDetails";

export default function DetailsProduct() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (id) {
            GetProductById(id)
                .then(productData => {
                    setProduct(productData);
                    setLoading(false);
                })
                .catch(error => {
                    console.error("Error al obtener el producto:", error);
                    setError(error);
                    setLoading(false);
                });
        }
    }, [id]);

    if (loading) return <div>Cargando...</div>;
    if (error) return <div>Error al cargar el producto</div>;
    if (!product) return <div>Producto no encontrado</div>;

    return <MainProductDetails product={product} />;
}
