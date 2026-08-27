import { redirect } from "react-router";

const ProctedAuth = ({ children }) => {
    const token = localStorage.getItem("token");
    if (!token ) {
        throw redirect("/login")
    }
    return children
}

export default ProctedAuth

// export const ProctedAuth: React.FC<ProtectedRouteProps> = ({
//     isAuthorization,
//     children
// }) => {
//     const token = localStorage.getItem("token");
//     if (!token || !isAuthorization) {
//         return <Navigate to={"/login"} />
//     }
//     return children 
// }