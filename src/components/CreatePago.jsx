import { useState } from "react";
import { MdClose } from "react-icons/md";

const CreatePago = ({item, monto}) => {
    const [showPopup, setShowPopup] = useState(false);
    const [URL, setURL] = useState(import.meta.env.VITE_URLBACKEND)
    const [responseMessage, setResponseMessage] = useState('');
    
    
    const handleCreatePago = async () => {
        
        const url = `${URL}/pagoMensual/save`;
        const currentDate = new Date();

    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Los meses en JavaScript son base 0, por lo que se suma 1
    const day = String(currentDate.getDate()).padStart(2, '0');

    const formattedDate = `${year}-${month}-${day}`;


  
      const pagoData = {
        fechaPago: formattedDate,
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

    return (
        <td className="modalContainer">
        
        
            {/* <button
                className="btnPagos"
                onClick={() => setShowPopup(!showPopup)}
                >
                Nuevo Pago
            </button> */}
            <input className="submitPagos" aria-colspan={2} onClick={setShowPopup(!showPopup)} type="submit" value={"Añadir nuevo pago"} />

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
                        <div className="btns">
                        
                        
                        </div>
                    </div>
                </div>
        </div>
    </td>

/* 
        <input className="submitPagos" aria-colspan={2} onClick={confirmAndCreatePago} type="submit" value={"Añadir nuevo pago"} />
    */
   
   
        );
  };
  

  export default CreatePago