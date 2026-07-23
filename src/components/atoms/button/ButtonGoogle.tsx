import { FcGoogle } from "react-icons/fc";

type TypesButtonGoogle = {
  children: string;
  type: "submit" | "button" | "reset";
};

const ButtonGoogle = (props: TypesButtonGoogle) => {
  const { type, children } = props;
  return (
    <button
      type={type}
      className={`flex flex-row items-center justify-center gap-2 px-2 py-3 bg-white text-pink font-fredoka font-semibold ring-2 ring-black shadow-black transition duration-200 delay-150 hover:shadow cursor-pointer`}
    >
      <FcGoogle size={23} />
      {children}
    </button>
  );
};

export default ButtonGoogle;
