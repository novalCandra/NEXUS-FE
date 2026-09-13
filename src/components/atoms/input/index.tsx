import type { InputHTMLAttributes } from "react"
type InputAtomsType = {
    styleCenter?: string,
} & InputHTMLAttributes<HTMLInputElement>
const InputAtoms = (props: InputAtomsType) => {
    const { styleCenter, ...inputProps } = props
    return (
        <input {...inputProps} id={inputProps.name} className={`ring-3 ring-black px-2 py-2 focus:outline-none focus:ring-2 focus:ring-pink text-black font-semibold placeholder:text-dark-surface/50 placeholder:font-bold placeholder:font-fredoka bg-paper  no-spinner ${styleCenter}`} />
    )
}

export default InputAtoms