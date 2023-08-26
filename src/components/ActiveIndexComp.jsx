import AgeCalculator from "./AgeCalculator";

/* eslint-disable react/prop-types */
const ActiveIndexComp = ({ data }) => {

    return (
      <div className="accordion-content">
        <div className="names">
            <h1>Alumno</h1>
            <p>{data.primerNombre} {data.segundoNombre} {data.primerApellido} {data.segundoApellido}</p>
            <span><b>No. Celular</b> {data.celular.noCelular}</span>
            <br />
            <span><b>codigoAlumno</b> {data.codigoAlumno}</span>
        </div>
        <div className="dataContent">
            <h1>Datos Personales</h1>
            <span><b>Fecha de Nacimiento</b> {data.fechaNacimiento} </span>
            <span><b>Edad</b> <AgeCalculator fechaNacimiento={data.fechaNacimiento}/> </span>
            <br />
            <span><b>Genero</b> {data.genero.genero}</span>
            <br />
            <span><b>Direccion</b> {data.direccion}</span>
            <br />
            <span><b>Enfermedad</b> {data.enfermedadCronica}</span>
        </div>
        <div className="status">
            <span>{data.estadoAlumno.estado.estado}</span>
            <p>Estado</p>
        </div>
      </div>
    );
  };


  export default ActiveIndexComp;