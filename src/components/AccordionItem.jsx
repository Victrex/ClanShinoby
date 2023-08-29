/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// AccordionItem.js
import React, { useState } from "react";
import ActiveIndexComp from "./ActiveIndexComp";
import { MdDelete, MdEditNote } from "react-icons/md";
import { useDeleteFetch } from "./useDeleteFetch";
import AgregarPagos from "./agregarPagos";
import ModalEditar from "./ModalEditar";





const AccordionItem = ({ items, crud, pay }) => {

  const [activeIndex, setActiveIndex] = useState(-1);
  const [URL, setURL] = useState(import.meta.env.VITE_URLBACKEND)
  const [data, setdata] = useState(null);
  
  const AccordionTitle = ({ item, index, crud, pay }) => {
   
    
    const delURL = `${URL}/alumno/deleteAlumno/${item.idAlumno}`;
    

    return (
      <tr
        className="accordion-item"
        key={item.idAlumno}
      >
        <td className="tdAccordion" onClick={() => toggleAccordion(index)}>
          <span  className="accordion-title"> {item.primerNombre}</span>
        </td>
        <td className="tdAccordion" onClick={() => toggleAccordion(index)}>
          <span className="accordion-title"> {item.primerApellido}</span>
        </td>
        <td className="tdAccordion" onClick={() => toggleAccordion(index)}>
          <span className="accordion-title"> {item.codigoAlumno}</span>
        </td>
        <td className="tdAccordion" onClick={() => toggleAccordion(index)}>
          <span className="accordion-title"> {item.cinta.color}</span>
        </td>
        {crud && !pay && (
        <>
          <td id={item.idAlumno}>
            <ModalEditar id={item.idAlumno} item={item}/>
          </td>
          <DeleteFetch id={item.idAlumno} />
        </>
      )}
      {!crud && pay && <AgregarPagos item={item} />}
      </tr>
    );
  };

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };





  return (
    <table className="accordion">
      <thead className="tHead">
        <tr>
        <th>Nombre</th>
        <th>Apellido</th>
        <th>codigo</th>
        <th>cinta</th>
        
        {crud && !pay && (
        <>
          <th>Editar</th>
          <th>Eliminar</th>
        </>
      )}
        {!crud && pay && (
        <>
        <th colSpan={1}>Pagos</th>
        </>)
        }
        </tr>
      </thead>
      
      <tbody>
        <tr><td colSpan={6}> <hr /> </td></tr>
       {items &&
        items.map((item, index) => (
          
          <React.Fragment key={item.idAlumno}>
            
            <AccordionTitle crud={crud} pay={pay} item={item} index={index} key={item.idAlumno} useDeleteFetch={useDeleteFetch}/>
            <tr>
              <td colSpan={6}>
                {index === activeIndex && <ActiveIndexComp key={item.idAlumno} data={item} />}
              </td>
              
            </tr>
          </React.Fragment>
        ))} 
      </tbody>
      
    </table>
  );


  
};
export default AccordionItem;




const DeleteFetch = ({ id }) => {
  const [data, setData] = useState(null);
  const [URL, setURL] = useState(import.meta.env.VITE_URLBACKEND)
  const delURL = `${URL}/alumno/deleteAlumno/${id}`;
  const handleDelete = async () => {
    try {
      const response = await fetch(delURL, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      window.location.reload();

      const responseData = await response.json();
      setData(responseData);

    } catch (error) {
      console.error('Error deleting:', error);
    }
  };

  return (
    <td>
      <button className="btnDelete" onClick={handleDelete}><MdDelete className="MdDelete" size={25}  /></button>
    </td>
  );
};
