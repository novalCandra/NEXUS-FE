import { zodResolver } from "@hookform/resolvers/zod"
import { useEffect, useState } from "react"
import { SchemaProfileUsers } from "../utils/schema/schema"
import { useForm } from "react-hook-form"
import { getProfileUsers, updateProfileUsers } from "../utils/service/profile.service"

export const useHooksProfile = () => {
    const [loading, setloading] = useState<boolean>(true)
    const [error, setError] = useState<boolean | null>(null)
    const [success, setSuccess] = useState<boolean>(false)
    const { register, handleSubmit, reset, watch } = useForm({
        resolver: zodResolver(SchemaProfileUsers),
        defaultValues: {
            name: "",
            email: "",
            password: ""
        }
    });

    const formvalue = watch();

    const handleSubmitProfile = async (e: object) => {
        setloading(true)
        setError(null)
        try {
            const request = await updateProfileUsers(e);
            const response = await request.json()
            setSuccess(true)
            setTimeout(() => window.location.reload(), 2000)
            return response
        } catch (err) {
            const errorMsg = err instanceof Error ? err.message : "unknow error"
            setError(false)
            console.log(errorMsg)
        } finally {
            setloading(false)
        }
    }
    useEffect(() => {
        async function getProfile() {
            try {
                setloading(false)
                const request = await getProfileUsers();
                const response = await request.json();
                reset({
                    name: response?.data?.name || "",
                    email: response?.data?.email || "",
                    password: response?.data?.password || ""
                })
            } catch (err) {
                // setError(err instanceof Error ? err.message : "Error loading profile")
                return console.log(err)
            } finally {
                setloading(false)
            }
        }
        getProfile()
    }, [reset])

    return { loading,register, error, success , handleSubmit, handleSubmitProfile, formvalue }
}