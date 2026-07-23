import { type LabelHTMLAttributes } from "react"
export interface LabelType extends LabelHTMLAttributes<HTMLLabelElement> {
    children: string,
    htmlFor: string,
}
const Label = ({ children, htmlFor }: LabelType) => {
    return (
        <label htmlFor={htmlFor} className="font-fredoka font-semibold">{children}</label>
    )
}

export default Label