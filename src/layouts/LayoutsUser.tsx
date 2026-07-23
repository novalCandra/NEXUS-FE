import { Outlet } from "react-router";
import NavbarTemplateUser from "../components/template/NavbarTemplateUser";

export default function LayoutsUser() {
    return (
        <>
            <NavbarTemplateUser />
            <Outlet />
        </>
    )
}
