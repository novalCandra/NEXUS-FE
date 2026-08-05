import AsidSidebar from "../../../components/atoms/aside/Aside";
import ButtonDarkMode from "../../../components/atoms/button/ButtonDarkMode";
import ButtonModal from "../../../components/atoms/button/ButtonModal";
import { motion } from "motion/react"
export default function DashboardUser() {
  return (
    <div className="flex flex-1">
      <AsidSidebar />
      <div className="container flex flex-col bg-paper px-5 py-2 min-h-screen space-y-5 max-w-full">
        <motion.div initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4, duration: 0.3 }}>
          <div className="flex flex-col space-y-5">
            <span className="font-fredoka text-gray-500 font-semibold text-md md:text-2xl">Tuesday, October 24</span>
            <h2 className="font-fredoka font-semibold text-4xl md:text-6xl">
              Good Morning, Savira<span className="text-pink">.</span>
            </h2>
            <p className="font-fredoka text-gray-500 text-md md:text-xl">You Have <span className="font-semibold text-black">3 Things</span> to move forward today.</p>
          </div>

          <div className="flex flex-row space-x-3 mt-5">
            <ButtonDarkMode>Dark</ButtonDarkMode>
            <ButtonModal>Capture</ButtonModal>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
