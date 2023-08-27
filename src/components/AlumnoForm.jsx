import { useEffect, useState } from "react";
import { useFetch } from "./useFetch";
import OptionCinta from "./OptionCinta";
import OptionEstadoCivil from "./OptionEstadoCivil";
import OptionGenero from "./OptionGenero";
import OptionTipoSangre from "./OptionTipoSangre";

const AlumnoForm = () => {

  const [URL] = useState(import.meta.env.VITE_URLBACKEND)
  const [generoData, setGeneroData] = useState();
  const [estadoCivilData, setEstadoCivilData] = useState([]);
  const [tipoSangreData, setTipoSangreData] = useState([]);
  const [cintaData, setCintaData] = useState([]);
    // eslint-disable-next-line no-unused-vars
    const response = (useFetch(`${URL}/genero/`)).data
    const responseGenero = (useFetch(`${URL}/genero/`)).data
    const responseEstadoCivil = (useFetch(`${URL}/estadoCivil/`)).data
    const responseTipoSangre = (useFetch(`${URL}/tipoSangre/`)).data
    const responseCinta = (useFetch(`${URL}/cinta/`)).data
    


  useEffect(() => {
    setGeneroData(responseGenero);
    setEstadoCivilData(responseEstadoCivil);
    setTipoSangreData(responseTipoSangre);
    setCintaData(responseCinta);
  }, [responseGenero, responseEstadoCivil, responseTipoSangre, responseCinta]);


  const  [primerNombre, setPrimerNombre] = useState('');
  const [genero, setGenero] = useState(1)
  const [segundoNombre, setSegundoNombre] = useState('');
  const [primerApellido, setPrimerApellido] = useState('');
  const [segundoApellido, SetSegundoApellido] = useState('')
  const [codigoAlumno, setCodigoAlumno] = useState('')
  const [fechaNacimiento, setFechaNacimiento] = useState('')
  const [direccion, setDireccion] = useState('')
  const [ciudad, setCiudad] = useState('')
  const [telefono, setTelefono] = useState('')
  const [celular, setCelular] = useState('')
  const [peso, setPeso] = useState('')
  const [estadoCivil, setEstadoCivil] = useState(1)
  const [tipoSangre, setTipoSangre] = useState(1)
  const [enfermedadCronica, setEnfermedadCronica] = useState('Ninguna')
  const [cinta, setCinta] = useState(1)
  
  const handleEnviarAlumno = (event) => {

    event.preventDefault();
    const data = {
      "primerNombre": primerNombre,
      "segundoNombre": segundoNombre,
      "primerApellido": primerApellido,
      "segundoApellido": segundoApellido,
      "codigoAlumno": codigoAlumno,
      "idGenero": genero,
      "fechaNacimiento": fechaNacimiento,
      "direccion": direccion,
      "ciudad": ciudad,
      "telefono": telefono,
      "idCelular": celular,
      "peso": peso,
      "idEstadoCivil": estadoCivil,
      "idTipoSangre": tipoSangre,
      "enfermedadCronica": enfermedadCronica,
      "idCinta": cinta
    };
    fetch((URL + "/alumno/save"), {
      method: "POST",
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then((response) => {
      if(!response.ok){
        throw new Error('Ocurrio un error: ');
      }
      return response.json();
    }).then((data) => {
      console.log(data);
    }).catch((err) => {
      console.log(err);
    })
  }

    return ( 
  <>
    <form className="alumnoForm" onSubmit={handleEnviarAlumno}>
        <label className="alumnoFormLabel" htmlFor="primerNombre"  >Primer Nombre:</label>
        <input className="alumnoFormInput" type="text" id="primerNombre" name="primerNombre" value={primerNombre} onChange={(e)=>{setPrimerNombre(e.target.value)}} required/>
       
        <label className="alumnoFormLabel" htmlFor="segundoNombre">Segundo Nombre:</label>
        <input className="alumnoFormInput" type="text" id="segundoNombre" name="segundoNombre" value={segundoNombre} onChange={(e)=>{setSegundoNombre(e.target.value)}}/>
       
        <label className="alumnoFormLabel" htmlFor="primerApellido">Primer Apellido:</label>
        <input className="alumnoFormInput" type="text" id="primerApellido" name="primerApellido" value={primerApellido} onChange={(e)=>{setPrimerApellido(e.target.value)}} required />
       
        <label className="alumnoFormLabel" htmlFor="segundoApellido">Segundo Apellido:</label>
        <input className="alumnoFormInput" type="text" id="segundoApellido" name="segundoApellido" value={segundoApellido} onChange={(e)=>{SetSegundoApellido(e.target.value)}}/>
       
        <label className="alumnoFormLabel" htmlFor="codigoAlumno">Código de Alumno:</label>
        <input className="alumnoFormInput" type="text" id="codigoAlumno" name="codigoAlumno" value={codigoAlumno} onChange={(e)=>{setCodigoAlumno(e.target.value)}} required/>
       
        <label className="alumnoFormLabel" htmlFor="idGenero">Género:</label>
        <select className="alumnoFormSelect" id="idGenero" name="idGenero" value={genero} onChange={(e)=>{setGenero(e.target.value)}}>
          <OptionGenero Data={generoData}/>
        </select>
      
        <label className="alumnoFormLabel" htmlFor="fechaNacimiento">Fecha de Nacimiento:</label>
        <input className="alumnoFormInput" type="date" id="fechaNacimiento" name="fechaNacimiento" value={fechaNacimiento} onChange={(e)=>{setFechaNacimiento(e.target.value)}} required/>
       
        <label className="alumnoFormLabel" htmlFor="direccion">Dirección:</label>
        <input className="alumnoFormInput" type="text" id="direccion" name="direccion" value={direccion} onChange={(e)=>{setDireccion(e.target.value)}} required/>
       
        <label className="alumnoFormLabel" htmlFor="ciudad">Ciudad:</label>
        <input className="alumnoFormInput" type="text" id="ciudad" name="ciudad" value={ciudad} onChange={(e)=>{setCiudad(e.target.value)}} required/>
       
        <label className="alumnoFormLabel" htmlFor="telefono">Teléfono:</label>
        <input className="alumnoFormInput" type="tel" id="telefono" name="telefono" value={telefono} onChange={(e)=>{setTelefono(e.target.value)}} required/>
       
        <label className="alumnoFormLabel" htmlFor="idCelular">No. de Celular:</label>
        <input className="alumnoFormSelect" type="tel" id="idCelular" name="idCelular" value={celular} onChange={(e)=>{setCelular(e.target.value)}}/>

      
        <label className="alumnoFormLabel" htmlFor="peso">Peso:</label>
        <input className="alumnoFormInput" type="number" id="peso" name="peso" value={peso} onChange={(e)=>{setPeso(e.target.value)}} required/>
       
        <label className="alumnoFormLabel" htmlFor="idEstadoCivil">Estado Civil:</label>
        <select className="alumnoFormSelect" id="idEstadoCivil" name="idEstadoCivil" value={estadoCivil} onChange={(e)=>{setEstadoCivil(e.target.value)}}>
          <OptionEstadoCivil Data={estadoCivilData}/>
        </select>
      
        <label className="alumnoFormLabel" htmlFor="idTipoSangre" >Tipo de Sangre:</label>
        <select className="alumnoFormSelect" id="idTipoSangre" name="idTipoSangre" value={tipoSangre} onChange={(e)=>{setTipoSangre(e.target.value)}}>
          <OptionTipoSangre Data={tipoSangreData}/>
        </select>
      
        <label className="alumnoFormLabel" htmlFor="enfermedadCronica" value={enfermedadCronica} onChange={(e)=>{setEnfermedadCronica(e.target.value)}}>Enfermedad Crónica:</label>
        <textarea id="enfermedadCronica" name="enfermedadCronica"></textarea>
      
        <label className="alumnoFormLabel" htmlFor="idCinta">Cinta:</label>
        <select className="alumnoFormSelect" id="idCinta" name="idCinta" value={cinta} onChange={(e)=>{setCinta(e.target.value)}}>
          <OptionCinta Data={cintaData}/>
        </select>
      
        <button className="subtmitAlumno" type="submit" onClick={() => {window.location.reload()}}>Enviar</button>
        
    </form>
  </>
    
    );
}

 
export default AlumnoForm;