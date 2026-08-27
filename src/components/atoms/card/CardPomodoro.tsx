import { Clock } from "lucide-react";
import { Activity } from "react";
import ModalAddNumber from "../modal/ModalAddNumber";
import { useHooksPomodoro } from "../../../hooks/useHooksPomodoro";

const CardPomoro = () => {
  const { timer, addTimer, formatTimer, handleAddTimer, setStart, start, setAddTimer } = useHooksPomodoro()
  return (
    <div className="bg-white flex flex-col space-y-2.5 justify-between px-10 py-4 items-center w-96 md:w-170 lg:w-120 h-80 md:h-96 shadow-black-100 border-2 border-black relative">
      <span className="text-base font-semibold font-fredoka text-black uppercase">
        deep work session
      </span>
      <h2 className="text-7xl md:text-9xl lg:text-8xl font-fredoka font-extrabold">{formatTimer(timer)}</h2>
      <div className="flex flex-row justify-between gap-5">
        <button onClick={() => setStart(prev => !prev)} type="button" className="bg-black text-white rounded-md w-64 py-5 font-fredoka font-bold text-base md:text-xl lg:text-2xl cursor-pointer">
          {start ? "pause" : "start"}
        </button>
        <button type="button" onClick={handleAddTimer} className="bg-white border-2 border-black py-5 px-6 rounded-md cursor-pointer">
          <Clock size={20} />
        </button>
      </div>
      <Activity mode={addTimer ? "visible" : "hidden"} >
        <ModalAddNumber removeModal={() => setAddTimer(false)} />
      </Activity>
    </div>

  );
};

export default CardPomoro;
