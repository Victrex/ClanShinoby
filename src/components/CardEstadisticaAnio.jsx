import { AnioActual } from "./AnioActual";
export const CardEstadisticaAnio = () => {
    const currentYear = new Date().getFullYear();
    return (
        <div className={`CardEstadisticaAnio`}>
            <h1>Recaudado en {currentYear}</h1>
            <AnioActual/>
            
        </div>
    )
}