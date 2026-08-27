import { createBrowserRouter } from "react-router-dom";
import PageLogin from "../page/auth/login";
import PageRegister from "../page/auth/register";
import PageVerify from "../page/auth/verify";
import DashboardUser from "../page/auth/user/dashboard";
import LayoutsUser from "../layouts/LayoutsUser";
import PomodoroPage from "../page/auth/user/pomodoro/pomodoro";
import PageHome from "../page/home/home";
import LayoutDashboardHome from "../layouts/LayoutDashboardHome";
import ProfilePage from "../page/auth/user/profille/profile";
import ProctedAuth from "./auth/ProctedAuth";
import PageNotFound from "../page/404";
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
    path: "/",
    Component: LayoutDashboardHome,
    children: [
      { index: true, Component: PageHome }
    ]
  },
  {
    Component: LayoutsUser,
    loader: ProctedAuth,
    children: [
      { path: "dashboard", Component: DashboardUser },
      { path: "pomodoro", Component: PomodoroPage },
      { path: "profile", Component: ProfilePage },
    ],
  },
  {
    path: "*",
    element: < PageNotFound />
  }
]);

export default router;

