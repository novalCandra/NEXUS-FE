import { Eye, EyeOff } from "lucide-react";

type TypeButtonShowPassword = {
    stylePosition: string
    showPassword: boolean
    onToggle: () => void
}

const ButtonShowPassword = (props: TypeButtonShowPassword) => {
    const { stylePosition, showPassword, onToggle } = props

    return (
        <button type="button" onClick={onToggle} className={`absolute px-2 ${stylePosition}`}>{showPassword ? <Eye className="size-5 text-gray-400 " /> : <EyeOff className="size-5 text-gray-400 " />}</button>
    )
}

export default ButtonShowPassword