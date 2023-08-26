import React, { useEffect, useState } from "react";
import { useFetch } from "./useFetch";
import "../historial.css";
import "../pagosMensuales.css";
const PagosMensuales = () => {
    const [URL, setURL] = useState(import.meta.env.VITE_URLBACKEND)
    const [items, setItems] = useState([]);
    const [itemsActual, setItemsActual] = useState([]);
    const response = (useFetch(`${URL}/pagoMensual/estado/1`)).data
    const responseActual = (useFetch(`${URL}/pagoMensual/estado/2`)).data
    const [isChecked, setIsChecked] = useState(false);
    var data =[]
    

    
    const HandleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
    }
    
    useEffect(() => {
      setItems(response);
      setItemsActual(responseActual);
    }, [response, responseActual]);

    if (!isChecked) {
        data = items;
    }
    else if (isChecked) {
        data = itemsActual; 
    }
    return (
    <>
        <div>

        <h2>Pagos Mensuales</h2>
        <div className="switchPagos"> 
            <p>Pagados</p>
            <input type="checkbox" checked={isChecked} onChange={HandleCheckboxChange}/>
            <p>Pendientes</p>
        </div>

        </div>
        <div className="historialContent">
        <table className="historial">
          <thead className="tHead">
            <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>codigo</th>
            <th> Pagado</th>
            <th> Pendiente</th>
            <th>Fecha</th>
            <th>Estado Pago</th>
        
            </tr>
          </thead>
    
          
          <tbody className="historialBody">
            <tr><td colSpan={7}> <hr /> </td></tr>
           {data &&
            data.reverse().map((item) => (
                
                <React.Fragment key={item.idAlumno}>
                <tr>
                    <td className="tdAccordion" >
                        <span  className="accordion-title"> {item.idAlumno.primerNombre}</span>
                    </td>
                    <td className="tdAccordion" >
                        <span className="accordion-title"> {item.idAlumno.primerApellido}</span>
                    </td>
                    <td className="tdAccordion" >
                        <span className="accordion-title"> {item.idAlumno.codigoAlumno}</span>
                    </td>
                    <td className="tdAccordion" >
                        <span className="accordion-title"> {item.montoPagado} L.</span>
                    </td>
                    <td className="tdAccordion" >
                        <span className="accordion-title"> {item.montoPendiente} L.</span>
                    </td>
                    <td className="tdAccordion" >
                        <span className="accordion-title"> {item.fechaPago}</span>
                    </td>
                    <td className="tdAccordion" >
                        <span className="accordion-title"> {item.idEstadoPago.estadoPago}</span>
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

export default PagosMensuales