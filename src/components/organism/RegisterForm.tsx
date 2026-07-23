import ButtonGoogle from "../atoms/button/ButtonGoogle";
import ButtonShowPassword from "../atoms/button/ButtonShowPassowrd";
import Button from "../atoms/button/Index";
import SpanAuth from "../atoms/span";
import FormField from "../molecules/FormField";

const RegisterForm = () => {
  return (
    <form className="flex flex-col w-80 md:w-100 gap-5">
      <FormField
        forLabel="Username"
        name="username"
        placeholder="Enter your email"
        textContent="username"
        type="text"
      />
      <FormField
        forLabel="Email"
        name="email"
        placeholder="your@gmail.com"
        textContent="Email"
        type="email"
      />
      <FormField
        forLabel="Password"
        name="password"
        placeholder="******"
        textContent="password"
        type="password"
      />
      <Button type="submit">Create my Space</Button>
      <div className="flex flex-row justify-between items-center">
        <hr className="ring ring-black w-full" />
        <span className="text-md font-fredoka font-semibold text-pink md:text-xl text-center px-2">
          OR
        </span>
        <hr className="ring ring-black w-full" />
      </div>
      <ButtonGoogle type="submit">Sign in Google</ButtonGoogle>
      <SpanAuth
        path="/login"
        textSpan="Already have an account?"
        textLink="Sign in"
      />
      <ButtonShowPassword stylePosition="top-116 md:top-117 right-10" />
    </form>
  );
};

export default RegisterForm;
