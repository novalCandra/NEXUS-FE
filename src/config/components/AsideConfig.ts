import { Clock, LayoutDashboard, type LucideIcon, User } from "lucide-react";

interface TypeConfigComponents {
    id : number;
    spanLabel : string;
    path : string;
    icon : LucideIcon
}

export const ConfigAsidebar : TypeConfigComponents[]  = [
    {
        id : 1,
        spanLabel: "Dashboard",
        path: "/dashboard",
        icon : LayoutDashboard
    },
    {
        id: 2,
        spanLabel: "Pomodoro",
        path: "/pomodoro",
        icon: Clock
    },
    {
        id: 3,
        spanLabel: "Profile",
        path: "/profile",
        icon: User
    },
]