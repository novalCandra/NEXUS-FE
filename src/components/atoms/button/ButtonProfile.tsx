import ImageProfile from "../../../assets/profile/avatar_batman.png"
import { Bell } from "lucide-react";
const ButtonProfile = () => {
  return (
    <div className="flex flex-row justify-between gap-4">
      <button>
        <Bell size={26} className="size-7" />
      </button>
      <button className="ring-2 ring-black rounded-full">
        <img src={ImageProfile} alt="Profile" className="w-12 rounded-full" />
      </button>
    </div>
  );
};

export default ButtonProfile;
