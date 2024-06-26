import { useEffect, useRef, useState } from "react";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

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
        <section {...props}>
            {isOpenModal && (
                <button
                    className="grid col-[8/8]"
                    onClick={handleCloseModal}
                >
                    cerrar
                </button>
            )}
            <div className="grid col-span-2 mx-auto">
                {ARRAY_IMG_SMALL.map((smallImg, idx) => (
                            <img
                                key={idx}
                                src={smallImg}
                                alt={`Thumbnail ${idx + 1}`}
                                className={`w-16 h-16 rounded-md cursor-pointer ${index === idx ? "border-2 border-indigo-500" : ""}`}
                                onClick={() => setIndex(idx)}
                            />
                ))}
            </div>
            <div className="grid col-span-4">
                <img
                    src={ARRAY_IMGS[index]}
                    alt={`Product Image ${index + 1}`}
                    className="cursor-pointer"
                    onClick={handleOpenModal}
                />
                <div
                    ref={btnSlider}
                    className="absolute top-1/2 left-0 pr-20 flex w-full -translate-y-1/2 justify-between md:hidden"
                >
                    <button
                        className="grid h-10 w-10 place-items-center rounded-full bg-indigo-500 hover:bg-yellow-400 shadow"
                        onClick={handleClickPrev}
                    >
                        <FaAngleLeft />
                    </button>
                    <button
                        className="grid h-10 w-10 place-items-center rounded-full bg-indigo-500 hover:bg-yellow-400 shadow"
                        onClick={handleClickNext}
                    >
                        <FaAngleRight />
                    </button>
                </div>
            </div>
            
        </section>
    );
}
