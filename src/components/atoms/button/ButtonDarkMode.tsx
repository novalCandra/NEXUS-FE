type TypeDarkMode = {
  children: string;
}
const ButtonDarkMode = (props: TypeDarkMode) => {
  const { children } = props
  return (
    <button type="button" className="bg-white border-3 border-black px-4 py-4 font-fredoka shadow-black-100 font-semibold duration-200 delay-200 cursor-pointer hover:shadow-none">{children}</button>
  )
}

export default ButtonDarkMode
