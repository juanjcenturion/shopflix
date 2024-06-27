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
                className="grid grid-cols-7 pt-6 mt-24 w-full max-h-7  mx-auto"
                handleOpenModal={handleOpenModal}
            />
            {isOpenModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center">
                    <span className="absolute inset-0 bg-black opacity-70 backdrop-blur-sm" onClick={handleCloseModal}></span>
                    <ModalProduct
                        ARRAY_IMGS={ARRAY_IMGS}
                        ARRAY_IMG_SMALL={ARRAY_IMG_SMALL}
                        isOpenModal={true}
                        className="relative grid grid-cols-8 place-items-center gap-2 max-w-2xl w-full p-6 pr-1 bg-white rounded-lg z-60"
                        handleCloseModal={handleCloseModal}
                    />
                </div>
            )}
        </>
    );
}
