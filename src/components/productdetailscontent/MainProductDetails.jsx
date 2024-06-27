import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GetProductById, GetSellerById } from "../../api/api"; 
import { FaCircleArrowDown } from "react-icons/fa6";
import { FaCircleArrowUp } from "react-icons/fa6";
import ProductDetails from "../productdetails/ProductDetails";
import ProductGallery from "../productgallery/ProductGallery";
import ProductAttributes from "../productattributes/ProductAttributes";

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
        <div className="container mx-auto from-white to-indigo-100 mt-24 border rounded-lg bg-gradient-to-b px-3 pt-2">
            <div className="grid grid-cols-12">
                <div className="grid col-span-4">
                    <ProductGallery ARRAY_IMGS={images} ARRAY_IMG_SMALL={thumbnails} />
                </div>
                <div className="col-span-8 ml-8 pt-2">
                    <ProductDetails product={product} seller={seller} />
                </div>
            </div>
            <div className="flex flex-col items-center mt-4 w-full">
                <hr className="border-1 rounded-lg border-gray-300 my-3 w-full" />
                {showAttributes && (
                    <div className="w-full">
                        <ProductAttributes attributes={product.attributes} />
                    </div>
                )}
                <button
                    className="flex text-gray-400 px-4 pb-4 justify-center text-4xl hover:text-5xl hover:text-gray-500 transition-all ease-in-out duration-500 rounded mt-2"
                    onClick={() => setShowAttributes(!showAttributes)}
                >
                    {showAttributes ? <FaCircleArrowUp /> : <FaCircleArrowDown />}
                </button>
            </div>
        </div>
    );
};

export default MainProductDetails;
