import { useHooksFormLogin } from "../../hooks/useHookLogin"
import ButtonShowPassword from "../atoms/button/ButtonShowPassowrd"
import Button from "../atoms/button/Index"
import SpanAuth from "../atoms/span"
import FormField from "../molecules/FormField"
const LoginForm = () => {
    const { showPassword, register, handleSubmit, errors, tampilkanPassword, onSubmitData } = useHooksFormLogin()
    return (
        <form onSubmit={handleSubmit(onSubmitData)} className="flex flex-col w-80 md:w-100 gap-6 md:gap-4 relative">
            <FormField forLabel="email" placeholder="your@gmail.com" textContent="Email" type="email" {...register('email')} />
            {errors?.email?.type && <span className="text-red-500 font-fredoka text-base">{errors?.email?.message}</span>}
            <FormField forLabel="passwors" placeholder="******" textContent="password" type={showPassword ? "text" : "password"} {...register('password')} />
            {errors?.password?.type && <span className="text-red-500 font-fredoka text-base">{errors?.password?.message}</span>}
            <Button type="submit">SIGN IN</Button>
            <SpanAuth path="/register" textSpan="New here?" textLink="Create Account" />
            <ButtonShowPassword stylePosition={`absolute ${errors.password ? "top-55 " : "top-43 "} md:top-36 right-1`} showPassword={showPassword} onToggle={tampilkanPassword} />
        </form>
    )
}

export default LoginForm