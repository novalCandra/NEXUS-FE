import { Link } from "react-router"

type ListTypeNavbar = {
    id: number;
    path: string;
    reloadMapping: []
}

const ListNavbar = (props: ListTypeNavbar) => {
    const { id, path, reloadMapping } = props
    return (
        <ul className="hidden md:flex flex-row justify-between items-center space-x-5">
            {reloadMapping.map((item) => (
                <Link key={id} to={path} className="font-fredoka font-medium text-sm">{item}</Link>
            ))}
        </ul>
    )
}

export default ListNavbar