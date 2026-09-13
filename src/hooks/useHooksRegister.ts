import { useNavigate } from "react-router";
import { zodResolver } from "@hookform/resolvers/zod";
import { SchemaAuthRegister } from "../utils/schema/schema";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetcingDataAuthRegister } from "./redux/reduxHookAuth";
import type { Appdistch } from "./store/store";

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
    const dispacth = useDispatch<Appdistch>()
    const dataOnsubmit = async (data: object) => {
        try {
            await dispacth(fetcingDataAuthRegister(data)).unwrap();
            navigate("/login")
        } catch (error) {
            return console.error(error)
        }
    }

    return { showPassword, register, handleSubmit, errors, handlePassword, dataOnsubmit }
}