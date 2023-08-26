import Accordion from "./Accordion";

const Pagos = () => {
    return ( 
    
    <div className="">

        <h1 className="PagosTitle">Pagos</h1>
        
        <Accordion crud={false} pay={true} />
    </div>
    
    );
}
 
export default Pagos;