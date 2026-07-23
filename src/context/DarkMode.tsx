import { createContext, useState, type ReactNode } from "react"

interface DarkModeContextType {
    darkMode: boolean;
    setDarkMode: React.Dispatch<React.SetStateAction<boolean>>
}
const DarkModeContext = createContext<DarkModeContextType | null>(null)
const DarkModeContextProvider = ({ children }: { children: ReactNode }) => {
    const [darkMode, setDarkMode] = useState<boolean>(false)
    return (
        <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
            {children}
        </DarkModeContext.Provider>
    )
}
export const DarkMode = DarkModeContext;
export default DarkModeContextProvider