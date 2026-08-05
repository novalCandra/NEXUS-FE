import { Clock } from "lucide-react";

const CardPomoro = () => {
  return (
    <div className="bg-white flex flex-col space-y-2.5 justify-between px-10 py-4 items-center w-96 md:w-170 lg:w-100 h-96 shadow-black-100 border-2 border-black">
      <span className="text-base font-semibold font-fredoka text-black uppercase">
        deep work session
      </span>
      <h2 className="text-9xl font-fredoka font-extrabold">25:00</h2>
      <div className="flex flex-row justify-between gap-5">
        <button className="bg-black text-white rounded-md w-64 py-5 font-fredoka font-bold">
          Start
        </button>
        <button className="bg-white border-2 border-black py-5 px-6 rounded-md">
          <Clock size={20} />
        </button>
      </div>
    </div>

  );
};

export default CardPomoro;
