import type React from "react"

type CardTypes = {
    children: React.ReactNode
}
const Card = (props: CardTypes) => {
    const { children } = props
    return (
        <div className="flex flex-col w-96 md:w-100 py-10 px-5 bg-white space-y-4 items-center justify-center border-2 border-black shadow-black-100 rounded-2xl">
            {children}
        </div>
    )
}

export default Card
