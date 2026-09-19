import type { LucideIcon } from "lucide-react";
import { cn } from "../../../utils/lib/utils"
import { Link } from "react-router";

type Variants = "primary" | "secondary" | "accent" | "transparent" | "accentPinkColors" | "yellow" | "white";
type Sizes = "xs" | "sm" | "md" | "lg" | "none" | "sd";

export type TypeButton = {
    children: string;
    variant: Variants;
    size: Sizes;
    icon?: LucideIcon
    path?: string,
    type: "button" | "submit" | "reset",
    props?: [];
    disabled?: boolean;
}

export default function Button({ children, variant = "primary", size = 'md', icon: Icon, path, type, disabled }: TypeButton) {
    const baseStyle = "font-fredoka font-semibold transition-shadow"
    const variants = {
        primary: 'bg-black text-white hover:shadow-lg flex flex-row items-center justify-center gap-2 cursor-pointer shadow-black-200',
        secondary: 'bg-white text-black hover:shadow-lg flex flex-row items-center justify-center gap-2 cursor-pointer shadow-black-200',
        accent: 'bg-pink border-2 border-white flex flex-row items-center justify-center gap-2 cursor-pointer shadow-black-200',
        accentPinkColors: 'bg-pink border-2 border-pink flex flex-row items-center justify-center gap-2 cursor-pointer shadow-black-200',
        transparent: "uppercase font-fredoka cursor-pointer font-bold",
        yellow: "bg-yellow font-fredoka w-30 h-10 border-2 border-black shadow-black-100 cursor-pointer hover:shadow-none font-bold disabled:opacity-70 disabled:cursor-not-allowed disabled:shadow-none",
        white: "bg-white  font-fredoka font-black border-4 border-black"
    }

    const sizes = {
        none: "",
        sd: "px-5 py-1",
        xs: "px-2 py-2",
        sm: 'px-2 py-2 w-30',
        md: 'px-2 py-3 w-41',
        lg: 'px-8 py-4 w-64'
    }
    return (
        path ? (
            <Link to={path} className={cn(baseStyle, variants[variant], sizes[size])}>
                {children}
                {Icon && <Icon size={20} />}
            </Link>
        ) : (
            <button
                type={type}
                    disabled={disabled}
                className={cn(baseStyle, variants[variant], sizes[size])}
            >
                {children}
                {Icon && <Icon size={20} />}
            </button>

        )
    )
}
