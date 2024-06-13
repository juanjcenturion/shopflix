
function Footer() {
    return(
        <div className="bg-white border-t-2 mt-16 shadow w-full">
            <div className="container mx-auto px-6 py-3 md:flex md:justify-between md:items-center">
                <div className="flex justify-start items-center">
                    <img src="src/assets/img/logotype.png" className="w-12 mr-2"/>
                </div>
                <div className="flex justify-end items-center">
                    <p className=" text-sm font-medium pr-4">Dir: San Martin 3321 - Río Cuarto - Cordoba</p>
                    <p className=" text-sm font-medium">Tel: +54 9358 421 2398</p>
                </div>
            </div>
        </div>
    )
}

export default Footer