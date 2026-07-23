type InputAtomsType = {
    name: string,
    placeholder: string,
    type: string,
    styleCenter?: string,
}
const InputAtoms = (props: InputAtomsType) => {
    const { name, placeholder, type, styleCenter } = props
    return (
        <input type={type} name={name} id={name} placeholder={placeholder} className={`ring-3 ring-black px-2 py-2 focus:outline-none focus:ring-2 focus:ring-pink text-black font-semibold placeholder:text-dark-surface/50 placeholder:font-bold placeholder:font-fredoka bg-paper  no-spinner ${styleCenter}`} required />
    )
}

export default InputAtoms