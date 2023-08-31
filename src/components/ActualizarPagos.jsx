/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import "../modalPagos.css";
import { MdClose } from "react-icons/md";
import { useFetch } from "./useFetch";

const ActualizarPagos = ({item}) => {
  const [URL] = useState(import.meta.env.VITE_URLBACKEND)
  const [items, setItems] = useState([]);
  const [pagoMensual, SetPagoMensual] = useState([]);
  const response = (useFetch(`${URL}/alumno/`)).data
  const responsePagos = (useFetch(`${URL}/pagoMensual/`)).data

  useEffect(() => {
    setItems(response);
    SetPagoMensual(responsePagos);
  }, [response, responsePagos]);

    const [showPopup, setShowPopup] = useState(false);

    const currentDate = new Date();
    const year = currentDate.getFullYear();

  const PagoForm = () => {
    const [fechaPago, setFechaPago] = useState();
    const [anio, setAnio] = useState(year);

        
    return(
        <div className="modalPagos">   
          
                <div className="headerModal">


                
                <h2>Actualizar Pago</h2>
                </div>

            <form className="formModalPagos"> 
              <input type="number" name="" id="anio" defaultValue={year}   onChange={(e)=>{setAnio(e.target.value)}}/>
                    <select name="Mes" id="mesActualizar" onChange={(e)=>{setFechaPago(e.target.value)}}>
                        <option value="">Seleccione un mes</option>
                        <option value="01">Enero</option>
                        <option value="02">Febrero</option>
                        <option value="03">Marzo</option>
                        <option value="04">Abril</option>
                        <option value="05">Mayo</option>
                        <option value="06">Junio</option>
                        <option value="07">Julio</option>
                        <option value="08">Agosto</option>
                        <option value="09">Septiembre</option>
                        <option value="10">Octubre</option>
                        <option value="11">Noviembre</option>
                        <option value="12">Diciembre</option>
                    </select>
                    <div>
                        <CreatePago items={items} pagoMensual={pagoMensual} fechaPago={fechaPago} anio={anio}/>
                        <span className="btnCancelarActualizar" onClick={() => {setShowPopup(false)}}> Cancelar</span>
                    </div>
            </form>
        </div>
            
        )
}


  return (
    <div className="modalContainer">
        
        
            <button
                className="btnActualizar"
                onClick={() => setShowPopup(!showPopup)}
                >
                Actualizar Pagos 
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

                    </div>
                </div>
        </div>
    </div>
  );
};

const CreatePago = ({items, pagoMensual, fechaPago, anio}) => {
    const [URL] = useState(import.meta.env.VITE_URLBACKEND)
    const handleCreatePago = async (e) => {
        e.preventDefault();
        const url = `${URL}/pagoMensual/save`;
        console.log('items:', items);
      console.log('pagoMensual:', pagoMensual);
      console.log('fechaPago:', fechaPago);
      console.log('anio:', anio);
        
        if (!items.length == 0) {
          
        const alumnosSinPagoAgosto = items.filter((alumno) => {
          const alumnoPagosAgosto = pagoMensual.filter(
                  (pago) =>
                      pago.idAlumno.idAlumno === alumno.idAlumno && 
                      pago.fechaPago.startsWith(`${anio}-${fechaPago}`)
              );
          
              return alumnoPagosAgosto.length === 0;
          });
          const idAlumnosSinPagoAgosto = alumnosSinPagoAgosto.map((alumno) => alumno.idAlumno);


          idAlumnosSinPagoAgosto.forEach(async e => {
            const pagoData = {
              fechaPago: `${anio}-${fechaPago}-25`,
              idAlumno: e,
              idMonto: 1,
              montoPagado: 0,
              montoPendiente: 300,
              idEstadoPago: 2
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
              console.log(responseData);
            } catch (error) {
              console.error('Error creating pago:', error);
            } 


          });
      }
    };
      
    return (
        <button className="submitActualizar" aria-colspan={2} onClick={handleCreatePago}> Actualizar pagos </button>
    );
  };
  
export default ActualizarPagos;