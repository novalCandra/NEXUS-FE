import AsidSidebar from "../../../../components/atoms/aside/Aside";
import CardPomoro from "../../../../components/atoms/card/CardPomodoro";
import { motion } from "motion/react"
const PomodoroPage = () => {
  return (
    <div className="flex min-h-screen overflow-hidden">
      <AsidSidebar />
      <div className="flex flex-1 flex-col h-screen bg-paper max-w-full px-4 py-2 space-y-6 md:py-10 md:px-0 lg:px-20 overflow-y-auto md:overflow-hidden lg:overflow-y-auto scrollbar scrollbar-thumb-black scrollbar-track-paper">
        <motion.div initial={{ opacity: 0, y: -100 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.3 }} className="flex flex-col space-y-5 mx-auto">
          <h2 className="text-5xl font-fredoka font-semibold text-dark-surface">
            Procted Your attention.
          </h2>
          <p className="text-xl font-fredoka text-gray-600">
            A Tiny timer for the next right thing.
          </p>
          <div className="flex flex-col md:flex-col lg:flex-row space-x-0 md:space-x-10 space-y-10 md:space-y-15 lg:space-y-0">
            <CardPomoro />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PomodoroPage;
