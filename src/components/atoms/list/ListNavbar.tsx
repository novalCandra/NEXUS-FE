import { Link } from "react-router"

type ListTypeNavbar = {
    path: string;
    reloadMapping: []
}

const ListNavbar = (props: ListTypeNavbar) => {
    const { path, reloadMapping } = props
    return (
        <ul className="hidden md:flex flex-row justify-between items-center space-x-5">
            {reloadMapping.map((item) => (
                <Link id={item.id} to={path} className="font-fredoka font-medium text-sm">{item}</Link>
            ))}
        </ul>
    )
}

export default ListNavbar