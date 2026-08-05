import type { ReactNode } from "react";
import { Link } from "react-router";

type TypeButtonNavbar = {
    type: "button" | "submit" | "reset"
    children: string;
    style: string
    path: string
    icon?: ReactNode
}

const ButtonNavbar = (props: TypeButtonNavbar) => {
    const { children, style, type, path, icon } = props;
    return (
        <button type={type} className={style}>
            <Link to={path}>
                {children}
            </Link>
            {icon}
        </button>
    )
}

export default ButtonNavbar