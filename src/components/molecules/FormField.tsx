import type { InputHTMLAttributes } from "react"
import InputAtoms from "../atoms/input"
import Label from "../atoms/label"
type FormFieldType = {
    textContent: string,
    forLabel: string,
    styleCenter?: string,
} & InputHTMLAttributes<HTMLInputElement>

const FormField = (props: FormFieldType) => {
    const { forLabel, textContent, styleCenter, ...inputProps } = props
    return (
        <>
            <Label htmlFor={forLabel}>{textContent}</Label>
            <InputAtoms {...inputProps} styleCenter={styleCenter} />
        </>
    )
}

export default FormField