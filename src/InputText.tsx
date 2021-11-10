const InputText = ({label,type,identifier,value,onChange,placeholder }:any) => {
    return (
        <div>
            <label htmlFor="" className="element">
                {label}
            </label>
            <input type={type} name={identifier} value={value}onChange={onChange} placeholder={placeholder}/>
        </div>        
    )
}

export default InputText;


