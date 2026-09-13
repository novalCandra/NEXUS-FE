import { X } from "lucide-react"
import FormField from "../../molecules/FormField"

type typeModalAddNumber = {
    removeModal: () => void
}

const ModalAddNumber = ({ removeModal }: typeModalAddNumber) => {
    return (
        <div className="absolute right-[31%] top-[30%] bg-paper w-120 h-85 border-2 border-black z-999 shadow-black-300 hover:shadow-none duration-200 delay-200">
            <div className="flex flex-row justify-between px-5 py-5 border-b-4 border-black items-center">
                <h2 className="text-3xl font-fredoka font-bold">Time Pomodoro</h2>
                <button type="button" onClick={removeModal} className="cursor-pointer"><X /></button>
            </div>
            <form className="flex flex-col px-5 py-3 space-y-3.5">
                <FormField
                    forLabel="Minutes"
                    textContent="Minutes"
                    placeholder="Minutes Pomodoro"
                    name="minutes"
                    type="number"
                    styleCenter="text-xl bg-white"
                />
                <FormField
                    forLabel="Seconds"
                    textContent="Seconds"
                    placeholder="Seconds Pomodoro"
                    name="seconds"
                    type="number"
                    styleCenter="text-xl bg-white"
                />
                <button type="button" className="bg-pink font-fredoka w-50 h-10 mx-auto font-medium shadow-black-200 cursor-pointer">SAVE DATA </button>
            </form>
        </div>
    )
}

export default ModalAddNumber