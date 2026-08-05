const CardTodoList = () => {
    return (
        <div className="bg-yellow w-full flex flex-col border-2 px-2 py-5 border-black">
            <span className="font-fredoka font-extralight">Today’s momentum</span>
            <div className="flex flex-col space-y-3 py-2">
                <h2 className="text-2xl font-fredoka font-bold">"3 things to move forward."</h2>
                <ul className="px-4 list-disc">
                    <li className="font-fredoka">Review launch copy</li>
                    <li className="font-fredoka">Ship onboarding flow</li>
                </ul>
            </div>
        </div>
    )
}

export default CardTodoList