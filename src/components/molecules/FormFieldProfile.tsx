import Input from "../atoms/input/Input"
import Label from "../atoms/label"

type TypeFormFieldProfile = {
    id: string;
    htmlFor: string;
    children: string;
    name: string;
    value: string;
    placeholder: string;
    type: "text" | "password" | "email";
}

const FormFieldProfile = (props: TypeFormFieldProfile) => {
    const { id, htmlFor, children, name, placeholder, type, value } = props
    return (
        <>
            <Label htmlFor={htmlFor}>{children}</Label>
            <Input id={id} name={name} placeholder={placeholder} type={type} value={value} />
        </>
    )
}

export default FormFieldProfile