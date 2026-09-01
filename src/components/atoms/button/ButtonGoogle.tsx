import { FcGoogle } from "react-icons/fc";

type TypesButtonGoogle = {
  children: string;
  type?: "submit" | "button" | "reset";
  href: string;
};

const ButtonGoogle = (props: TypesButtonGoogle) => {
  const { children, href } = props;
  return (
    <a
      href={href}
      className={`flex flex-row items-center justify-center gap-2 px-2 py-3 bg-white text-pink font-fredoka font-semibold ring-2 ring-black shadow-black transition duration-200 delay-150 hover:shadow cursor-pointer`}
    >
      <FcGoogle size={23} />
      {children}
    </a>
  );
};

export default ButtonGoogle;
