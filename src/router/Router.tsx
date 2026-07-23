import { createBrowserRouter } from "react-router";
import PageLogin from "../page/auth/login";
import PageRegister from "../page/auth/register";
import PageVerify from "../page/auth/verify";
import DashboardUser from "../page/auth/user/dashboard";
import LayoutsUser from "../layouts/LayoutsUser";
const router = createBrowserRouter([
  {
    path: "/login",
    element: <PageLogin />,
  },
  {
    path: "/register",
    element: <PageRegister />,
  },
  {
    path: "/verify",
    element: <PageVerify />,
  },
  {
    path: "dashboard",
    Component: LayoutsUser,
    children: [
      { index: true, Component: DashboardUser },
      { path: "verify", Component: PageVerify }
    ]
  }
]);

export default router;
