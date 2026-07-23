import InputAtoms from "../atoms/input"
import Label from "../atoms/label"
type FormFieldType = {
    textContent: string,
    forLabel: string,
    name: string,
    placeholder: string,
    type: string,
    styleCenter?: string
}

const FormField = (props: FormFieldType) => {
    const { forLabel, name, placeholder, type, textContent, styleCenter } = props
    return (
        <>
            <Label htmlFor={forLabel}>{textContent}</Label>
            <InputAtoms name={name} type={type} placeholder={placeholder} styleCenter={styleCenter} />
        </>
    )
}

export default FormField