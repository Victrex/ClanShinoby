const OptionGenero = ({Data}) => {
    return (   
        Data && Data.map((item)=>(
            <option value={item.idGenero } key={item.idGenero}>{item.genero}</option>
        ))


     );
}
 
export default OptionGenero;