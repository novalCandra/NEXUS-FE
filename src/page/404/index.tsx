import Button from "../../components/atoms/button/Button";
import { motion } from "motion/react"
export default function PageNotFound() {
    return (
        <div className="bg-paper min-h-screen flex flex-col justify-center items-center">
            <motion.div initial={{ opacity: 0, y: -100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }} className="flex flex-col justify-center items-center w-96 md:w-150 px-10 h-60 border-4 border-dashed border-gray-400 bg-gray-100 text-center space-y-2.5 md:space-y-1.5">
                <h1 className="font-fredoka font-bold text-2xl md:text-4xl lg:text-5xl">Page Not found</h1>
                <p className="font-fredoka font-semibold  text-gray-500  text-base">The page was not found. Please check the page you were looking for agains</p>
                <Button path="/" size="md" type="button" variant="primary">Back to Home</Button>
            </motion.div>
        </div>
    )
}
