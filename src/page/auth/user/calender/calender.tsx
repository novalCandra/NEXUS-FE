import AsidSidebar from "../../../../components/atoms/aside/Aside";
import { useHooksCalender } from "../../../../hooks/useCalender";

export default function CalenderPage() {
    const { month, dates, getDataColors, today } = useHooksCalender()
    return (
        <div className="flex min-h-screen overflow-hidden">
            <AsidSidebar />
            <div className="flex flex-col bg-paper w-full px-5 py-10 md:px-10 md:py-20 space-y-1 md:space-y-5">
                <h1 className="text-5xl md:text-7xl font-fredoka font-bold">Calender</h1>
                <p className="text-2xl md:text-3xl font-fredoka">Calender pada Tahun <span className="font-bold text-pink text-3xl md:text-4xl">{today.getFullYear()}</span>.</p>
                <div className="flex flex-col font-fredoka font-bold text-2xl bg-white rounded-2xl h-full md:h-206 lg:h-106">
                    <div className="hidden md:flex md:flex-row justify-between cursor-pointer px-16">
                        <div>Sun</div>
                        <div>Mon</div>
                        <div>Tue</div>
                        <div>Wed</div>
                        <div>Thun</div>
                        <div>Fri</div>
                        <div>Sat</div>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-x-10 md:gap-x-10 lg:gap-x-24 gap-y-10 text-center border-black border-x-4 border-b-4 py-4 px-4 items-center space-y-2.5 md:space-y-0">
                        {dates.map((item) => (
                            <div key={item.toISOString()} className={`${getDataColors(item)} rounded-2xl w-32 h-40 flex flex-col justify-center text-center duration-200 delay-150 hover:bg-yellow hover:text-white italic `}>{item.getDate()}</div>
                        ))}
                    </div>
                </div>
                <h1 className="font-fredoka text-4xl text-center">{month[today.getMonth()]}</h1>
            </div>
        </div>
    )
}
