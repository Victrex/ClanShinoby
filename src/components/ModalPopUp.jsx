import { useState } from "react";
import "../ModalPopUp.css";
import { MdClose } from "react-icons/md";
import AlumnoForm from "./AlumnoForm";

const ModalPopUp = () => {
  const [showPopup, setShowPopup] = useState(false);
  return (
    <div className="modalContainer">
      <button
        className="btnAgregarPago"
        onClick={() => setShowPopup(!showPopup)}
      >
        Agregar Alumno
      </button>
      <div        className="modalPopup"        style={{
          visibility: showPopup ? "visible" : "hidden",
          opacity: showPopup ? "1" : "0",
          transition: "0.3s ease-in-out",
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
            onClick={() => setShowPopup(false)}/>
          <div className="modalContent">
          <AlumnoForm/>
            <div className="btns">
              
              <button
                className="btnCancelar"
                onClick={() => setShowPopup(false)}
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalPopUp;
