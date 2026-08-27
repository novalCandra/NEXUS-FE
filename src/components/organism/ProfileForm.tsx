import Button from "../atoms/button/Button";
import ButtonShowPassword from "../atoms/button/ButtonShowPassowrd";
import FormFieldProfile from "../molecules/FormFieldProfile";

const ProfileForm = () => {
    return (
        <form className='flex flex-col space-y-4'>
            <FormFieldProfile htmlFor="username" id="username" name="username" placeholder="Enter Your username" type="text" value="savira" children="Username"/>
            <FormFieldProfile htmlFor="email" id="email" name="email" placeholder="Enter Your email" type="email" value="savira@gmail.com" children="email"/>
            <FormFieldProfile htmlFor="password" id="password" name="password" placeholder="Enter Your password" type="password" value="savira123" children="password"/>
            <ButtonShowPassword stylePosition="top-129 md:top-128 right-4 md:right-55 lg:right-165" />
            <Button type='submit' variant='primary' size='md'>Save data</Button>
        </form>
    )
}

export default ProfileForm;