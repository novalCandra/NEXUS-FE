import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { SchemaAuthLogin } from "../utils/schema/schema"
import { serviceAuthLogin } from "../utils/service/auth.service"
import { useNavigate } from "react-router"
import { useState } from "react"
export const useHooksFormLogin = () => {
    const [showPassword, setShowPassword] = useState<boolean>(false)
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(SchemaAuthLogin),
        defaultValues: {
            email: "",
            password: ""
        }
    })
    const navigate = useNavigate()

    function tampilkanPassword() {
        setShowPassword(prev => !prev)
    }

    const onSubmitData = async (values: object) => {
        try {
            const request = await serviceAuthLogin(values);
            const response = await request.json();
            localStorage.setItem("token", response?.data?.token);
            navigate("/dashboard")
        } catch (error) {
            return console.log(error)
        }
    }

    return {showPassword, register, handleSubmit, errors, tampilkanPassword, onSubmitData}
}