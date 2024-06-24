import { useFav } from "../../context/favContext";
import { formatearNumero } from "../../utils/sepMiles"

export default function FavItem( { product } ){
    const {removeFromFav} = useFav();
    
    return (
        <div className="ml-4 my-3 mr-7 border bg-white shadow-lg rounded-lg">
            <div className="grid grid-cols-12 py-4 px-4">
                <div className="grid col-span-1">
                    <img src={product.thumbnail} alt="" />
                </div>
                <div className="grid col-span-11">
                    <div className="col-span-7 ml-3 pt-2">
                        <h3 className="font-bold truncate text-lg">{product.title}</h3>
                    </div>
                    <div className="col-span-5 ml-3 pt-2">
                        <p className="font-bold text-lg pr-5 text-right">{formatearNumero(product.price)}</p>
                    </div>
                    <div className="col-span-12 ml-3 pt-1">
                        <button onClick={() => removeFromFav(product.id)} className=" text-blue-700 pr-3">Eliminar</button>
                        <button className="text-blue-700 pr-3 pl-3">Comprar Ahora</button>
                    </div>
                </div>
            </div>
        </div>
    )
}