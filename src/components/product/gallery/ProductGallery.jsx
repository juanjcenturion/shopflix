// src/components/Product/col-images/MainImages.jsx
import { useState } from "react";
import ProductSlide from "./ProductSlide";
import ModalProduct from "./ProductSlide";

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
                className="grid grid-cols-12 pt-6 mt-24 min-h-96 mx-auto"
                handleOpenModal={handleOpenModal}
            />
            {isOpenModal && (
                <div>
                    <div className="fixed inset-0 flex items-center justify-center z-10">
                        <ModalProduct
                            ARRAY_IMGS={ARRAY_IMGS}
                            ARRAY_IMG_SMALL={ARRAY_IMG_SMALL}
                            isOpenModal={true}
                            className="grid grid-cols-8 place-items-center gap-4 absolute max-w-2xl top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"
                            handleCloseModal={handleCloseModal}
                        />
                    </div>
                    <span className="absolute top-0 left-0 h-full w-full bg-[rgba(0,0,0,0.8)] backdrop-blur-sm"></span>
                </div>
            )}
        </>
    );
}
