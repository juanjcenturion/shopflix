import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GetProductById } from "../../api/api";
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
    const [showAttributes, setShowAttributes] = useState(false); // Estado para la visibilidad de atributos

    useEffect(() => {
        if (id) {
            GetProductById(id)
                .then(productData => {
                    setProduct(productData);
                    if (productData && productData.pictures) {
                        const largeImages = productData.pictures.map(picture => picture.secure_url);
                        const smallImages = productData.pictures.map(picture => picture.thumbnail || picture.secure_url);
                        setImages(largeImages);
                        setThumbnails(smallImages);
                    }
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

    return (
        <main className="container mx-auto">
            <ProductGallery ARRAY_IMGS={images} ARRAY_IMG_SMALL={thumbnails} />
            <ProductDetails product={product} />
            <div className="col-span-2  ">
                <button 
                    className="bg-blue-500 text-white py-2 px-4 w-full rounded mt-4"
                    onClick={() => setShowAttributes(!showAttributes)}
                >
                    {showAttributes ? 'Ocultar atributos del producto' : 'Ver atributos del producto'}
                </button>
                {showAttributes && (
                    <div className="mt-4">
                        <ProductAttributes attributes={product.attributes} />
                    </div>
                )}
            </div>
        </main>
    );
};

export default MainProductDetails;