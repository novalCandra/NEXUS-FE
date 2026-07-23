import { RefreshCcw } from "lucide-react";
import Button from "../atoms/button/Index";
import FormField from "../molecules/FormField";

const VerifyForm = () => {
  return (
    <form className="flex flex-col w-80 md:w-100 gap-6 md:gap-4 text-center">
      <FormField
        forLabel="Verification code"
        name="number"
        placeholder="00000"
        textContent="number"
        type="number"
        styleCenter="placehoder:text-center text-center tracking-[1rem] text-xl"
      />
      <Button type="submit">VERIFY EMAIL</Button>
      <div className="md:mt-4 space-y-2.5">
        <hr className="ring ring-black" />
        <span className="font-fredoka font-medium text-gray-400">
          Didn’t receive a code?
        </span>

        <div className="flex justify-center mt-3">
          <button className="flex flex-row gap-4 justify-center items-center font-fredoka font-semibold">
            <RefreshCcw size={18} /> <span className="underline underline-offset-4">Ruesend Code</span>
          </button>
        </div>
      </div>
    </form>
  );
};

export default VerifyForm;
