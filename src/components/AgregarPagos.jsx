/* eslint-disable react/prop-types */
import { useState } from "react";
import "../modalPagos.css";
import { MdClose } from "react-icons/md";

const AgregarPagos = ({item}) => {
    const [showPopup, setShowPopup] = useState(false);


  const PagoForm = ({item}) => {
    const [monto, setMonto] = useState(); // Estado para el valor del monto
    const [fechaPago, setFechaPago] = useState(); // formattedDate es el valor por defecto


        const currentDate = new Date();
        const year = currentDate.getFullYear();
        const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Los meses en JavaScript son base 0, por lo que se suma 1
        const day = String(currentDate.getDate()).padStart(2, '0');

        const formattedDate = `${year}-${month}-${day}`;

    return(
        <div className="modalPagos">   
          
                <div className="headerModal">

                <p>{item.primerNombre} {item. primerApellido} </p>
                
                <h2>Agregar nuevo Pago</h2>
                <span> <b>{item.codigoAlumno}</b></span>
                </div>

            <form className="formModalPagos">
                    <input className="inputPagos" type="number" placeholder="0 LPS"  onChange={(e) => setMonto(e.target.value)} required />
                    <input className="inputPagos" type="date" name="Fecha" id="fechaPago" defaultValue={formattedDate} onChange={(e) => setFechaPago(e.target.value)}/>
                    <div>
                        <CreatePago item={item} monto={monto} fecha={fechaPago}/>
                        <span className="btnCancelarPagos" onClick={() => {setShowPopup(false)}}> Cancelar</span>
                    </div>
            </form>
        </div>
            
        )
}


  return (
    <td className="modalContainer">
        
        
            <button
                className="btnPagos"
                onClick={() => setShowPopup(!showPopup)}
                >
                Nuevo Pago
            </button>
        
        <div        className="modalPopup"        style={{
            visibility: showPopup ? "visible" : "hidden",
            opacity: showPopup ? "1" : "0",
            transition: "0.4s ease-in-out",
            zIndex: 999,
            }}
        >
                <div
                className="modalForm"
                style={{
                    transform: !showPopup ? "rotate(0deg)" : "rotate(0deg)",
                    transistion: "0.10s ease-in-out",
                }}
                >
                    <MdClose
                        size={25}
                        className="closeIcon"
                        onClick={() => setShowPopup(false)}
                    />

                    <div className="modalContent">
                        <PagoForm item={item}/>
                        <div className="btns">
                        
                        
                        </div>
                    </div>
                </div>
        </div>
    </td>
  );
};

const CreatePago = ({item, monto, fecha}) => {
    const [URL] = useState(import.meta.env.VITE_URLBACKEND)
    const [setResponseMessage] = useState('');
    const handleCreatePago = async () => {
        
        const url = `${URL}/pagoMensual/save`;
        

    


  
      const pagoData = {
        fechaPago: fecha,
        idAlumno: item.idAlumno,
        idMonto: 1,
        montoPagado: monto,
        montoPendiente: 0.0,
        idEstadoPago: 1
      };
      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(pagoData),
        });
  
        const responseData = await response.json();
        setResponseMessage(responseData.message || 'Pago creado exitosamente');
      } catch (error) {
        console.error('Error creating pago:', error);
        setResponseMessage('Error al crear el pago');
      }
    };

    const confirmAndCreatePago = () => {

        const confirmResult = window.confirm(`Esta seguro que desea agregar ${monto} L. a ${item.primerNombre} ${item.primerApellido}`);

        if (confirmResult) {
            

          handleCreatePago();
        }
      };
      
    return (
        <input className="submitPagos" aria-colspan={2} onClick={confirmAndCreatePago} type="submit" value={"Añadir nuevo pago"} />
    );
  };
  









export default AgregarPagos;