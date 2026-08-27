import AsidSidebar from '../../../../components/atoms/aside/Aside'
import imageProfile from "../../../../assets/profile/avatar_batman.png"
import ProfileForm from '../../../../components/organism/ProfileForm'
export default function ProfilePage() {
    return (
        <div className='flex min-h-screen overflow-hidden'>
            <AsidSidebar />
            <div className="flex flex-col px-3 py-10 container bg-paper max-w-full">
                <div className="flex flex-row py-5 justify-between">
                    <h2 className='font-fredoka font-semibold text-4xl md:text-5xl lg:text-6xl'>HI SAVIRA<span className='text-pink'>.</span></h2>
                </div>
                <div className="flex flex-col items-center space-y-3.5 relative">
                    <img src={imageProfile} alt='Profile' className='w-52 h-52' />
                    <h2 className='font-fredoka font-bold text-3xl'>SAVIRA OLIVIA PUTRI</h2>
                    <ProfileForm />
                </div>
            </div>
        </div>
    )
}
