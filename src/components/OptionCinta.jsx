const OptionCinta = ({Data}) => {
    return ( 

        Data && Data.map((item)=>(
            <option value={item.idCinta} key={item.idCinta}>{item.color}</option>
        ))
     );
}
 
export default OptionCinta;