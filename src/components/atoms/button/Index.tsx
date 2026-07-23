type ButtonType = {
    children: string
    type: "submit" | "button" | "reset"
}
const Button = (props: ButtonType) => {
    const { children, type } = props;
    return (
        <button type={type} className={`bg-pink text-white font-fredoka ring-2 ring-black shadow-black px-2 py-3  transition duration-200 delay-150 hover:shadow cursor-pointer`}>{children}</button>
    )
}
export default Button