import { Sparkles } from 'lucide-react'

export default function HeroWelcome() {
    return (
        <div className="flex flex-col px-4 md:px-25 md:py-11 py-5 gap-7 w-full md:w-190 z-10">
            <button type='button' className='bg-white border-2 border-black shadow-black-100 font-fredoka font-semibold text-sm w-64 h-10 px-2 translate-x-1 translate-y-2 flex flex-row items-center gap-2 -rotate-4 z-11'><Sparkles className='size-5' size={16} />The Second Brain for Real Time</button>
            <h1 className='font-fredoka text-6xl md:text-8xl text-black font-bold z-999'>Make room for <span className='inline-block underline underline-offset-8 decoration-[0.9rem] -rotate-3  decoration-pink'>better</span> thingking<span className='text-pink'>.</span></h1>
        </div>
    )
}
