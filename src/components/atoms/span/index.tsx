import { Link } from "react-router"
type typeSpanAuth = {
    textSpan: string,
    textLink: string,
    path: string
}
const SpanAuth = (props: typeSpanAuth) => {
    const { textLink, path, textSpan } = props
    return (
        <span className="text-sm text-ink/50 font-semibold font-fredoka text-center">{textSpan} <Link to={path}>{textLink}</Link></span>
    )
}
export default SpanAuth