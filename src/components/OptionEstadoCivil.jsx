const OptionEstadoCivil = ({Data}) => {
    return ( 
        Data && Data.map((item)=>(

            <option value={item.idEstadoCivil } key={item.idEstadoCivil}>{item.estadoCivil}</option>
        ))


     );
}
 
export default OptionEstadoCivil;