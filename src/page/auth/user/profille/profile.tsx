import AsidSidebar from '../../../../components/atoms/aside/Aside'
import ProfileForm from '../../../../components/organism/ProfileForm'
export default function ProfilePage() {
    return (
        <div className='flex min-h-screen overflow-hidden'>
            <AsidSidebar />
            <div className="flex flex-col px-6 py-5 container bg-paper max-w-full relative">
                <ProfileForm />
            </div>
        </div>
    )
}
