import { helperSameDate } from "../utils/helper/sameDate";

export const useHooksCalender = () => {
    const today = new Date();
    const dates = [];
    const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    for (let i = 0; i < 14; i++) {
        const date = new Date(today);
        date.setDate(today.getDate() + i);
        dates.push(date)
    }

    const yesterdays = new Date(today);
    const tomorrow = new Date(today);
    yesterdays.setDate(today.getDate() - 1)
    tomorrow.setDate(today.getDate() + 1)

    // Get DateColors
    const getDataColors = (date: Date) => {
        if (helperSameDate(date, today)) {
            return "bg-purple text-white opacity-100 cursor-pointer"
        }

        if (helperSameDate(date, yesterdays)) {
            return "bg-pink opacity-75 text-white cursor-pointer"
        }

        if (helperSameDate(date, tomorrow)) {
            return "bg-pink opacity-75 text-white cursor-not-allowed"
        }
        return "bg-paper text-gray-500 cursor-pointer"
    }

    return { dates, month, getDataColors, today }
}