import { Pencil } from "lucide-react"

const CardTask = () => {
    return(
        <div className="bg-white w-full h-56 md:h-72 lg:h-56 flex flex-col border-2 px-2 py-5 border-black">
            <div className="flex flex-row gap-2 justify-between items-center py-2">
                <Pencil />
                <span className="font-fredoka font-semibold">AI found a moment</span>
            </div>
            <div className="flex flex-col space-y-3 py-2 w-50">
                <h2 className="text-2xl font-fredoka font-bold">"Send the outline by Thursday"</h2>
                <button type="button" className="font-fredoka text-md text-black bg-white border-2 border-black w-30 h-11 cursor-pointer">Add Calender</button>
            </div>
        </div>
    )
}

export default CardTask