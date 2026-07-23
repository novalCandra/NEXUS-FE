import ButtonProfile from "../atoms/button/ButtonProfile";
import InputSearch from "../atoms/input/InputSearch";

const NavbarTemplateUser = () => {
  return (
    <nav className="hidden md:flex flex-row justify-between px-10 py-5 bg-paper border-4 border-paper border-b-black">
      <h2 className="flex flex-row items-center gap-2 text-2xl font-fredoka font-semibold">
        <span className="px-2 py-1 rounded-md  bg-pink ring-2 ring-black">M</span>
        morrow
      </h2>
      <InputSearch placeholder="Search Your Mind" type="text" TextCMD="K" />
      <ButtonProfile />
    </nav>
  );
};

export default NavbarTemplateUser;
