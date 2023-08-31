import Accordion from "./Accordion";
import ActualizarPagos from "./ActualizarPagos";

const Pagos = () => {
    return ( 
    
    <div className="">
        <div>

        <h1 className="PagosTitle">Pagos</h1>
        <ActualizarPagos/>
        </div>
        
        <Accordion crud={false} pay={true} />
    </div>
    
    );
}
 
export default Pagos;