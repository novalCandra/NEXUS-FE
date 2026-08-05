// import { Outlet } from "react-router";
import NavbarTemplateUser from "../components/template/NavbarTemplateUser";
import AnimatedOutlet from "../anim/animatedOutlet";

export default function LayoutsUser() {
  return (
    <>
      <NavbarTemplateUser />
      <AnimatedOutlet />
    </>
  );
}
