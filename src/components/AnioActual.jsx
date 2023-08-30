/* eslint-disable react/prop-types */
import { useState } from "react"
import { useFetch } from "./useFetch"

export const AnioActual = ()=>{
    const [URL] = useState(import.meta.env.VITE_URLBACKEND)
    const currentYear = new Date().getFullYear();
    // eslint-disable-next-line no-unused-vars
    console.log(currentYear);
    const response = (useFetch(`${URL}/historialPagos/anio/${currentYear}`)).data
    let a = response;
    var total = 0;
    if(a!= null){
        console.log(response);
        for (let i = 0; i < a.length; i++) {
            total += a[i].montoPagado;
        }
    }
    
    //response.data.foreach(e=>console.log(e))
    return(
        <h3><span> : </span> <span className="totalAnio"> L. {total} </span></h3>
    )
}