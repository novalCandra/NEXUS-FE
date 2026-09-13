import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { SchemaAuthLogin } from "../utils/schema/schema"
import { useNavigate } from "react-router"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { fetchingDataAuthLogin } from "./redux/reduxHookAuth"
import type { Appdistch } from "./store/store"
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

    const dispatch = useDispatch<Appdistch>();
    function tampilkanPassword() {
        setShowPassword(prev => !prev)
    }

    const onSubmitData = async (values: object) => {
        try {
            const result = await dispatch(fetchingDataAuthLogin(values)).unwrap();
            localStorage.setItem("token", result?.data?.token);
            navigate("/dashboard")
        } catch (error) {
            return console.log(error)
        }
    }

    return { showPassword, register, handleSubmit, errors, tampilkanPassword, onSubmitData }
}