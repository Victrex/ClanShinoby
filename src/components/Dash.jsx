import { CardEstadistica } from "./CardEstadistica";
import { CardEstadisticaAnio } from "./CardEstadisticaAnio";
import PagosMensuales from "./PagosMensuales";
import HistorialPagos from "./historialPagos";


const Dash = () => {
    

    return (
        <div className="container">
          <div className='header'>
            <div className='tittle'>
              <h1>Panel De Administracion | Clan Shinoby</h1>
            </div>
            <div className='headerStats'>
              <CardEstadistica titulo={'Mes Actual'} mes={'actual'}/>
              <CardEstadistica titulo={'Mes Anterior'} mes={'anterior'}/>
              
            </div>
          </div>
        <div className="dashContent">
          <div className='main'>
          <CardEstadisticaAnio/>
            <HistorialPagos/>
            <PagosMensuales/>
          </div>
          <div className='aside'>
            <img src="./src/assets/img/logoShinoby.png" alt="" />
          </div>
        </div>
        </div>
      );
}
 
export default Dash;