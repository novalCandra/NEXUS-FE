import { useState } from "react"
import ButtonShowPassword from "../atoms/button/ButtonShowPassowrd"
import Button from "../atoms/button/Index"
import SpanAuth from "../atoms/span"
import FormField from "../molecules/FormField"

const LoginForm = () => {
    const [showPassword, setShowPassword] = useState<boolean>(false)
    function tampilkanPassword() {
        setShowPassword(prev => !prev)
    }
    return (
        <form className="flex flex-col w-80 md:w-100 gap-6 md:gap-4">
            <FormField forLabel="Email" name="email" placeholder="your@gmail.com" textContent="Email" type="email" />
            <FormField forLabel="Password" name="password" placeholder="******" textContent="password" type={showPassword ? "text" : "password"} />
            <Button type="button">SIGN IN</Button>
            <SpanAuth path="/register" textSpan="New here?" textLink="Create Account" />
            <ButtonShowPassword stylePosition="top-87 md:top-81 right-10" showPassword={showPassword} onToggle={tampilkanPassword} />
        </form>
    )
}

export default LoginForm