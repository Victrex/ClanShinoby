import { useEffect, useState } from "react";
import { useFetch } from "./useFetch";
import { MdPeople } from "react-icons/md";

const AlumnosStats = () => {
    const [URL] = useState(import.meta.env.VITE_URLBACKEND)
    const [items, setItems] = useState([]);
    const response = (useFetch(`${URL}/alumno/`)).data

    useEffect(() => {
      setItems(response);
    }, [response]);
    const c = items;
    return ( 
        <div className="alumnosStatsContainer">
            <br />
            <div className={`CardEstadisticaAlumnos`}>
                <h1>Alumnos Matriculados</h1>
                {c !== null ? (
                    <h3>{c.length} <span>alumnos</span></h3>
                ) : (
                    <p>Loading...</p>
                )}
                <MdPeople className="MdPeople" size={55}/>
            </div>
        </div>
        );
}
 
export default AlumnosStats;