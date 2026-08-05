import { useState } from "react";
import ImageProfile from "../../../assets/profile/avatar_batman.png"
import { Bell, Menu, X } from "lucide-react";
import { ConfigAsidebar } from "../../../config/components/AsideConfig";
import { NavLink } from "react-router";
import { motion } from "motion/react"
const ButtonProfile = () => {
  const [stateAside, setStateAside] = useState<boolean>(false);
  return (
    <div className="flex flex-row justify-between gap-4 items-center">
      <button>
        <Bell size={26} className="size-7" />
      </button>
      <button className="ring-2 ring-black rounded-full">
        <img src={ImageProfile} alt="Profile" className="w-10 md:w-12 rounded-full" />
      </button>
      <button className="block md:hidden" onClick={() => setStateAside(true)}>
        <Menu />
      </button>
      {stateAside && (
        <motion.div initial={{ opacity: 0, y: -100 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ delay: 0.4, duration: 0.2 }} className="absolute top-0 left-0 w-full bg-paper min-h-screen z-50 py-10 flex flex-col space-y-10 justify-center items-center">
          <h2 className="font-fredoka text-xl">HOMEPAGE</h2>
          <button className="absolute top-10 right-10" onClick={() => setStateAside(false)}>
            <X className="text-dark-surface size-8 " />
          </button>
          <ul className="space-y-10 px-10">
            {ConfigAsidebar.map((item) => (
              <li key={item.id} >
                <NavLink to={item.path} className={({ isActive }) =>
                  `flex flex-row space-x-2 items-center ${isActive ? "bg-pink-strong w-52 px-2 h-15 rounded-sm shadow-black-200 duration-200 delay-200 hover:shadow-none" : "cursor-pointer duration-75 delay-75 hover:bg-white hover:border-2 border-black w-52 h-15 px-2"}`
                }>
                  <item.icon size={20} className="text-black" />
                  <span className="font-fredoka text-xl">{item.spanLabel}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </motion.div>
      )
      }
    </div >
  );
};

export default ButtonProfile;
