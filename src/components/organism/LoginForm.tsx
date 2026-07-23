import ButtonShowPassword from "../atoms/button/ButtonShowPassowrd"
import Button from "../atoms/button/Index"
import SpanAuth from "../atoms/span"
import FormField from "../molecules/FormField"

const LoginForm = () => {
    return (
        <form className="flex flex-col w-80 md:w-100 gap-6 md:gap-4">
            <FormField forLabel="Email" name="email" placeholder="your@gmail.com" textContent="Email" type="email" />
            <FormField forLabel="Password" name="password" placeholder="******" textContent="password" type="password" />
            <Button type="button">SIGN IN</Button>
            <SpanAuth path="/register" textSpan="New here?" textLink="Create Account" />
            <ButtonShowPassword stylePosition="top-87 md:top-81 right-10" />
        </form>
    )
}

export default LoginForm