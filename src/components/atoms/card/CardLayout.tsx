import CardTask from "./CardTask"
import CardTodoList from "./CardTodoList"

const CardLayoutTask = () => {
    return (
        <div className="bg-white h-140 md:h-100 lg:h-80 w-full md:w-140 lg:md-150 flex flex-col space-y-2 px-4 py-3 border-2 border-black shadow-black-100">
            <div className="flex flex-row space-x-2.5 justify-between">
                <div className="flex flex-col space-y-1">
                    <span className="text-md font-fredoka text-black">Tuesday, October 24</span>
                    <h3 className="text-2xl font-fredoka font-semibold">Good morning, Savira</h3>
                </div>
                <span className="bg-pink h-10 w-10 px-2 py-1 rounded-full text-center border-2 border-black">S</span>
            </div>
            <hr className="bg-black h-1 w-full" />
            <div className="flex flex-col md:flex-row space-x-2.5">
                <CardTodoList />
                <CardTask />
            </div>
        </div>
    )
}

export default CardLayoutTask