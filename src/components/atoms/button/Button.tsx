import type { LucideIcon } from "lucide-react";
import { cn } from "../../../utils/lib/utils"
import { Link } from "react-router";

type Variants = "primary" | "secondary" | "accent" | "transparent";
type Sizes = "xs"| "sm" | "md" | "lg";

export type TypeButton = {
    children: string;
    variant: Variants;
    size: Sizes;
    icon?: LucideIcon
    path?: string,
    type: "button" | "submit" | "reset",
    props?: [];
}

export default function Button({ children, variant = "primary", size = 'md', icon: Icon, path, type, props }: TypeButton) {
    const baseStyle = "font-fredoka font-semibold transition-shadow"
    const variants = {
        primary: 'bg-black text-white hover:shadow-lg flex flex-row items-center justify-center gap-2 cursor-pointer shadow-black-200',
        secondary: 'bg-white text-black hover:shadow-lg flex flex-row items-center justify-center gap-2 cursor-pointer shadow-black-200',
        accent: 'bg-pink border-2 border-white flex flex-row items-center justify-center gap-2 cursor-pointer shadow-black-200',
        transparent : "uppercase font-fredoka cursor-pointer font-bold"
    }

    const sizes = {
        xs : "px-2 py-2",
        sm: 'px-2 py-2 w-28',
        md: 'px-2 py-3 w-41',
        lg: 'px-8 py-4 w-64'
    }
    return (
        <Link to={path}>
            <button type={type} className={cn(baseStyle, variants[variant], sizes[size])} {...props}>{children} {Icon && <Icon size="20" />}</button>
        </Link>
    )
}
