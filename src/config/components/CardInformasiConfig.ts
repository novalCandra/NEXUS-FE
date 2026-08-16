import { CalendarRange, CheckIcon, FileIcon, type LucideIcon } from "lucide-react";
type TypeInfoString = {
    id : number;
    text: string;
    heading: string;
    icon?: LucideIcon;
    style: string;
}

export const ConfigInformasiCard : TypeInfoString[] = [
    {
        id : 1,
        heading : "Think in connections",
        text : "Write in markdown, link ideas bidirectionally, and let your knowledge base grow with you.",
        icon : FileIcon,
        style : "bg-purple"
    },
    {
        id : 2,
        heading : "Make progress visible",
        text : "Turn intentions into clear tasks with priorities, due dates, and a board that stays calm.",
        icon : CheckIcon,
        style : "bg-yellow"
    },
    {
        id : 3,
        heading : "Own your time",
        text : "See notes, tasks, and commitments together. Morrow finds the space for what matters.",
        icon : CalendarRange,
        style : "bg-pink"
    },
]