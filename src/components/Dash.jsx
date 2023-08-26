import { CardEstadistica } from "./CardEstadistica";
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
            <HistorialPagos/>
            <PagosMensuales/>
          </div>
          <div className='aside'>
            <p>aside</p>
          </div>
        </div>
        </div>
      );
}
 
export default Dash;