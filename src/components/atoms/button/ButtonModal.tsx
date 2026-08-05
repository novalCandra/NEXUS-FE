import { Plus } from "lucide-react"

const ButtonModal = (props) => {
  const {children} = props
  return (
    <button className="bg-pink-strong font-semibold font-fredoka w-36 border-3 border-black shadow-black-100 flex flex-row items-center justify-center gap-2 text-md duration-200 delay-200 hover:shadow-none cursor-pointer"><Plus />{ children}</button>
  )
}

export default ButtonModal
