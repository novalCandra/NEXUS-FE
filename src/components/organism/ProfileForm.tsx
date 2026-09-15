import fotoProfile from "../../assets/profile/avatar_batman.png"
import { useHooksProfile } from "../../hooks/useHookProfile";
import Button from "../atoms/button/Button";
import Card from "../atoms/card/Card";
import InputUpload from "../atoms/input/upload";
import FormField from "../molecules/FormField";
const ProfileForm = () => {
    const { loading, formvalue, register, handleSubmit, handleSubmitProfile } = useHooksProfile()
    return (
        <>
            <div className="flex flex-col space-y-2.5">
                <span className='text-gray-500 font-fredoka text-xl font-medium uppercase'>account</span>
                <h2 className='text-5xl md:text-6xl font-fredoka font-medium'>YOUR PROFILE<span className='text-pink'>.</span></h2>
                <p className='text-gray-500 font-fredoka font-medium text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="flex flex-col md:flex-row mt-10 justify-center space-y-10 md:space-x-10">
                <Card>
                    <img src={fotoProfile} alt="profile" className='w-40 h-40' />
                    <h2 className='text-4xl font-fredoka text-black font-semibold'>{formvalue.name}</h2>
                    <span className='text-lg font-fredoka text-gray-500 font-semibold'>{formvalue.email}</span>
                    <Button type="submit" size="sd" variant="white">
                        Change Avatar
                    </Button>
                    <InputUpload id="profileImage" type="file" />
                </Card>
                <div className="flex flex-col w-96 md:w-280 h-109 bg-white rounded-2xl border-2 border-black shadow-black-100">
                    <div className='border-b-4 border-black w-full px-10 py-5'>
                        <h2 className='text-4xl md:text-5xl font-fredoka font-bold'>Profile detail's</h2>
                    </div>
                    <form onSubmit={handleSubmit(handleSubmitProfile)}>
                        <div className="flex flex-col px-4 py-5 md:px-10 md:py-5">
                            <div className="grid grid-cols-1 md:grid-cols-2 space-y-3">
                                <div className="flex flex-col gap-3">
                                    <FormField forLabel="name" textContent="NAME" type="text" styleCenter="w-72 md:w-120" {...register("name")} />
                                </div>
                                <div className="flex flex-col gap-3">
                                    <FormField forLabel="email" textContent="EMAIL" type="email" styleCenter="w-72 md:w-120" {...register('email')} />
                                </div>
                                <div className="flex flex-col gap-3">
                                    <FormField forLabel="password" textContent="PASSWORD" type="password" styleCenter="w-72 md:w-250" {...register("password")} />
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-end px-2 py-2 md:px-3 md:py-8 border-t-2 border-black ">
                            <Button size="none" type="submit" variant="yellow" disabled={loading}>Save change</Button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default ProfileForm;