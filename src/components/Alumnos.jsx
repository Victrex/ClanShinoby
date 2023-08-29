import Accordion from "./Accordion";
import "../alumnos.css";
import AlumnosStats from "./AlumnosStats";
import AlumnosBtns from "./AlumnosBtns";
const Alumnos = () => {

  return (
    <div className="alumnosContainer">
      <div className="headerAlumnos">
        <h1 className="tituloAlumnos">Alumnos</h1>
        <AlumnosStats />
        <AlumnosBtns/>
      </div>

      <Accordion crud={true} pay={false} />
    </div>
  );
};

export default Alumnos;
