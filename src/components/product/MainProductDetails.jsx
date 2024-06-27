// MainProductDetails.jsx
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GetProductById, GetSellerById } from "../../api/api"; // Asegúrate de que aquí esté importado correctamente
import { FaCircleArrowDown } from "react-icons/fa6";
import { FaCircleArrowUp } from "react-icons/fa6";

import ProductDetails from "./details/ProductDetails";
import ProductGallery from "./gallery/ProductGallery";
import ProductAttributes from "./attributes/ProductAttributes";

const MainProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [images, setImages] = useState([]);
    const [thumbnails, setThumbnails] = useState([]);
    const [showAttributes, setShowAttributes] = useState(false);
    const [seller, setSeller] = useState(null);

    useEffect(() => {
        const fetchProductAndSellerData = async () => {
            try {
                const productData = await GetProductById(id);
                setProduct(productData);
                if (productData?.pictures) {
                    const largeImages = productData.pictures.map(picture => picture.secure_url);
                    const smallImages = productData.pictures.map(picture => picture.thumbnail || picture.secure_url);
                    setImages(largeImages);
                    setThumbnails(smallImages);
                }
                const sellerData = await GetSellerById(productData.seller_id);
                setSeller(sellerData);
                setLoading(false);
            } catch (error) {
                console.error("Error al obtener el producto o vendedor:", error);
                setError(error);
                setLoading(false);
            }
        };

        if (id) {
            fetchProductAndSellerData();
        }
    }, [id]);

    if (loading) return <div>Cargando...</div>;
    if (error) return <div>Error al cargar el producto</div>;
    if (!product) return <div>Producto no encontrado</div>;

    return (
        <main className="container mx-auto from-indigo-200 to-white bg-gradient-to-b p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <ProductGallery ARRAY_IMGS={images} ARRAY_IMG_SMALL={thumbnails} />
                <ProductDetails product={product} seller={seller} />
            </div>
            <div className="flex flex-col items-center mt-4 w-full">
                <hr className="border-1 rounded-lg border-gray-300 my-3 w-full" />
                {showAttributes && (
                    <div className="w-full">
                        <ProductAttributes attributes={product.attributes} />
                    </div>
                )}
                <button
                    className="flex bg-slate-500 hover:bg-blue-500 text-white py-2 px-4 justify-center rounded mt-4 w-full"
                    onClick={() => setShowAttributes(!showAttributes)}
                >
                    {showAttributes ? <FaCircleArrowUp /> : <FaCircleArrowDown />}
                </button>
            </div>
        </main>
    );
};

export default MainProductDetails;
