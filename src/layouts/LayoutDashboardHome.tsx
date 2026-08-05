import { Outlet } from "react-router";
import NavbarHome from "../components/atoms/navbar/NavbarHome";
import Footer from "../components/atoms/footer/footer";

export default function LayoutDashboardHome() {
    return (
        <>
            <NavbarHome />
            <Outlet />
            <Footer />
        </>
    )
}