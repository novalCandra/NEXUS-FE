import { Calendar, Clock, Command, LayoutDashboard, Activity, type LucideIcon } from "lucide-react";

interface TypeConfigComponents {
    id : number;
    spanLabel : string;
    path : string;
    icon : LucideIcon
}

export const ConfigAsidebar : TypeConfigComponents[]  = [
    {
        id : 1,
        spanLabel : "Today",
        path : "/today",
        icon : LayoutDashboard
    },
    {
        id : 2,
        spanLabel : "Dashboard",
        path : "/dashboard",
        icon : Activity
    },
    {
        id : 3,
        spanLabel : "Task",
        path : "/task",
        icon : Command
    },
   
    {
        id : 4,
        spanLabel : "Calender",
        path : "/calender",
        icon : Calendar
    },
    {
        id : 5,
        spanLabel : "Pomodoro",
        path : "/pomodoro",
        icon : Clock
    },
]