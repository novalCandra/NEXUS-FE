import { Clock } from "lucide-react"

const CardTimerVirtual = () => {
    return (
        <div className="bg-mint flex flex-col w-full md:w-140 lg:w-100 h-40 md:h-[33vh] shadow-black-100 px-4 py-3 rounded-md justify-between border-2 border-black">
            <div className="flex flex-row justify-between items-center">
                <Clock size={20} />
                <span className="uppercase text-sm font-fredoka text-black font-semibold">Focus Ritual</span>
            </div>
            <div className="flex flex-col relative">
                <h2 className="text-5xl md:text-8xl font-fredoka font-semibold">25:00</h2>
                <div className="w-full h-4 bg-white rounded-xs border-2 border-black mt-4">
                    <div
                        className="w-full h-4 bg-purple rounded-xs border-2 border-black mt-4 absolute top-12 md:top-24"
                        style={{ width: "45%" }}
                    ></div>
                </div>
            </div>
            <span className="font-semibold font-fredoka">Review launch copy</span>
        </div>
    )
}

export default CardTimerVirtual