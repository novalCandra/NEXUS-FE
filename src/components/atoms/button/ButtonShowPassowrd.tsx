import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

type TypeButtonShowPassword = {
    stylePosition: string
}

const ButtonShowPassword = (props: TypeButtonShowPassword) => {
    const { stylePosition } = props
    const [showPassword, setShowPassowrd] = useState<boolean>(false);

    function tampilkanPassword() {
        setShowPassowrd(prev => !prev)
    }

    return (
        <button onClick={tampilkanPassword} className={`absolute px-2 ${stylePosition}`}>{showPassword ? <Eye className="size-5 text-gray-400 " /> : <EyeOff className="size-5 text-gray-400 " />}</button>
    )
}

export default ButtonShowPassword