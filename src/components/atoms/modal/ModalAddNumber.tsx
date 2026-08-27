import { X } from "lucide-react"

type typeModalAddNumber = {
    removeModal : () => void
}

const ModalAddNumber = (props : typeModalAddNumber) => {
    const {removeModal} = props
    return (
        <div className="bg-paper w-full h-85 border-2 border-black absolute z-999">
            <div className="flex flex-row justify-between px-5 py-5 border-b-4 border-black items-center">
                <h2 className="text-3xl font-fredoka font-bold">Time Pomodoro</h2>
                <button type="button" onClick={removeModal}><X /></button>
            </div>
            <form className="flex flex-col px-5 py-3 space-y-3.5">
                <label htmlFor="minutes" className="font-fredoka font-bold">MINUTES</label>
                <input type="text" id="minutes" name="minutes" className="h-10 border-2 border-black px-2 py-1 bg-white" />
                <label htmlFor="second" className="font-fredoka font-bold">Second</label>
                <input type="text" id="second" name="second" className="h-10 border-2 border-black px-2 py-1 bg-white" />
                <button type="button" className="bg-pink font-fredoka w-50 h-10 mx-auto font-medium shadow-black-200">SAVE DATA </button>
            </form>
        </div>
    )
}

export default ModalAddNumber