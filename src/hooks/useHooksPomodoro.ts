import { useEffect, useState } from "react";

export const useHooksPomodoro = () => {
    const [timer, setTimer] = useState<number>(1500);
    const [start, setStart] = useState<boolean>(false)
    const [addTimer, setAddTimer] = useState<boolean>(false)

    function handleAddTimer() {
        setAddTimer((prev => !prev))
    }

    useEffect(() => {
        let intervalTimer: ReturnType<typeof setInterval> | null = null;
        if (start) {
            intervalTimer = setInterval(() => {
                setTimer((prev) => {
                    if (prev <= 1) {
                        // clearInterval(intervalTimer)
                        return 0
                    }
                    return prev - 1
                })
            }, 1000)

            return () => {
                if (intervalTimer) {
                    clearInterval(intervalTimer)
                }
            }
        }
    }, [start])

    const formatTimer = (totalTimer: number) => {
        const minutes = Math.floor(totalTimer / 60);
        const seconds = totalTimer % 60;
        const formatMinutes = String(minutes).padStart(2, '0');
        const formatSecond = String(seconds).padStart(2, '0');
        return `${formatMinutes} : ${formatSecond}`
    }

    return {formatTimer, timer, setStart, addTimer, handleAddTimer, start, setAddTimer}
}