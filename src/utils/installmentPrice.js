import { formatearNumero } from "./sepMiles";

export function formatoPrecioEnCuotas(precio, cuotas) {
    const precioPorCuota = precio / cuotas;
    const numeroFormateado = formatearNumero(precioPorCuota); // Formateamos el precio por cuota

    return `Mismo precio en ${cuotas} cuotas de ${numeroFormateado}`;
}
