import { ArrowRight } from "lucide-react";
import { motion } from "motion/react"
import type { LucideIcon } from "lucide-react";

type TypeInfoString = {
    text: string;
    heading: string;
    icon?: LucideIcon;
    style: string;

}

const CardInformasi = (props: TypeInfoString) => {
    const { text, heading, icon: Icon, style } = props
    return (
        <motion.div whileHover={{ scale: 1.05, transition: { duration: 0.2 } }} transition={{ duration: 0.4 }} className="bg-white w-91 md:w-72 lg:w-64 h-72 md:h-72 lg:h-96 flex flex-col border-2 px-4 py-5 space-y-9 md:space-y-5 border-black  rounded-md shadow-black-100 cursor-pointer justify-center relative">
            <div className={`${style} px-3 py-4  w-12 rounded-md border-2 border-black`}>
                {Icon && <Icon />}
            </div>
            <div className="flex flex-col space-y-2.5">
                <h2 className="font-fredoka text-2xl font-bold">{heading}</h2>
                <p className="font-fredoka  text-xl md:text-base">{text}</p>
            </div>
            <ArrowRight />
        </motion.div>
    )
}

export default CardInformasi