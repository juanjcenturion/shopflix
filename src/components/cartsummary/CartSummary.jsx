import React from "react";

const CartSummary = ({ cartCount }) => {
    return (
        <div className="col-span-4 mt-3 mr-4 shadow-lg rounded-lg min-h-96 max-h-96 bg-white">
            <h3 className="font-bold ml-3 text-lg pt-4 text-center">Resumen de Compra</h3>
            <hr className="mx-4 mt-2"/>
            <div className="grid grid-cols-12">
                <div className="col-span-6 mx-4 mt-6">
                    <p>Productos ({cartCount})</p>
                </div>
                <div className="col-span-6 mx-4 mt-6">
                    {/* Aquí puedes agregar más detalles del resumen de compra */}
                </div>
            </div>
        </div>
    );
};

export default CartSummary;
