import { redirect } from "react-router";

const ProctedAuth = () => {
    const token = localStorage.getItem("token");
    if (!token ) {
        throw redirect("/login")
    }
    return null
}

export default ProctedAuth