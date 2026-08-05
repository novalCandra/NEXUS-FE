import { Command, Search } from "lucide-react";

type TypeComponentsInputSearch = {
  placeholder: string;
  type: string;
  TextCMD: string;
};

export default function InputSearch(props: TypeComponentsInputSearch) {
  const { placeholder, type, TextCMD } = props;
  return (
    <div className="relative hidden md:flex flex-row">
      <Search className="absolute left-2 top-3" />
      <input
        id={type}
        type={type}
        placeholder={placeholder}
        className="w-10 md:w-100 lg:w-150 px-10 py-1 ring-2 ring-black focus:outline-none focus:ring-2 focus:ring-gray-700 rounded-md placeholder:text-gray-400 font-fredoka bg-white"
      />
      <button className="absolute flex flex-row items-center gap-3 px-2 top-2.5 right-6 border-2 border-black rounded-md font-fredoka font-semibold">
        <Command size={18} /> {TextCMD}
      </button>
    </div>
  );
}
