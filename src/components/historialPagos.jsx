import React, { useEffect, useState } from "react";
import { useFetch } from "./useFetch";
import ActiveIndexComp from "./ActiveIndexComp";
import "../historial.css";

const HistorialPagos = () =>{
    const [URL, setURL] = useState(import.meta.env.VITE_URLBACKEND)
    const [items, setItems] = useState([]);
    const response = (useFetch(`${URL}/historialPagos/getAll`)).data
    
  
  
    useEffect(() => {
      setItems(response);
    }, [response]);

return (
    <>
    <h2>Historial de Pagos</h2>
    <div className="historialContent">
    <table className="historial">
      <thead className="tHead">
        <tr>
        <th>Nombre</th>
        <th>Apellido</th>
        <th>codigo</th>
        <th>Pago</th>
        <th>Fecha</th>
        
    
        </tr>
      </thead>

      
      <tbody className="historialBody">
        <tr><td colSpan={5}> <hr /> </td></tr>
       {items &&
        items.reverse().map((item, index) => (
            
            <React.Fragment key={`${item.idAlumno}${item.codigoAlumno}`}>
            <tr>
                <td className="tdAccordion" >
                    <span  className="accordion-title"> {item.alumno.primerNombre}</span>
                </td>
                <td className="tdAccordion" >
                    <span className="accordion-title"> {item.alumno.primerApellido}</span>
                </td>
                <td className="tdAccordion" >
                    <span className="accordion-title"> {item.alumno.codigoAlumno}</span>
                </td>
                <td className="tdAccordion" >
                    <span className="accordion-title"> {item.montoPagado} L.</span>
                </td>
                <td className="tdAccordion" >
                    <span className="accordion-title"> {item.fecha}</span>
                </td>
            </tr>

          </React.Fragment>
        ))} 
        <tr></tr>
        </tbody>
    </table>
    </div>
    </>
)
}


export default HistorialPagos;