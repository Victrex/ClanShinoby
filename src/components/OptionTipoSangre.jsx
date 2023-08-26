const OptionTipoSangre = ({Data}) => {
    return ( 
        Data && Data.map((item)=>(
            <option value={item.idTipoSangre } key={item.idTipoSangre}>{item.tipoSangre}</option>
        ))        
     );
}
 
export default OptionTipoSangre;