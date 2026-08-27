import { NavLink } from "react-router"
import { ConfigAsidebar } from "../../../config/components/AsideConfig"
const AsidSidebar = () => {
  return (
    <div className="hidden sm:hidden md:hidden lg:flex bg-paper border-r-4 border-black flex-col min-h-screen w-65 px-5 py-10 space-y-5">
      <h2 className="font-fredoka text-dark-surface font-semibold cursor-pointer">HOMEPAGE</h2>
      <ul className="space-y-10 px-1">
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
    </div >
  )
}

export default AsidSidebar
