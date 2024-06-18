// src/components/Product/col-images/MainImages.jsx
import { useState } from "react";
import ProductSlide from "./ProductSlide";

export default function MainImages({ ARRAY_IMGS, ARRAY_IMG_SMALL }) {
    const [isOpenModal, setIsOpenModal] = useState(false);

    const handleOpenModal = () => {
        setIsOpenModal(true);
    };

    const handleCloseModal = () => {
        setIsOpenModal(false);
    };

    return (
        <>
            <ProductSlide
                ARRAY_IMGS={ARRAY_IMGS}
                ARRAY_IMG_SMALL={ARRAY_IMG_SMALL}
                isOpenModal={false}
                className="grid md:grid-cols-4 md:gap-4 pt-6 m-24"
                handleOpenModal={handleOpenModal}
            />
            {isOpenModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <ProductSlide
                        ARRAY_IMGS={ARRAY_IMGS}
                        ARRAY_IMG_SMALL={ARRAY_IMG_SMALL}
                        isOpenModal={true}
                        className="grid md:grid-cols-4 md:gap-4 absolute max-w-lg top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"
                        handleCloseModal={handleCloseModal}
                    />
                </div>
            )}
        </>
    );
}
