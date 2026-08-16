import { motion } from "motion/react"
import HeroIntroduction from '../../components/molecules/HeroIntroduction'
import HeroPrimary from '../../components/molecules/HeroPrimary '
import HeroWelcome from '../../components/molecules/HeroWelcome'
export default function PageHome() {
  return (
    <motion.div initial={{ opacity: 0, y: -100 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.5 }} className="container min-h-screen min-w-full bg-paper">
      <HeroWelcome />
      <HeroPrimary />
      <HeroIntroduction /> 
    </motion.div>
  )
}
