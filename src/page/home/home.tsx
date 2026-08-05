import { ArrowRight, CalendarRange, CheckIcon, Dot, FileIcon, Play, Sparkles } from 'lucide-react'
import CardTimerVirtual from '../../components/atoms/card/CardTimer'
import CardLayoutTask from '../../components/atoms/card/CardLayout'
import CardInformasi from '../../components/atoms/card/CardInfo'
import { motion } from "motion/react"
export default function PageHome() {
  return (
    <motion.div initial={{ opacity: 0, y: -100 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.5 }} className="container min-h-screen min-w-full bg-paper">
      <div className="flex flex-col px-4 md:px-25 md:py-11 py-5 gap-7 w-82 md:w-190 z-10">
        <button type='button' className='bg-white border-2 border-black shadow-black-100 font-fredoka font-semibold text-sm w-64 h-10 px-2 translate-x-1 translate-y-2 flex flex-row items-center gap-2 -rotate-4 z-11'><Sparkles className='size-5' size={16} />The Second Brain for Real Time</button>
        <h1 className='font-fredoka text-6xl md:text-8xl text-black font-bold z-999'>Make room for <span className='inline-block underline underline-offset-8 decoration-[0.9rem] -rotate-3  decoration-pink'>better</span> thingking<span className='text-pink'>.</span></h1>
      </div>
      <div className="flex flex-col px-4 md:px-25 py-4 space-y-10 relative z-10">
        <div className='w-full md:w-100'>
          <p className='font-fredoka text-dark-surface text-2xl'>ViraOliv brings your notes, tasks, and time into one beautifully simple place — so the next right thing is always easier to see.</p>
        </div>
        <div className="flex flex-row space-x-5">
          <button type='button' className='bg-black font-fredoka text-white w-48 h-14 shadow-black-200 border-2 border-black flex flex-row items-center justify-center gap-2'>Get Started <ArrowRight className='size-5' /></button>
          <button type='button' className='bg-white font-fredoka text-black w-48 h-14 shadow-black-200 border-2 border-black flex flex-row items-center justify-center gap-2'> <Play className="size-5" /> See how it works </button>
        </div>
        <span className='font-fredoka text-md text-gray-400 font-bold'>No credit card · Your data stays yours</span>
        <div className="flex flex-col md:flex-row space-x-8 space-y-8">
          <CardLayoutTask />
          <CardTimerVirtual />
        </div>
        <div className='absolute -top-64 -right-0 md:right-30 bg-purple h-64 md:h-100 w-64 md:w-100 rounded-full border-2 border-black -z-1' />
      </div>
      <div className="container min-h-screen md:h-150 flex flex-col px-1 md:px-4 md:flex-1 md:flex-row md:items-center md:justify-between min-w-full bg-white md:px-36 py-2 ring-4 ring-black">
        <div className="flex flex-col px-4 md:px-1 py-10 md:py-0 w-200  space-y-3 ">
          <span className='text-xl font-fredoka'>One calm system</span>
          <h2 className='text-5xl md:text-8xl  font-fredoka font-semibold leading-14 md:leading-20'>Your thoughts deserve better than another tab.</h2>
        </div>
        <div className="flex flex-col md:flex-row space-x-10 px-5 py-5 space-y-10">
          <CardInformasi heading='Think in connections' text='Write in markdown, link ideas bidirectionally, and let your knowledge base grow with you.' icon={<FileIcon size={20} />} style='bg-purple' />
          <CardInformasi heading='Make progress visible' text='Turn intentions into clear tasks with priorities, due dates, and a board that stays calm.' icon={<CheckIcon size={20} />} style='bg-yellow' />
          <CardInformasi heading='Own your time' text='See notes, tasks, and commitments together. Morrow finds the space for what matters.' icon={<CalendarRange size={20} />} style='bg-pink' />
        </div>
      </div>
      <div className="container min-w-full ring-4 ring-black md:py-10">
        <div className="flex flex-col  px-4 py-10 md:px-45 md:py-0  pt-10 space-y-3 w-40 md:w-150 ">
          <span className='font-fredoka text-xl text-gray-500'>A better loop</span>
          <h2 className='text-4xl font-fredoka font-bold'>Capture.
            <p className='text-pink'>Connect.</p>
            Complete.</h2>
        </div>
        <div className="flex flex-col px-4 md:px-45 py-4 space-y-5">
          <p className='font-fredoka'>Ideas become notes. Notes become context. Context becomes action. Morrow gives every thought somewhere useful to go.</p>
          <button type='button' className='bg-yellow w-44 h-10 border-2 border-black font-fredoka shadow-black-100 flex flex-row items-center justify-center gap-2'>Build your Space <ArrowRight size={20} className='items-center' /></button>
        </div>
      </div>

      <div className="container w-full h-70 md:h-80 min-w-full bg-black">
        <div className="flex flex-col space-y-4 px-2 py-4 justify-center items-center text-center">
          <Dot size={26} className='text-pink size-10' />
          <h2 className='text-white font-fredoka text-3xl md:text-6xl font-semibold'>Less noise.  <br />More <span className='text-pink'>morrow.</span></h2>
          <p className='text-white font-fredoka text-md'>A workspace with enough structure to help, and enough space to think.</p>
          <button type='button' className='border-2 px-2 py-2 border-white bg-pink font-fredoka shadow-white-200 cursor-pointer duration-200 delay-200 hover:shadow-none'>Make Space for more</button>
        </div>
      </div>
    </motion.div>
  )
}
