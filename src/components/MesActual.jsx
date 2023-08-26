/* eslint-disable react/prop-types */
import { useState } from "react"
import { useFetch } from "./useFetch"

export const MesActual = ({mes})=>{
    const [URL, setURL] = useState(import.meta.env.VITE_URLBACKEND)

    // eslint-disable-next-line no-unused-vars
    const [Mes, setMes] = useState(mes)
    const response = (useFetch(`${URL}/historialPagos/${Mes}`)).data
    let a = response;
    var total = 0;
    if(a!= null){
        for (let i = 0; i < a.length; i++) {
            total += a[i].montoPagado;
        }
    }
    
    //response.data.foreach(e=>console.log(e))
    return(
        <h3><span>Total : </span> <span className="totalMes"> Lps. {total} </span></h3>
    )
}