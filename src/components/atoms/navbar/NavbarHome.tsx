import { ArrowRight } from "lucide-react"
import { motion } from "motion/react"
import ButtonNavbar from "../button/buttonNavbar"
function NavbarHome() {
    return (
        <motion.div initial={{ opacity: 0, y: -100 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.3 }}>
            <nav className="flex flex-row justify-between py-4 bg-paper px-5 md:px-20 items-center border-b-4 border-black">
                <h2 className="flex flex-row items-center gap-1 text-2xl font-fredoka font-semibold"><span className="px-2 py-1 rounded-md bg-pink text-black">V</span>iraOliv</h2>
                <ul className="hidden md:flex flex-row justify-between items-center space-x-5">
                    <li className="font-fredoka font-medium text-sm">FEATURES</li>
                    <li className="font-fredoka font-medium text-sm">HOW IT WORKS</li>
                    <li className="font-fredoka font-medium text-sm">MANIFESTOR</li>
                </ul>
                <div className="flex flex-row space-x-5 md:space-x-10">
                    <ButtonNavbar path="/register" type="button" style="hidden md:block font-fredoka font-semibold cursor-pointer">
                        Sign in
                    </ButtonNavbar>
                    <ButtonNavbar type="button"  path="/login" icon={<ArrowRight size={16} />} style={"bg-pink shadow-black-100 duration-200 delay-200 hover:shadow-none border-2 font-fredoka font-semibold border-black h-10 w-36 cursor-pointer flex flex-row  items-center justify-center gap-2"}>Get Started</ButtonNavbar>
                </div>
            </nav>
        </motion.div>
    )
}

export default NavbarHome
