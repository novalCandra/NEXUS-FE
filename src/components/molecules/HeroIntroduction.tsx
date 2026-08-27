import { Dot } from "lucide-react";
import { ConfigInformasiCard } from "../../config/components/CardInformasiConfig";
import CardInformasi from "../atoms/card/CardInfo";

export default function HeroIntroduction() {
    // container min-h-screen md:h-150 flex flex-col px-1 md:flex-1 md:flex-row md:items-center md:justify-between min-w-full bg-paper md:px-10 lg:px-36 py-2 ring-4 ring-black space-x-3 md:space-x-10 lg:space-x-0
    return (
        <>
            <div className="ring-4 ring-black flex flex-col md:flex md:flex-row md:items-center md:justify-between w-full bg-white">
                <div className="flex flex-col px-2 md:px-0 lg:px-2 py-10 md:py-0 w-80 md:w-100 lg:w-200 space-y-3">
                    <span className='text-xl font-fredoka'>One calm system</span>
                    <h2 className='text-5xl md:text-7xl lg:text-6xl font-fredoka font-semibold leading-14 md:leading-20'>Your thoughts deserve better than another tab.</h2>
                </div>
                <div className="flex flex-col md:flex lg:flex-row space-x-10 px-3 md:px-5 py-5 space-y-4 md:space-y-5 lg:space-y-10">
                    {ConfigInformasiCard.map(((item) => (
                        <CardInformasi key={item.id} heading={item.heading} text={item.text} icon={item.icon} style={item.style} />
                    )))}
                </div>
            </div>
            <div className="container w-full h-70 md:h-80 min-w-full bg-black">
                <div className="flex flex-col space-y-4 px-0 py-4 items-center w-80 md:w-140 text-center mx-auto">
                    <Dot size={40} className='text-pink size-10 md:size-12' />
                    <h2 className='text-white font-fredoka text-3xl md:text-6xl font-semibold'>Less noise. More <span className='text-pink'>morrow.</span></h2>
                    <p className='text-white font-fredoka text-md'>A workspace with enough structure to help, and enough space to think.</p>
                    <button type='button' className='border-2 w-72 md:w-64 px-2 py-2 border-white bg-pink font-fredoka shadow-white-200 cursor-pointer duration-200 delay-200 hover:shadow-none'>Make Space for more</button>
                </div>
            </div>
        </>
    )
}
