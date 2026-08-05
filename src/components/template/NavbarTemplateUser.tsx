import ButtonProfile from "../atoms/button/ButtonProfile";
import InputSearch from "../atoms/input/InputSearch";

const NavbarTemplateUser = () => {
  return (
    <nav className="flex flex-row justify-between px-10 py-5 bg-paper border-b-4 border-black max-w-full">
      <h2 className="flex flex-row items-center gap-1 text-2xl font-fredoka font-semibold">
        <span className="px-2 py-1 rounded-md bg-pink">V</span>
        iraOliv
      </h2>
      <InputSearch placeholder="Search Your Mind" type="text" TextCMD="K" />
      <ButtonProfile />
    </nav>
  );
};

export default NavbarTemplateUser;
