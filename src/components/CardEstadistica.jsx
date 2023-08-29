import { useEffect, useState } from "react";

import { MesActual } from "./MesActual";
// eslint-disable-next-line react/prop-types
export const CardEstadistica = ({titulo, mes}) => {
    // eslint-disable-next-line no-unused-vars
    const [actualMes, setactualMes] = useState();
    useEffect(() => {
        setactualMes(mes);
    }, [])

    return (
        <div className={`CardEstadistica ${mes}`}>
            <h1>{titulo}</h1>
            <MesActual mes={mes}/>
            
        </div>
    )
}