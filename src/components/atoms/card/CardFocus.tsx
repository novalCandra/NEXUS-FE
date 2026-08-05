import { Scan } from "lucide-react";

const CardFocusFomodoro = () => {
  return (
    <div className="bg-white flex flex-col px-10 py-10 w-96 md:w-170 lg:w-100 h-96 shadow-black-100 border-2 border-black space-y-9">
      <header className="flex flex-row space-x-2.5 items-center justify-start">
        <Scan size={20} className="md:size-8" />
        <span className="font-fredoka text-dark-surface text-xl md:text-2xl font-black">
          Today's Focus
        </span>
      </header>

      <main className="bg-paper flex flex-col w-full px-2 py-4 h-40 border-2 border-black rounded-sm space-y-2">
        <span className="font-fredoka text-dark-surface font-semibold">
          CURRENT TASK
        </span>
        <h2 className="font-fredoka font-bold text-dark-surface text-2xl">
          Review lauch Copy
        </h2>
        <div className="flex flex-row relative">
        <div className="w-full h-4 bg-white rounded-xs border-2 border-black mt-4">
          <div
            className="w-full h-4 bg-purple rounded-xs border-2 border-black mt-4 absolute -top-0"
            style={{ width: "45%" }}
          ></div>
        </div>
        </div>
      </main>

      <div className="flex flex-row justify-between">
        <div className="flex flex-col items-center gap-2.5 border-2 border-black w-24 md:w-46 lg:w-24 py-2">
          <h3 className="font-fredoka font-bold text-black text-xl md:text-2xl">4</h3>
          <p className="uppercase font-fredoka font-semibold text-black">session</p>
        </div>
        <div className="flex flex-col items-center gap-2.5 border-2 border-black w-24 md:w-46 lg:w-24 py-2">
          <h3 className="font-fredoka font-bold text-black text-xl md:text-2xl">1h</h3>
          <p className="uppercase font-fredoka font-semibold text-black">Focused</p>
        </div>
        <div className="flex flex-col items-center gap-2.5 border-2 border-black w-24 md:w-46 lg:w-24 py-2">
          <h3 className="font-fredoka font-bold text-black text-xl md:text-2xl">12</h3>
          <p className="uppercase font-fredoka font-semibold text-black">Streak</p>
        </div>
      </div>
    </div>
  );
};

export default CardFocusFomodoro;
