import { useHookAuthRegister } from "../../hooks/useHooksRegister";
import ButtonGoogle from "../atoms/button/ButtonGoogle";
import ButtonShowPassword from "../atoms/button/ButtonShowPassowrd";
import Button from "../atoms/button/Index";
import SpanAuth from "../atoms/span";
import FormField from "../molecules/FormField";

const RegisterForm = () => {
  const { showPassword, register, handleSubmit, errors, handlePassword, dataOnsubmit } = useHookAuthRegister();
  return (
    <form onSubmit={handleSubmit(dataOnsubmit)} className="flex flex-col w-80 md:w-100 gap-4 justify-between relative">
      <FormField
        forLabel="Name"
        placeholder="Enter your name"
        textContent="name"
        type="text"
        {...register('name')}
      />
      {errors?.name && <span className="text-red-500 font-fredoka h-4 space-y-1.5 w-full">{errors.name?.message}</span>}
      <FormField
        forLabel="email"
        placeholder="your@gmail.com"
        textContent="email"
        type="email"
        {...register('email')}
      />
      {errors?.email && <span className="text-red-500 font-fredoka h-4 space-y-1.5 w-full ">{errors.email?.message}</span>}
      <FormField
        forLabel="password"
        placeholder="******"
        textContent="password"
        type={showPassword ? "text" : "password"}
        {...register('password')}
      />
      {errors?.password && <span className="text-red-500 font-fredoka h-4 space-y-1.5 w-full">{errors.password?.message}</span>}
      <Button type="submit">Create my Space</Button>
      <div className="flex flex-row justify-between items-center">
        <hr className="ring ring-black w-full" />
        <span className="text-md font-fredoka font-semibold text-pink md:text-xl text-center px-2">
          OR
        </span>
        <hr className="ring ring-black w-full" />
      </div>
      <ButtonGoogle href={import.meta.env.VITE_API_GOOGLE}>Sign in Google</ButtonGoogle>
      <SpanAuth
        path="/login"
        textSpan="Already have an account?"
        textLink="Sign in"
      />
      <ButtonShowPassword stylePosition={`${errors?.password ? 'top-76 md:top-77 right-1' : 'top-60 md:top-60 right-1'}`} showPassword={showPassword} onToggle={handlePassword} />
    </form>
  );
};

export default RegisterForm;
