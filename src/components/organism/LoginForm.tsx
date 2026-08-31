import { useState } from "react"
import ButtonShowPassword from "../atoms/button/ButtonShowPassowrd"
import Button from "../atoms/button/Index"
import SpanAuth from "../atoms/span"
import FormField from "../molecules/FormField"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { SchemaAuthLogin } from "../../utils/schema/schema"
const LoginForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(SchemaAuthLogin),
        defaultValues: {
            email: "",
            password: ""
        }
    })
    const [showPassword, setShowPassword] = useState<boolean>(false)
    function tampilkanPassword() {
        setShowPassword(prev => !prev)
    }

    const onSubmitData = (values) => {
        console.log(values)
    }
    return (
        <form onSubmit={handleSubmit(onSubmitData)} className="flex flex-col w-80 md:w-100 gap-6 md:gap-4">
            <FormField forLabel="Email" placeholder="your@gmail.com" textContent="Email" type="email" {...register('email')} />
            {errors?.email?.type && <span className="text-red-500 font-fredoka text-base">{errors?.email?.message}</span>}
            <FormField forLabel="Password" placeholder="******" textContent="password" type={showPassword ? "text" : "password"} {...register('password')} />
            {errors?.password?.type && <span className="text-red-500 font-fredoka text-base">{errors?.password?.message}</span>}
            <Button type="submit">SIGN IN</Button>
            <SpanAuth path="/register" textSpan="New here?" textLink="Create Account" />
            <ButtonShowPassword stylePosition="top-87 md:top-92 right-10" showPassword={showPassword} onToggle={tampilkanPassword} />
        </form>
    )
}

export default LoginForm