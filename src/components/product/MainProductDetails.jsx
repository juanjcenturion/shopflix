// src/components/Product/MainProductDetails.jsx
import { useEffect, useState } from "react";
import ProductDetails from "./col-details/ProductDetails";
import MainImages from "./col-images/MainImages";

const MainProductDetails = ({ product }) => {
    const [images, setImages] = useState([]);
    const [thumbnails, setThumbnails] = useState([]);

    useEffect(() => {
        if (product && product.pictures) {
            const largeImages = product.pictures.map(picture => picture.secure_url);
            const smallImages = product.pictures.map(picture => picture.thumbnail || picture.secure_url);
            setImages(largeImages);
            setThumbnails(smallImages);
        }
    }, [product]);

    if (!product) return <div>Producto no encontrado</div>;

    return (
        <main className="grid grid-cols-1 gap-8 md:grid-cols-2 container">
            <MainImages ARRAY_IMGS={images} ARRAY_IMG_SMALL={thumbnails} />
            <ProductDetails product={product} />
        </main>
    );
};

export default MainProductDetails;
