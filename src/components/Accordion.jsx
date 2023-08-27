/* eslint-disable no-unused-vars */
// Accordion.js
import React, { useEffect, useState } from "react";
import AccordionItem from "./AccordionItem";
import { useFetch } from "./useFetch";
const Accordion = ({ crud, pay }) => {
  const [URL, setURL] = useState(import.meta.env.VITE_URLBACKEND)
  const [items, setItems] = useState([]);
  const response = (useFetch(`${URL}/alumno/`)).data




  useEffect(() => {
    setItems(response);
  }, [response]);

  return (
    <div className="tableContainer">
      <AccordionItem crud={crud} pay={pay} items={items} />
    </div>
  );
};

export default Accordion;
