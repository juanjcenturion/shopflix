import { useEffect, useRef, useState } from "react";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

export default function ProductSlide({
    ARRAY_IMGS = [],
    ARRAY_IMG_SMALL = [],
    isOpenModal = false,
    handleCloseModal = null,
    handleOpenModal = null,
    ...props
}) {
    const btnSlider = useRef(null);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (isOpenModal && btnSlider.current) {
            btnSlider.current.classList.remove('md:hidden');
        }
    }, [isOpenModal]);

    const handleClickNext = () => {
        setIndex((prevIndex) => (prevIndex === ARRAY_IMGS.length - 1 ? 0 : prevIndex + 1));
    };

    const handleClickPrev = () => {
        setIndex((prevIndex) => (prevIndex === 0 ? ARRAY_IMGS.length - 1 : prevIndex - 1));
    };

    return (
        <section className="grid grid-cols-12" {...props}>
            {isOpenModal && (
                <div className="col-span-12 mr-5 w-[650px]">
                    <div className="col-span-12">
                        <div className="flex justify-end mb-4">
                            <button
                                className="grid h-10 w-10 col-[8/8] place-items-center rounded-full bg-gray-200 hover:bg-gray-400 shadow-md transition-all ease-in-out duration "
                                onClick={handleCloseModal}
                            >
                                <IoClose />
                            </button>
                        </div>
                    </div>
                    <div className="col-span-12">
                        <div className="flex justify-center bg-white min-h-96">
                            <img
                                src={ARRAY_IMGS[index]}
                                alt={`Product Image ${index + 1}`}
                                className="cursor-pointer "
                                onClick={handleOpenModal}
                            />
                        </div>
                    </div>
                    <div className="col-span-12">
                        <div className="flex justify-center flex-wrap max-w-[650px] overflow-x-auto scrollbar-hide">
                            {ARRAY_IMG_SMALL.map((smallImg, idx) => (
                                <div className="bg-white my-2 flex justify-center max-h-24 max-w-24">
                                        <img
                                            key={idx}
                                            src={smallImg}
                                            alt={`Thumbnail ${idx + 1}`}
                                            className={`max-h-24 max-w-24 mx-4 rounded-md cursor-pointer opacity-50 ${index === idx ? " opacity-100" : ""}`}
                                            onClick={() => setIndex(idx)}
                                        />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div
                        ref={btnSlider}
                                className="absolute top-1/2 left-5 pr-10 flex w-full -translate-y-1/2 justify-between md:hidden"
                            >
                                <button
                                    className="grid h-10 w-10 place-items-center rounded-full transition-all ease-linear duration-200 opacity-50 hover:opacity-100 bg-indigo-400 shadow"
                                    onClick={handleClickPrev}
                                >
                                    <FaAngleLeft />
                                </button>
                                <button
                                    className="grid h-10 w-10 place-items-center rounded-full transition-all ease-linear duration-200 opacity-50 hover:opacity-100 bg-indigo-400 shadow"
                                    onClick={handleClickNext}
                                >
                                    <FaAngleRight />
                                </button>
                            </div>
                </div>
                
            )}
            {!isOpenModal && (
                <>
                    <div className="col-span-3">
                        <div className="max-h-[618px] flex flex-wrap overflow-y-auto scrollbar-hide">
                            {ARRAY_IMG_SMALL.map((smallImg, idx) => (
                                <div className="bg-white my-2 flex justify-center align-middle items-center h-24 w-24">
                                    <div className="">
                                        <img
                                            key={idx}
                                            src={smallImg}
                                            alt={`Thumbnail ${idx + 1}`}
                                            className={`max-h-24 max-w-24 rounded-md cursor-pointer opacity-50 ${index === idx ? " opacity-100" : ""}`}
                                            onClick={() => setIndex(idx)}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="grid col-span-9 mt-2 bg-white rounded-md shadow-md">
                        <div className="aspect-square mx-auto my-auto">
                            <img
                                src={ARRAY_IMGS[index]}
                                alt={`Product Image ${index + 1}`}
                                className="cursor-pointer"
                                onClick={handleOpenModal}
                            />
                            
                        </div>
                    </div>
                </>
            )} 
        </section>
    );
}
