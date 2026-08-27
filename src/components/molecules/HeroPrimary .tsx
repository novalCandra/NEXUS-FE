import { Play } from "lucide-react"
import Button from "../atoms/button/Button"
import CardLayoutTask from "../atoms/card/CardLayout"
import CardTimerVirtual from "../atoms/card/CardTimer"
export default function HeroPrimary() {
    return (
        <div className="flex flex-col px-1 md:px-25 py-4 space-y-10 relative z-10 w-full md:w-100 lg:w-full">
            <div className='w-full md:w-100'>
                <p className='font-fredoka text-dark-surface text-2xl'>ViraOliv brings your notes, tasks, and time into one beautifully simple place — so the next right thing is always easier to see.</p>
            </div>
            <div className="flex flex-row space-x-5">
                <Button type='button' path={"/login"} variant='primary' size='md'>Get Startted</Button>
                <Button type='button' path={"/login"} variant='secondary' size='md' icon={Play}>See how it work</Button>
            </div>
            <span className='font-fredoka text-md md:text-base lg:text-xl text-gray-400 font-bold'>No credit card · Your data stays yours</span>
            <div className="flex flex-col md:flex-col lg:flex-row space-x-8 space-y-8 l">
                <CardLayoutTask />
                <CardTimerVirtual />
            </div>
            <div className='absolute -top-64 -right-0 md:-right-110 lg:right-30 bg-purple h-64 md:h-100 w-64 md:w-100 rounded-full border-2 border-black -z-1' />
        </div>
    )
}
