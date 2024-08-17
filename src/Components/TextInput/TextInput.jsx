function TextInput({type = "text", value, label, onChange}) {
    return (
        <>
        {label && <span>{label}</span>}
            <input 
                className="py-4 px-2 border border-gray-500 rounded-md w-full"
                type={type}  placeholder={label} value={value} onChange={onChange}>
            </input>
        </>
    )
}

export default TextInput;