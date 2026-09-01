import { useNavigate } from "react-router";
import { serviceAuthRegister } from "../utils/service/auth.service";
import { zodResolver } from "@hookform/resolvers/zod";
import { SchemaAuthRegister } from "../utils/schema/schema";
import { useForm } from "react-hook-form";
import { useState } from "react";

export const useHookAuthRegister = () => {
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(SchemaAuthRegister),
        defaultValues: {
            name: "",
            email: "",
            password: ""
        }
    })
    function handlePassword() {
        setShowPassword(prev => !prev)
    }
    const dataOnsubmit = async (data: object) => {
        try {
            const request = await serviceAuthRegister(data);
            const response = await request.json();
            if (request.status !== 200) {
                console.error(response.message)
            }
            navigate("/login")
        } catch (error) {
            return console.error(error)
        }
    }

    return {showPassword, register, handleSubmit, errors, handlePassword, dataOnsubmit}
}